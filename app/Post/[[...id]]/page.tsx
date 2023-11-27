'use client'

import { IMetadata } from "@/Components/PostCard";
import { Admin } from "@/Components/User";
import { Lexical } from "@/Lexical";
import { CurrentEditor } from "@/Lexical/Utils";
import { BaseCard, Flex, MidStyle } from "@/Styles/Layout";
import { IPost } from "@/app/api/Article/route";
import { Button, Divider, Field, Input, Link, Textarea, tokens } from "@fluentui/react-components";
import { useBoolean, useRequest, useUpdateEffect } from "ahooks";
import { SerializedEditorState } from "lexical";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function PostPage({ params: { id } }: { params: { id: string[] } }) {
  const Id = id?.at(0);

  const { data: meta } = useRequest(async () => {
    if (!Id) return;
    const res = await fetch(`/api/Article/${Id}`);
    return await res.json() as IMetadata;
  }, { cacheKey: `meta${Id}` });

  const { data: abf } = useRequest(async () => {
    if (!Id) return;
    const res = await fetch(`/api/Article/${Id}/Abstract`);
    return await res.text();
  }, { cacheKey: `ab${Id}` });

  const { data: ctx } = useRequest(async () => {
    if (!Id) return;
    const res = await fetch(`/api/Article/${Id}/Content`);
    return await res.json() as SerializedEditorState;
  }, { cacheKey: `ctx${Id}` })

  useUpdateEffect(() => {
    if (meta) {
      setT(meta.Title);
      setCate(meta.Categories);
    }

    if (abf)
      setAb(abf);
  }, [meta, abf]);

  useUpdateEffect(() => {
    if (ctx && CurrentEditor) {
      const state = CurrentEditor.parseEditorState(ctx);
      CurrentEditor.setEditorState(state);
    }
  }, [ctx, CurrentEditor]);

  const [t, setT] = useState<string>();
  const [ab, setAb] = useState<string>();
  const [cate, setCate] = useState<string[]>();

  const [up, { toggle }] = useBoolean();
  const { push } = useRouter();

  return (
    <div style={{
      ...MidStyle,
      rowGap: tokens.spacingVerticalXXL
    }}>
      <Field>
        <Input
          appearance="underline"
          contentBefore="Title"
          placeholder="Article Title Here"
          size="large"
          style={{
            marginTop: "-10px",
            fontSize: tokens.fontSizeBase600,
            columnGap: tokens.spacingHorizontalMNudge
          }}
          value={t}
          onChange={(_, v) => setT(v.value.trim().normalize())}
        />
      </Field>

      <div style={BaseCard as any}>
        <Lexical />
      </div>

      <Divider />

      <Field label="Abstract" size="large">
        <Textarea resize="vertical" placeholder="Article Abstract Here" value={ab} onChange={(_, v) => setAb(v.value.trim().normalize())} />
      </Field>

      <Field label="Categories" size="large">
        <Input
          placeholder="Divide By Slash"
          value={cate?.join(" / ")}
          onChange={(_, v) => setCate(v.value.toUpperCase().normalize().split("/").map(x => x.trim()).filter(x => x))}
        />
      </Field>

      <div style={{
        ...Flex,
        columnGap: tokens.spacingHorizontalS,
        alignSelf: "end"
      }}>
        <Link appearance="subtle" href="/">
          <Button>Cancel</Button>
        </Link>

        <Admin>
          <Button appearance="primary" disabled={up} onClick={async () => {
            const state = CurrentEditor!.getEditorState();
            if (state.isEmpty() || (t?.length || 0) < 2)
              return;

            toggle();

            await fetch(`/api/Article/${Id || ""}`, {
              method: Id ? "PATCH" : "POST",
              body: JSON.stringify({
                Title: t,
                Abstract: ab,
                Categories: cate,
                Content: state.toJSON()
              } as IPost)
            })

            push("/");
          }}>
            Submit
          </Button>
        </Admin>
      </div>
    </div>
  )
}

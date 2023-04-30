"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Divider } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { Comment } from "./Comment";
import { ArticleContent } from "./Content";
import { PostComment } from "./Post";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function ArtiPage({ params: { id } }: { params: { id: string } }) {
  const Id = parseInt(id);

  if (isNaN(Id))
    throw TypeError(`Id is Not a Number: ${id}`);

  const { data } = useRequest(async () => {
    const res = await fetch(`/api/Article/${Id}/Comments`);
    return await res.json() as number[];
  }, { cacheKey: `cmtlist${Id}` });

  return (
    <ColLayout>
      <ArticleContent Id={Id} />

      <Divider />

      <PostComment Id={Id} />

      <Divider />

      {data?.map(x => <Comment Id={x} />)}
    </ColLayout>
  )
}

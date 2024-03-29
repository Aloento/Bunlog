'use client'

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { LexDisplayPreset } from "./Context/Display";
import { LexRichTextPreset } from "./Context/RichText";
import { LexicalContext, type ILexical } from "./Context/Setting";
import { LexEditor } from "./Editor";
import { LexicalNodes } from "./Nodes/LexicalNodes";
import { TableContext } from "./Plugins/TablePlugin";
import { useLexEditorTheme } from "./Themes/LexEditorTheme";

/**
 * Lexical Editor
 *
 * @author Aloento
 * @since MusiLand 0.5.0
 * @version 0.1.0
 */
export function Lexical({
  Namespace = "Bunlog",
  Plugin = LexRichTextPreset,
  Editable = true,
  OnError = (e) => { throw e; },
  State,
  Placeholder,
  Display
}: ILexical): JSX.Element {
  Editable = Display ? false : Editable;

  return (
    <LexicalComposer initialConfig={{
      editorState: State,
      namespace: Namespace,
      nodes: [...LexicalNodes],
      onError: OnError,
      theme: useLexEditorTheme(),
      editable: Editable,
    }}>
      <LexicalContext {...{
        Namespace,
        Plugin: Display ? LexDisplayPreset : Plugin,
        Editable,
        OnError,
        State,
        Placeholder,
        Display
      }}>
        <TableContext>
          <LexEditor />
        </TableContext>
      </LexicalContext>
    </LexicalComposer>
  );
}

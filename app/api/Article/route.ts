import { SerializedEditorState } from "lexical";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  return new Response(JSON.stringify([123, 321]));
}

export interface IPost {
  Title: string;
  Content: SerializedEditorState;
  Abstract: string;
  Categories: string[];
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function POST(request: Request) {
  return new Response(null, {
    status: 201
  })
}

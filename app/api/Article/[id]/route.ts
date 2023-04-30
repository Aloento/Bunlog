import { IMetadata } from "@/Components/PostCard";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const post: IMetadata = {
    Title: "Video processing with WebCodecs",
    Posted: new Date(),
    Categories: ["PROGRAM", "FRONTEND", "WEBCODECS"],
  }

  return new Response(JSON.stringify(post));
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function PATCH(request: Request, { params: { id } }: { params: { id: string } }) {
  return new Response();
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function DELETE(request: Request, { params: { id } }: { params: { id: string } }) {

}

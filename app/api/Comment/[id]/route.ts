import { IComment } from "@/app/Article/[id]/Comment";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  const id = new URL(request.url).pathname.split("/").reverse()[0];

  const res: IComment = {
    Name: "Aloento",
    EMail: "Aloento@Q-Audio.org",
    Posted: new Date(),
    Content: "这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本"
  };

  return new Response(JSON.stringify(res));
}

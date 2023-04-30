import { prisma } from "@/app/api";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const list = await prisma.comment.findMany({ where: { postId: parseInt(id) }, select: { id: true } });
  return new Response(JSON.stringify(list.map(x => x.id)));
}

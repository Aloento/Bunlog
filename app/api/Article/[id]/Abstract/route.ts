import { prisma } from "@/app/api";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const { abstract } = await prisma.post.findFirstOrThrow({ where: { id: parseInt(id) }, select: { abstract: true } });
  return new Response(abstract);
}

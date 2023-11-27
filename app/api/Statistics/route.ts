import { IStatistics } from '@/Components/PersonCard'
import { prisma } from '..'

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  return new Response(JSON.stringify({
    Posts: await prisma.post.count(),
    Categories: await prisma.category.count(),
    Comments: await prisma.comment.count()
  } as IStatistics))
}

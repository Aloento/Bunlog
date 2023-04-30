import { prisma } from "..";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  const cate = await prisma.category.findMany();
  const res: Record<string, number> = {};

  for (const { name } of cate) {
    const num = await prisma.postCate.count({
      where: { categoryName: name }
    })

    res.name = num;
  }

  return new Response(JSON.stringify(res));
}

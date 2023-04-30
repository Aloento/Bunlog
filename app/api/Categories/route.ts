import { IPill } from "@/Components/Pill";
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
  const res: IPill[] = [];

  for (const { name } of cate) {
    const num = await prisma.postCate.count({
      where: { categoryName: name }
    })

    if (num)
      res.push({
        Name: name,
        Count: num
      })
    else
      await prisma.category.delete({ where: { name } })
  }

  return new Response(JSON.stringify(res));
}

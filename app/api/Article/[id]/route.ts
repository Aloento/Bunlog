import { IMetadata } from "@/Components/PostCard";
import { getServerSession } from "next-auth";
import { prisma } from "../..";
import { IPost } from "../route";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const { id: Id, title, posted } = await prisma.post.findFirstOrThrow({
    where: { id: parseInt(id) },
    select: {
      id: true,
      title: true,
      posted: true
    }
  })

  const cate = await prisma.postCate.findMany({
    where: { postId: Id },
    select: { categoryName: true }
  });

  const post: IMetadata = {
    Title: title,
    Posted: posted,
    Categories: cate.map(x => x.categoryName!).filter(x => x),
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
  const s = await getServerSession();
  if (s!.user!.name !== "Aloento")
    throw "Not Admin";

  const Id = parseInt(id);
  const { Title, Content, Abstract, Categories } = await request.json() as IPost;

  await prisma.post.update({
    where: { id: Id },
    data: {
      title: Title.trim().normalize(),
      content: JSON.stringify(Content),
      abstract: Abstract.trim().normalize(),
    },
    select: {}
  })

  await prisma.postCate.deleteMany({ where: { postId: Id } });

  for (let c of Categories) {
    c = c.trim().normalize().toUpperCase();
    const find = await prisma.category.count({ where: { name: c } });

    if (!find)
      await prisma.category.create({ data: { name: c }, select: {} });

    await prisma.postCate.create({ data: { postId: Id, categoryName: c }, select: {} });
  }
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function DELETE(request: Request, { params: { id } }: { params: { id: string } }) {
  const s = await getServerSession();

  if (s!.user!.name === "Aloento")
    await prisma.post.delete({
      where: { id: parseInt(id) },
      select: {}
    })
}

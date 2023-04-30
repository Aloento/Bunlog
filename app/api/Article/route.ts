import { SerializedEditorState } from "lexical";
import { getServerSession } from "next-auth";
import { prisma } from "..";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request) {
  const limit = new URL(request.url).searchParams.get("limit");

  const res = await prisma.post.findMany({
    select: {
      id: true
    },
    take: limit ? parseInt(limit) : undefined
  })

  return new Response(JSON.stringify(res.map(x => x.id)));
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
  const s = await getServerSession();
  if (s!.user!.name !== "Aloento")
    throw "Not Admin";

  const { Title, Content, Abstract, Categories } = await request.json() as IPost;

  const { id } = await prisma.post.create({
    data: {
      title: Title.trim().normalize(),
      content: JSON.stringify(Content),
      abstract: Abstract.trim().normalize(),
    },
    select: {
      id: true
    }
  })

  for (let c of Categories) {
    c = c.trim().normalize().toUpperCase();
    const find = await prisma.category.count({ where: { name: c } });

    if (!find)
      await prisma.category.create({ data: { name: c }, select: {} });

    await prisma.postCate.create({ data: { postId: id, categoryName: c }, select: {} });
  }

  return new Response(null, {
    status: 201
  })
}

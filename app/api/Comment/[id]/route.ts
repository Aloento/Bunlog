import { IComment } from "@/app/Article/[id]/Comment";
import { getServerSession } from "next-auth";
import { prisma } from "../..";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const { userName, posted, content } = await prisma.comment.findFirstOrThrow({
    where: {
      id: parseInt(id)
    }
  })

  const { email } = await prisma.user.findFirstOrThrow({
    where: {
      name: userName
    },
    select: { email: true }
  })

  const res: IComment = {
    Name: userName,
    EMail: email,
    Posted: posted,
    Content: content
  };

  return new Response(JSON.stringify(res));
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function POST(request: Request, { params: { id } }: { params: { id: string } }) {
  const s = await getServerSession();

  await prisma.comment.create({
    data: {
      content: (await request.text()).trim().normalize(),
      postId: parseInt(id),
      userName: s!.user!.name!
    }
  })

  return new Response(null, {
    status: 201
  })
}

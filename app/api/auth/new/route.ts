import { createHash } from "crypto";
import { prisma } from "../..";

export interface INewUser {
  Name: string;
  EMail: string;
  Hash: string;
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export async function POST(request: Request) {
  const { Name, EMail, Hash } = await request.json() as INewUser;

  await prisma.user.create({
    data: {
      name: Name,
      email: EMail,
      hash: createHash("sha256").update(Hash).digest("base64")
    }
  })

  return new Response(null, { status: 201 })
}

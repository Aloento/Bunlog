import { createHash } from "crypto";
import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "../..";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [Credentials({
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Aloento" },
      password: { label: "Password", type: "password", placeholder: "Aloento" }
    },
    async authorize(credentials, req) {
      const { name, email } = await prisma.user.findFirstOrThrow({
        where: {
          name: credentials!.username,
          hash: createHash("sha256").update(credentials!.password).digest("base64")
        }
      })

      return {
        id: name,
        name,
        email,
        image: name === "Aloento" ? "Admin" : null
      };
    }
  })]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


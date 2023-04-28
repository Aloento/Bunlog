import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [Credentials({
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Aloento" },
      password: { label: "Password", type: "password", placeholder: "Aloento" }
    },
    async authorize(credentials, req) {
      return {
        id: "Aloento",
        name: "Aloento",
        email: "Me@Aloen.to"
      };
    }
  })]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


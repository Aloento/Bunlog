import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [Credentials({
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Aloento" },
      password: { label: "Password", type: "password", placeholder: "Aloento" }
    },
    async authorize(credentials, req) {
      return null;
    }
  })]
});

export { handler as GET, handler as POST };

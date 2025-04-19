import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const allowedUsers = [
          {
            username: process.env.ALLOWED_USER_1,
            password: process.env.ALLOWED_PASS_1,
          }
        ];
        const user = allowedUsers.find(
          u => u.username === credentials?.username && u.password === credentials?.password
        );

        if (user) return { id: user.username, name: user.username };
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  }
});

export { handler as GET, handler as POST };

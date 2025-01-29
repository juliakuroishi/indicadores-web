import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
        domain: { label: "Domínio", type: "text" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(process.env.GSI_AUTH_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              loginAD: credentials?.username,
              password: credentials?.password,
              dominio: credentials?.domain,
            }),
          });

          if (!res.ok) throw new Error("Credenciais inválidas");

          const user = await res.json();

          if (user && user.id) {
            return user; // Retorna os dados do usuário autenticado
          }
          return null; // Retorna null se o login falhar
        } catch (error) {
          console.error("Erro durante a autenticação:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as typeof session.user;
      return session;
    },
  },
});

export { authHandler as GET, authHandler as POST }; // Exporte os métodos HTTP necessários

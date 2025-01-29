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
          console.log("Credenciais recebidas no NextAuth:", credentials);
      
          // Validação básica
          if (!credentials?.username || !credentials?.password || !credentials?.domain) {
            throw new Error("Todos os campos são obrigatórios.");
          }
      
          // Faz a chamada ao mockAuth
          const res = await fetch("http://localhost:3000/api/mockAuth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
              domain: credentials.domain,
            }),
          });
      
          if (!res.ok) {
            const errorResponse = await res.json(); // Captura o erro enviado pela API
            throw new Error(errorResponse.error || "Erro ao autenticar.");
          }
      
          const user = await res.json();
      
          if (user && user.id) {
            // Usuário autenticado com sucesso
            return user;
          }
      
          // Caso a resposta seja inesperada
          throw new Error("Erro inesperado ao autenticar.");
        } catch (error: any) {
          console.error("Erro no authorize:", error.message);
          throw new Error(error.message || "Erro desconhecido ao autenticar.");
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

export { authHandler as GET, authHandler as POST };

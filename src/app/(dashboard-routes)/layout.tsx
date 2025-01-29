import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  // Obtém a sessão do NextAuth
  const session = await getServerSession();

  // Redireciona o usuário para a página de login se não houver sessão
  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
}

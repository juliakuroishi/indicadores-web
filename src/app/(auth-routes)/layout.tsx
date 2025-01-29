import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
	children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps){
	const session = await getServerSession()

	if (session) { //se a sessão estiver ativa, vai ser redirecionado dentro da pagina, mesmo acessando a pag de login 
		redirect('/dashboard')
	}

	return <>{children}</>
}
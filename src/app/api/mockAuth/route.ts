import { NextResponse } from "next/server";
import { mockUsers } from "@/src/app/mocks/mockUsers";

export async function POST(req: Request) {
  try {
    const { username, password, domain } = await req.json();

    console.log("recebido no mock",{ username, password, domain }); // Log para verificar os dados recebidos

    const user = mockUsers.find(
      (u) =>
        u.username === username &&
        u.password === password &&
        u.domain === domain
    );

    if (!user) {
      console.error("Credenciais inválidas:", { username, password, domain });
      return NextResponse.json(
        { error: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      id: Math.random().toString(36).substr(2, 9),
      username: user.username,
      name: user.name,
      domain: user.domain,
    });
  } catch (error) {
    console.error("Erro interno ao processar a solicitação:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar a solicitação" },
      { status: 500 }
    );
  }
}

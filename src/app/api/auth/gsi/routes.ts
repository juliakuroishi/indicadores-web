import { NextResponse } from "next/server";

// Função para encapsular o fetch ao GSI
async function authenticateWithGSI(credentials: { dominio: string; loginAD: string; password: string }) {
  const response = await fetch(process.env.GSI_AUTH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GSI_CLIENT_SECRET}`,
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Falha na autenticação com o GSI");
  }

  return response.json();
}

// Handler da rota
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await authenticateWithGSI(body);
    return NextResponse.json(data);
  } catch (error) {
    // Verifica se o erro tem uma propriedade `message`
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    // Caso o erro não seja do tipo esperado, retorne uma mensagem genérica
    return NextResponse.json({ error: "Erro desconhecido" }, { status: 500 });
  }
}

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [dominio, setDominio] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dominios = [
    "ADMINISTRACAO.MS",
    "AGEHAB.MS",
    "AGEMS.MS",
    "AGEPAN.MS",
    "AGEPEN.MS",
    "AGRAER.MS",
    "CGE.MS",
    "DPGE.MS",
    "ESCGOV.MS",
    "FAZENDA.MS",
    "FCMS.MS",
    "FERTEL.MS",
    "FUNDECT.MS",
    "FUNDESPORTE.MS",
    "FUNDTUR.MS",
    "FUNSAU.MS",
    "FUNTRAB.MS",
    "IAGRO.MS",
    "IMASUL.MS",
    "JUCEMS.MS",
    "PGE.MS",
    "PROCON.MS",
    "SEAD.MS",
    "SEC.MS",
    "SED.MS",
    "SEGOV.MS",
    "SEINFRA.MS",
    "SEJUSP.MS",
    "SEMAGRO.MS",
    "SES.MS",
    "SETESCC.MS",
    "Sem Domínio",
  ];

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpa os erros anteriores
  
    try {
      const result = await signIn("credentials", {
        redirect: false, // Evita redirecionamento automático
        username,
        password,
        domain: dominio,
      });
  
      if (!result) {
        setError("Erro desconhecido. Tente novamente.");
        return;
      }
  
      if (result.error) {
        // Exibe a mensagem de erro retornada do NextAuth
        setError(result.error);
        return;
      }
  
      // Redireciona o usuário para o dashboard
      router.replace("/dashboard");
    } catch (error) {
      console.error("Erro inesperado:", error);
      setError("Erro inesperado ao tentar fazer login.");
    }
  };
  
  
  return (
    <div>
      {/* ------ form para o celular -------- */}
      <div className="block sm:hidden">
        <form
          className="mt-20 rounded-md w-full max-w-sm text-white"
          onSubmit={handleSubmit} // Adicionando handleSubmit no formulário mobile
        >
          <p className="text-lg text-center mb-8 font-bold">
            Portal do Servidor
          </p>

          <InputField
            label="Usuário"
            type="text"
            placeholder="usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)} // Adicionando onChange para senha
          />

          {/* select de dominio  */}
          <SelectField
            label="Domínio"
            options={[
              { value: "", label: "Selecionar o domínio" },
              ...dominios.map((dominio) => ({
                value: dominio,
                label: dominio,
              })),
            ]}
            onChange={(e) => setDominio(e.target.value)}
          />

          <div className="text-center">
            {/* Alterado para type="submit" */}
            <button
              type="submit"
              className="btn bg-colorTextLight text-colorPrimary font-bold w-60 mt-4 border-none itens-center"
            >
              Entrar
            </button>
            {error && (
              <div className="bg-colorErro mt-6 rounded-md">
                <p className="text-colorTextLight p-3">{error}</p>
              </div>
              )}
          </div>

          
        </form>
      </div>

      {/* -------- form para o desktop -------- */}
      <div className="hidden sm:block">
        <form
          className="rounded-md w-full"
          onSubmit={handleSubmit} // Adicionando handleSubmit no formulário desktop
        >
          <p className="text-center text-colorTextDark font-bold text-2xl mb-8">
            Portal do Servidor
          </p>

          <InputField
            label="Usuário"
            type="text"
            placeholder="usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)} // Adicionando onChange para senha
          />

          {/* select de dominio  */}
          <SelectField
            label="Domínio"
            options={[
              { value: "", label: "Selecionar o domínio" },
              ...dominios.map((dominio) => ({
                value: dominio,
                label: dominio,
              })),
            ]}
            onChange={(e) => setDominio(e.target.value)}
          />
          <div className="text-center">
            {/* Alterado para type="submit" */}
            <button
              type="submit"
              className="btn bg-colorPrimary text-white font-bold w-60 mt-4 border-none itens-center"
            >
              Entrar
            </button>
            {error && (
              <div className="bg-colorErro mt-6 rounded-md">
                <p className="text-colorTextLight p-3">{error}</p>
              </div>
              )}
          </div>

          
        </form>
      </div>
    </div>
  );
}

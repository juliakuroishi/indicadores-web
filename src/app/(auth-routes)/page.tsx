"use client";

import LoginForm from "@/src/app/components/LoginForm";
import Footer from "@/src/app/components/Footer";
import Image from "next/image";
import logo from "@/src/app/img/Logo-setdig-colorida.svg";
import Header from "@/src/app/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col flex-wrap sm:flex-row bg-colorGradient text-white">
      {/*<!-- Header (aparece apenas no mobile) --> */}
      <div className="block sm:hidden">
        <Header />
      </div>


    
      <div className="flex flex-1 flex-col items-center justify-center sm:bg-white">
        {/*Parte da esquerda: no desktop, será o formulário  */}
        <div className="flex-1 flex items-center justify-center sm:bg-white">
          <LoginForm />
        </div>

        {/*Parte da esquerda: logo */}
        
      </div>

      {/*Parte da direita: nota geral*/}
      <div className="flex flex-1 items-center justify-center">
        <div className="hidden sm:block p-4 text-center">
          <p className="font-bold text-4xl">Indicadores Web</p>
          <p className="text-center px-20 pt-3" >Ferramenta que monitora e analisa a acessibilidade de sites, promovendo inclusão e melhorias na experiência digital.</p>
        </div>
      </div>
      

      {/*-- Footer (aparece apenas no mobile) -- */}
      <div className="block sm:flex lg:hidden items-end">
        <Footer />
      </div>
    </main>
  );
}

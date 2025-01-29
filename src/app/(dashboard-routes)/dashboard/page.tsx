import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OverallProgress from "../../components/progress/OverallProgress";
import ProgressGroup from "../../components/progress/ProgressGroup";
import ButtonLogout from "./ButtonLogout";
import HeaderInterno from "../../components/HeaderInterno";

import desktopIcon from "@/src/app/img/desktop.svg";
import mobileIcon from "@/src/app/img/mobile.svg";
import Footer from "../../components/Footer";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main>
      <div className="bg-white">
        <HeaderInterno />
        <section className="container mx-auto px-4 lg:px-8">
          <div className="bg-white text-colorTextDark min-h-screen flex flex-col items-center p-4 sm:p-6">
            {/* Seção Nota Geral */}
            <section className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
              {/* Texto Nota Geral */}
              <div className="flex flex-col w-full lg:w-1/2">
                <h1 className="text-2xl font-bold text-colorPrimary mb-4 lg:mb-6">
                  Nota Geral
                </h1>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed text-justify">
                  O Nota Geral é uma plataforma que avalia a performance dos
                  sites governamentais com base nos dados do Google Lighthouse.
                  Ela calcula a média geral de todos os sites analisados e
                  apresenta médias por categoria, como desempenho,
                  acessibilidade, SEO e melhores práticas.
                </p>
              </div>

              {/* Gráficos */}
              <div className="flex flex-col md:flex-row gap-4 items-center w-full ">
                <OverallProgress value={89} type="desktop" icon={desktopIcon} />
                <OverallProgress value={59} type="mobile" icon={mobileIcon} />
              </div>
            </section>

            {/* Sites cadastrados */}
            <section className="flex flex-col gap-6 w-full max-w-5xl mx-auto p-4">
              <h2 className="text-lg sm:text-xl font-bold text-colorPrimary">
                Sites Cadastrados
              </h2>
              <ProgressGroup />
            </section>

            {/* Footer */}
            <footer className="mt-8 sm:mt-12">
              <ButtonLogout />
            </footer>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}

import React from "react";
import ProgressGroup from "./ProgressGroup";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

type OverallProgressProps = {
  value: number; // valor da barra de progresso
  type: "desktop" | "mobile"; // tipo de indicador (desktop ou mobile)
  icon: string; // caminho para o ícone SVG
};

const OverallProgress: React.FC<OverallProgressProps> = ({ value, type, icon }) => {
  const labelText = type === "desktop" ? "Desktop" : "Mobile";

  return (
    <div className="flex flex-col items-center bg-white border-2 border-colorPrimary rounded-lg shadow-md w-full min-w-0 max-w-[327px] p-4 md:max-w-[350px]">
      {/* Cabeçalho com Ícone e Texto */}
      <div className="flex items-center justify-start w-full mb-4">
        <Image
          src={icon}
          alt={`${labelText} Icon`}
          width={20}
          height={20}
          style={{ width: "auto", height: "auto" }} // Preserva a proporção
          className="mr-2"
        />
        <span className="ml-1 text-sm font-bold text-colorPrimary">{labelText}</span>
      </div>

      {/* Barra de Progresso */}
      <div className="flex justify-center items-center mb-4">
        <ProgressBar
          value={value}
          color="text-blueProgress"
          size="158px"
          thickness="7.18px"
          fontSize="48px"
          fontWeight="bold"
          label={`${value}% de 100%`}
        />
      </div>

      {/* Grupo de Métricas */}
      <div className="mt-4">
        <ProgressGroup />
      </div>
    </div>
  );
};

export default OverallProgress;

import React from "react";

type ProgressBarProps = {
  value: number; // valor da barra (0-100)
  size?: string; // tamanho da barra
  thickness?: string; // espessura da barra
  color?: string; // cor da barra
  label?: string; // rótulo opcional
  fontSize?: string; // tamanho do texto
  fontWeight?: string; // espessura do texto
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  size = "158px",
  thickness = "4px",
  color = "text-primary",
  fontSize = "16px",
  fontWeight = "bold",
  label,
}) => {
  const validValue = Math.min(100, Math.max(0, value)); // garante que value esteja entre 0 e 100

  return (
    <div
      className={`radial-progress ${color}`}
      style={
        {
          "--value": validValue,
          "--size": size,
          "--thickness": thickness,
        } as React.CSSProperties
      }
      role="progressbar"
      aria-label={label || `${validValue}%`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={validValue}
    >
      <span style={{ fontSize, fontWeight }} className="flex justify-center">
        {validValue}%
      </span>
      {label && (
        <span className="text-[10px] sm:text-sm text-gray-800 font-bold flex justify-center">
          {label}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;

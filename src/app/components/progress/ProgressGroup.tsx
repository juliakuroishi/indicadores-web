import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressGroup = () => {
  const metrics = [
    { label: "Performance", value: 46, color: "text-redProgress" },
    { label: "Acessibilidade", value: 94, color: "text-greenProgress" },
    { label: "Melhores Práticas", value: 50, color: "text-orangeProgress" },
    { label: "SEO", value: 64, color: "text-blueProgress" },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 justify-center">
      {metrics.map((metric, index) => (
        <div className="flex flex-col items-center" key={index}>
          <ProgressBar
            value={metric.value}
            color={metric.color}
            size="32px"
            thickness="2.46px"
            fontSize="10px"
          />
            <p className="text-[10px] font-bold text-gray-600 mt-1 text-center">
            {metric.label}
            </p>
        </div>
      ))}
    </div>
  );
};

export default ProgressGroup;

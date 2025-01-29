import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // Importando o plugin corretamente
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBackground: "#FFFFFF", // cor de fundo das páginas
        colorPrimary: "#004F9F", // Cor do botão Entrar, do header, footer 
        colorBorder: "#A9AEB1", // cor da borda
        colorTextDark: "#000000", // cor do texto escuro
        colorTextLight: "#FFFFFF", // cor do texto claro  
        colorPlaceholder: "#A9AEB1", // cor do texto do placeholder
        colorHighlight:"#1d73da", //cor de destaque
        colorErro: "#D32F2F", // cor vermelha de erro escuro

         // barra de progresso
         redProgress: "#DA1E28",
         greenProgress: "#28A44C",
         orangeProgress: "#FF832B",
         blueProgress: "#004F9F",
         colorGray: "#29353D", // cor cinza
      },
      backgroundImage: {
        colorGradient: "linear-gradient(to bottom, #004F9F, #0D99F7)", // cor de fundo em gradiente 
        colorGradientDark: "linear-gradient(to bottom, #0077EFC2, #002244)", // cor de fundo em gradiente escuro - tela login desktop
      },
      fontFamily: {
        customFont: ["YourCustomFont", "sans-serif"], // fonte personalizada
      },
    },
  },
  plugins: [daisyui], // Usando o plugin importado
} satisfies Config;

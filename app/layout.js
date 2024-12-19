import ToggleDark from "@/components/toggledark";
import "./globals.css";

export const metadata = {
  title: "Trivia de ciencia",
  description: "Quien sabe mas de ciencia?",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Trivia de Ciencias" />
        <meta property="og:description" content="Pon a prueba tus conocimientos de ciencia" />
        <meta property="og:image" content="https://trivia-ciencia.vercel.app/web.jpg" />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-slate-200 dark:bg-lime-950 dark:text-slate-300">
        <ToggleDark />
        {children}
        <div className="absolute flex flex-row bottom-0 right-0 p-2">
          <a href="https://www.linkedin.com/in/alberto-edelmiro-carrizo-7639a186" className="mr-2" target="blank">
            <img src="/linkedin.png" width={50} alt="link" />
          </a>
          <a href="https://github.com/AlbertCarri" target="blank">
            <img src="/github.png" width={50} alt="git" />
          </a>
        </div>
      </body>
    </html>
  );

}


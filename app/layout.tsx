import "../styles/globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="p-4 bg-blue-600 text-white">Smart School Library</header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

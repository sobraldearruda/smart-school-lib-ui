import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: 'Smart School Library',
  description: 'A school library management platform for librarians, teachers, and students',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background-color">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perfil de usuario",
  description: "Página de perfils de usuario (prueba técnica)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

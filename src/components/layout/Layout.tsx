import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbff] via-white to-[#f3f8ff] relative overflow-hidden flex flex-col">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,131,206,0.12),transparent_55%)] pointer-events-none" />
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}

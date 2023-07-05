import NavBar from "@/components/NavBar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { AuthContext } from "./../context/AuthContext";
import { SWRConfigContext } from "@/context/SWRConfigContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mangoloco",
  description: "Social Networking Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full mx-auto overflow-auto">
        <AuthContext>
          <header className="sticky top-0 z-10 bg-white border-b">
            <NavBar />
          </header>
          <main className="flex justify-center w-full max-w-screen-xl min-h-full mx-auto sm:px-6 bg-neutral-50">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}

import NavBar from "@/components/NavBar";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SNS",
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
        <header className="sticky top-0 z-10 bg-white border-b">
          <NavBar />
        </header>
        <main className="w-full max-w-screen-xl px-6 mx-auto overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7FAF5] text-[#263238] min-h-screen">
        <LanguageProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
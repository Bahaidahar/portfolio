import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and skills",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomCursor />
          <div className="relative z-10 min-h-screen bg-gradient-to-br from-background/80 to-background text-foreground">
            <AnimatedBackground />
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

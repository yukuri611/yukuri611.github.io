import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import GlowCardTracker from "@/components/GlowCardTracker";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ja")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className="bg-background text-text-primary">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <GlowCardTracker />
          <main>{children}</main>
          <footer className="border-t border-border py-8 text-center text-sm text-text-secondary">
            <div className="mx-auto max-w-6xl px-6">
              © 2026 Yuki Iwahashi. All rights reserved.
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

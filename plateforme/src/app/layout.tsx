import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Police des titres : plus de caractère que Geist, un seul fichier variable. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} — Deviens AI Engineer, gratuitement, sur ton PC`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <head>
        {/* Active les animations d'entrée avant l'affichage. Si le JavaScript de la page
            ne démarre pas dans les 3 s, on les désactive : tout reste visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){var r=document.documentElement;if(!r.classList.contains('reveal-ready'))r.classList.remove('js')},3000);",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <Reveal />
      </body>
    </html>
  );
}

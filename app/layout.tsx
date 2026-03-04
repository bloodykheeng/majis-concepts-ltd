import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cookies } from "next/headers";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Majis Concepts Ltd | Quality Construction Materials",
  description:
    "Majis Concepts Ltd is a leading manufacturer and supplier of high-quality construction materials including blocks, pavers, slabs, culverts, poles, stones, and stone dust. Based in Sseguku, Katale.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const defaultTheme = cookieStore.get("theme")?.value;

  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${dmSans.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider defaultTheme={defaultTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

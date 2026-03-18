import "./globals.css";
import { Inter, Noto_Serif_Bengali } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerifBengali = Noto_Serif_Bengali({ 
  subsets: ["bengali"], 
  weight: ["400", "700"],
  variable: "--font-noto-serif-bengali"
});

export const metadata = {
  title: "সালামি - Salami App",
  description: "তোমার সালামি এখনই নিয়ে নাও!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSerifBengali.variable} font-sans min-h-full bg-[#010B09] text-white`}>
        {children}
      </body>
    </html>
  );
}

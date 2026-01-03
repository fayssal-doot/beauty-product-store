import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata = {
  title: "GlowUp | Premium Skincare Store",
  description: "Discover your natural glow with our premium organic skincare products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

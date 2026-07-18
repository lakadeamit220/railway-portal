import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Indian Railway Portal | Official Enquiry & Services",
  description: "Access railway services, PNR enquiry, freight, live train status and more. Submit your enquiry to the Indian Railway Department.",
  keywords: "Indian Railways, PNR, train status, railway enquiry, IRCTC portal",
  openGraph: {
    title: "Indian Railway Portal | Official Enquiry & Services",
    description: "Access railway services, PNR enquiry, freight, live train status and more.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans min-h-full flex flex-col antialiased bg-rail-white text-gray-900`}>
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}

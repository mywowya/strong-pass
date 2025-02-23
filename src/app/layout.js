import { Silkscreen } from "next/font/google";
import Footer from "./components/Footer.js"
import "./globals.css";




const silkScreen = Silkscreen ({
  subsets: ['latin'],
  variable: "--font-silk-screen",
  weight: "700",
});




export const metadata = {
  title: "Strong Pass",
  description: "Generate strong passwords!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  
        className={`${silkScreen.variable} antialiased text-lg`}
        
        
        >
        
        {children}
        <Footer />
       
      </body>
    </html>
  );
}

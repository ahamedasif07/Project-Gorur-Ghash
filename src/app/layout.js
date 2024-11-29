import { Poppins } from "next/font/google";
import "./globals.css";
import NabVar from "@/components/Nabvar/NabVar";
import Footer from "@/components/Footer/Footer";
import { DataProvider } from "@/components/Shared/DataFetching/DataProvider";
import { CartProvider } from "@/components/addToCartContex/AddToCartContex";
// Import CartProvider

// Import Poppins font from Google Fonts
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Correct favicon path, without 'public' in the path */}
        <link rel="icon" href="/download (1).png" type="image/png" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Wrap with both DataProvider and CartProvider */}
        <DataProvider>
          <CartProvider>
            <div>
              <NabVar />
              {children}
              <Footer />
            </div>
          </CartProvider>
        </DataProvider>
      </body>
    </html>
  );
}

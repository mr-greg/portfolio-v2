import "./globals.css";
import "./embla.css";
import StyledComponentsRegistry from "./lib/registry";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Grégory Dervyn",
  description: "Portfolio Grégory Dervyn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

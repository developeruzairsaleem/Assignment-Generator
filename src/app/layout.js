import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "./_components/Header";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

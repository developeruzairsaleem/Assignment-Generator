import Header from "./_components/Header";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";

export default async function RootLayout({ children }) {
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

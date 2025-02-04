import "./globals.css";
import {  ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

export const dynamic='force-dynamic'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="flex justify-between w-full items-center p-3">
            <label className=" font-extrabold text-xl flex gap-2"><span className="text-blue-500">Assignment</span>Generator</label>
            <div className="">
              <SignedIn>
                <UserButton/>
              </SignedIn>

              <SignedOut>
                <div className="flex gap-4">
                  <SignInButton className="bg-blue-500 text-white p-2 px-4 rounded font-bold hover:bg-blue-600"/>
                  <SignUpButton className="bg-blue-500 text-white p-2 px-4 rounded font-bold hover:bg-blue-600  transition-all"/>
                </div>
              </SignedOut>
            </div>
            
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

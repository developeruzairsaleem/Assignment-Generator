"use client"
import Link from "next/link"
import UserButtonWithLoader from "./UserButtonWithLoader"
import { useAuth, SignedIn, SignedOut } from "@clerk/nextjs"
import { useEffect, useState } from "react";


export default function Header(){
    // const{isLoaded ,isSignedIn} = useAuth();
 
    return (
        <header className="flex h-16 justify-between w-full items-center p-3">
            <label className=" font-bold text-xl flex text-gray-700 items-center gap-2"><span className="bg-gray-700 p-2 text-gray-100 rounded-md">Assignment</span>Generator</label>
            <div className="">
                <SignedOut>
                  <div className="flex gap-4">
                    <Link href={'/signup'} className="bg-gray-700 text-gray-100 p-2 px-4 rounded font-bold hover:bg-gray-600 transition-all">Sign up</Link>
                    <Link href={'/signin'} className="bg-gray-100 text-gray-700 border-spacing-1 border-2 border-gray-700 p-2 px-4 rounded font-bold hover:bg-gray-200  transition-all">Sign in</Link>
                  </div>
                </SignedOut>

                <SignedIn>
                  <UserButtonWithLoader/>
                </SignedIn>
              
            </div>
            
          </header>
    )
}

import Link from "next/link"
import UserButtonWithLoader from "./UserButtonWithLoader"

export default async function Header({userId}){

    return (
        <header className="flex h-16 justify-between w-full items-center p-3">
            <label className=" font-extrabold text-xl flex gap-2"><span className="text-blue-500">Assignment</span>Generator</label>
            <div className="">
              {
                userId?(
                  <UserButtonWithLoader/>
                ):(
                  <div className="flex gap-4">
                    <Link href={'/signup'} className="bg-blue-500 text-white p-2 px-4 rounded font-bold hover:bg-blue-600">Sign up</Link>
                    <Link href={'/signin'} className="bg-blue-500 text-white p-2 px-4 rounded font-bold hover:bg-blue-600  transition-all">Sign in</Link>
                  </div>
                )
              }
              
            </div>
            
          </header>
    )
}
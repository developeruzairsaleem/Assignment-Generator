import { Button } from "@/components/ui/button"
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { GoPlusCircle } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { Label } from "@/components/ui/label"
import { aiAction } from "./_actions";
import React from 'react'
 

export default async function Home(){
  const {userId} = await  auth()
  // if user is not authenticated then redirect him to signin page
  if(!userId){
    return redirect('/signin')
  }
  const user = await currentUser()
  // else show the home page
  
  return (
    <div className="bg-neutral-100">
      <div className="w-full min-h-screen flex items-center justify-center px-5 sm:max-[850px]">

        <div className="chat_container  ">
          <h1 className="bg-gradient-to-r mb-3 from-black via-pink-700 to-violet-700 inline-block text-transparent bg-clip-text font-semibold text-5xl">
            Hi there, John<br/>
            What would like to know?
          </h1>

          <p className="main_heading text-neutral-400 leading-tight text-lg">
            Use one of the most common Assignments<span className="text-violet-700 ml-2 font-bold">(Future Update)</span><br/>
            or use your own prompts to begin
          </p>

          <div className="bg-white my-4">
          <form action={aiAction}>

            <textarea className={'outline-none border- w-full p-2 resize-none text-neutral-600'} name="prompt" placeholder="Type your message here." />
            <div className="flex justify-between p-2">
               <input className="hidden" id='attachment' name ='attachment' type='file' />
              <Label htmlFor={'attachment'} className="text-neutral-400 hover:cursor-pointer hover:text-neutral-500 flex items-center gap-2 justify-center">
               <GoPlusCircle />
               Add Attachment
              </Label>

              <Button className="bg-violet-700 hover:bg-violet-800 p-2 text-md" type="submit">
              <FaArrowRight />
              </Button>
            </div>
          </form>
          </div>

        </div>
      </div>

      {
        JSON.stringify(user)
      }
    </div> 
  )
}


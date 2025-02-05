import { headers } from "next/headers"
import dbConnect from "./_database/dbConnect"
import Todo from "./_models/Todo.model"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function Home(){
  const {userId} =await  auth()
  console.log(userId)
  if(!userId){
    return redirect('/signin')
  }
  return (
    <div>
      Home page
    </div>
  )
}


import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Header from "./_components/Header"


export default async function Home(){
  const {userId} = await  auth()
  
  // if user is not authenticated then redirect him to signin page
  if(!userId){
    return redirect('/signin')
  }

  // else show the home page
  return (
    <div>
      <div>Home page welcome to home!!</div>
    </div> 
  )
}


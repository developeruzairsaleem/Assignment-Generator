import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


export default async function Home(){
  const {userId} = await  auth()
  const user = await currentUser()
  
  // if user is not authenticated then redirect him to signin page
  if(!userId){
    return redirect('/signin')
  }

  // else show the home page
  return (
    <div>
      <div>Home page welcome to home!!</div>
      <p>
        {JSON.stringify(user)}
      </p>
    </div> 
  )
}


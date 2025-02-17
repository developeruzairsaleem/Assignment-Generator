
import { SignUp } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const {userId} =await auth();
  if(userId){
    return redirect('/')
  }
  return (
    <div>
      <div className='flex justify-center items-center p-3'>
          <SignUp/>      
      </div>
    </div>
  )
}

export default page
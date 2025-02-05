

import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/app/_components/Header';
async function page() {
  const{userId} =await auth();
  if(userId){
   return redirect('/')
  }
  return (
     <div>

          <div className='flex justify-center items-center p-3'>
          
              <SignIn/>

          </div>
      </div>
  )
}

export default page
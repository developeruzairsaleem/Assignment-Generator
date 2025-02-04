import { GoogleOneTap, SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center p-3'>
        <SignUp/>
    </div>
  )
}

export default page
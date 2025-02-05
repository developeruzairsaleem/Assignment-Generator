import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Suspense } from 'react'
function UserButtonWithLoader() {

  return (
    <div>
        <Suspense fallback={<div className='w-8 h-8 rounded-full bg-gray-200' />}>
            <UserButton/>
        </Suspense>
    </div>
  )
}

export default UserButtonWithLoader
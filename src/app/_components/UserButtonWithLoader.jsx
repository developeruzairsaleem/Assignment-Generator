'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
function UserButtonWithLoader() {
    
    const {isLoaded} =  useUser()

    if(!isLoaded){
        return <div className='w-8 h-8 bg-gray-400 rounded-full' />
    }


    return (
        <UserButton/>
    )

}

export default UserButtonWithLoader
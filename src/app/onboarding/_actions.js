"use server"

import {auth, clerkClient} from "@clerk/nextjs/server"
import * as Yup from "yup"



// -----------------------------------
// validation schema for the form data
// -----------------------------------

const validationSchema = Yup.object().shape({
    universityEmail: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    section: Yup.string()
      .min(1, 'Section is invalid')
      .required('Section is required'),
    semester: Yup.string()
      .min(1, 'Semester is invalid')
      .max(1, 'Semester is not valid')
      .required('Semester is required'),
    registrationNumber: Yup.string()
      .required('Registration number is required'),
    course: Yup.string()
      .required('Course is required')
  });






export const completeOnboarding =async(data)=>{
    


    try{
        await validationSchema.validate(data)

    }
    catch(err){
        return {error: err?.errors[0]}
    }
    


    try {
        const {userId} = await auth();
        if(!userId){
            return {
                error:"No Logged In User"
            }
        }
        const client = await clerkClient()
        try {
            const res = await client.users.updateUser(userId,{
                publicMetadata:{
                onboardingComplete:true,
                ...data
            }
        })
        return {message:res.publicMetadata}
    } catch (error) {
        console.log(error)
        return { error: 'There was an error updating the user info.' }
    }
    
    } catch (error) {
        return { error: 'something went wrong' }
    
    }
    
    
}
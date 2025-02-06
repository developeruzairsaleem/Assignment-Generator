'use client'
import { useActionState } from 'react'
import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormStatus } from 'react-dom'


const initialState = {
  error:""
}
export default function OnboardingComponent() {

  const [state,formAction,pending] =useActionState(completeOnboarding, initialState)
 
  
  return (
    <Card className="w-[350px] m-auto my-4">
      <CardHeader>
        <CardTitle className="text-center">Add University Info</CardTitle>
        <CardDescription className="text-center" >Enter your university speicific information, like course,semester and section </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="universityEmail">University Email</Label>
              <Input required name="universityEmail" id="universityEmail" placeholder="Enter your university Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="registrationNumber">Registration Number</Label>
              <Input required name="registrationNumber" id="registrationNumber" placeholder="Enter your reg number like 22108216" />
            </div>
         
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="semester">Semester</Label>
            <Select name="semester">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semester</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="8">8</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="section">Section</Label>

            <Select name="section">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your section" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Section</SelectLabel>
          <SelectItem value="A">A</SelectItem>
          <SelectItem value="B">B</SelectItem>
          <SelectItem value="C">C</SelectItem>
          <SelectItem value="D">D</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="course">Course</Label>

            <Select name="course">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Course</SelectLabel>
          <SelectItem value="BSAI">BSAI</SelectItem>
          <SelectItem value="BSSE">BSSE</SelectItem>
          <SelectItem value="BSCS">BSCS</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    </div>
      
        <Button disabled={pending} className={'mt-3 w-full py-4 disabled:bg-slate-300'} type='submit'>{pending?"Submitting...":'Submit'}</Button>
      
        </form>
        <div className="h-5">
        {state?.error && <p className="text-red-600 py-1">Error: {state?.error}</p>}
        </div>
      </CardContent>
    </Card>
  )
}








// export default function OnboardingComponent() {
 
//   return (
//     <div className='p-4'>

//     <div className='text-gray-700 border-2 border-gray-700 max-w-96 rounded-lg  mx-auto sm:mx-auto'>
//       <h1>Welcome</h1>
//       <form action={handleSubmit}>
//         <div>
//           <label>University Email</label>
//           <p>Enter Your University Email. Example(22108216@szabist-isb.pk)</p>
//           <input class="text-black" type="email" name="universityEmail" required />
//         </div>

//         <div>
//           <label>Registration Number</label>
//           <p>Enter your Registration Number. Examle:(22108216).</p>
//           <input class="text-black" type="text" name="registrationNumber" required />
//         </div>

//         <div>
//           <label>Course</label>
//           <p>Enter your Course. Example:(BSAI)</p>
//           <input class="text-black" type="text" name="course" required />
//         </div>
        
//         <div>
//           <label>Semester</label>
//           <p>Enter your Semester. Example(5).</p>
//           <input class="text-black" type="text" name="semester" required />
//         </div>

//         <div>
//           <label>Section</label>
//           <p>Enter your Section. Example(B).</p>
//           <input class="text-black" type="text" name="section" required />
//         </div>



//        
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//     </div>
//   )
// }
"use client";
import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";





const formSchema = z.object({
  universityEmail: z
    .string()
    .min(8, {
      message: "University Email must be at least 8 characters.",
    })
    .email({ message: "University Email must be a valid email" }),

  registrationNumber: z
    .string()
    .min(6, { message: "Registration number must be atleast 6 characters" }),
  course: z.string().min(4, { message: "Registered Course is required" }),
  section: z.string().min(1, { message: "Section is required" }),
  semester: z.string().min(1, { message: "Semester is required" }),
});






export default function OnboardingComponent() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      universityEmail: "",
      registrationNumber: "",
      course: "",
      section: "",
      semester: "",
    },
  });

  const [submitting, setSumbitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const {user} = useUser()
  const router = useRouter();

  const onSubmit = async (data) => {
    let res;
    try {
      setSumbitting(true);
     res = await completeOnboarding(data);
    //  console.log('Server Action Response:', res); // Debug log
    } catch (error) {
      console.error("Something went wrong during submission", error);
      setServerError("Something went wrong");
      return;
    }
    try {

      if (res?.message) {
        
        await user?.reload();
        console.log("user reloaded")
        router.push("/");
        // console.log("redirect user triggered")
      }
      if (res?.error) {
        setServerError(res?.error);
      }
    } catch (err) {
      console.error("error occured while retrieving updated user",err)
      setServerError("Something went wrong while doing reload");
    }finally{
      setSumbitting(false)
    }
  };

  return (
    <Card className="w-[350px] m-auto my-4">
      <CardHeader>
        <CardTitle className="text-center">Add University Info</CardTitle>
        <CardDescription className="text-center">
          Fill the form below with your  university info
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="universityEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your University Email" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your university issued email address.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="registrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your registration number"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your valid registration number.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
        

              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="BSAI">BSAI</SelectItem>
                          <SelectItem value="BSSE">BSSE</SelectItem>
                          <SelectItem value="BSCS">BSCS</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select your course from the drop down
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
              </div>

              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semester</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Semester" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select your semester from the drop down
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="section"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Section</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Section" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                          <SelectItem value="D">D</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select your section from the drop down
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            
          </div>

            <button className={`disabled:bg-slate-700 hover:bg-slate-700 bg-black text-white w-full h-12 flex items-center justify-center p-2 rounded-md`} disabled={submitting} type="submit">
              {
                !submitting?
                  'Submit'
                :
                  <Stack sx={{ color: 'white' }} spacing={2} direction="row">
                    <CircularProgress size={'20px'} color="white" />
                  </Stack>
              }
            </button>
              <p>{serverError}</p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

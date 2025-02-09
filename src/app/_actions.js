"use server"
import * as Yup from "yup"





// validate ai text 
const validationSchemaForAiInput = Yup.object().shape(
    {
        prompt: Yup.string().trim()
            .min(1,"Please enter some text to generate something")
            .max(2000, "Input size is exceeded from limit")
            .required("Prompt is required"),
       
    }
)
export const aiAction= async (formData)=>{
    const parsedContent ={
        prompt:formData.get("prompt")
    }
    // console.log("Attachment",validationSchemaForAiInput.validate(formData.get('prompt')))
    validationSchemaForAiInput.validate(parsedContent)
    console.log('prompt',formData.get('prompt'))

}
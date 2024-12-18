import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup= () =>{

    const usernameRef= useRef<HTMLInputElement>()
    const passwordRef= useRef<HTMLInputElement>()

    async function signup(){
        const username= usernameRef.current?.value
        const passsword= passwordRef.current?.value
        const navigate= useNavigate()
        console.log(username)
        console.log(username)

         const response= await axios.post(BACKEND_URL + "/api/v1/signup" , {
            
                username,
                passsword
            

        })
        const jwt= response.data.token
        console.log(jwt)

        navigate("/signin")
    }
    return (
        <div className=" h-screen w-screen bg-gray-300 flex justify-center items-center ">

            <div className=" bg-white flex items-center flex-col p-4  rounded-lg  border min-w-48 ">

                <Input  placeholder="Username" reference={usernameRef}/>
                <Input  placeholder="Password"  reference={passwordRef}/>
                <Button onButtonClick= {signup} varaint="primary" size="md" text="Signup"  fullWidth={true} /> 


            </div>



        </div>


    )
}
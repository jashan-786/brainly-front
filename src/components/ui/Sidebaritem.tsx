import { ReactElement } from "react"

interface Sidebaritemprops {

    startIcon: ReactElement,
    text: string
}

export const Sidebaritem= (props: Sidebaritemprops ) =>{

    return <div className=" flex gap-5  text-gray-400  items-center  px-6 py-3 transition-all duration-700 hover:bg-gray-300 hover:text-black  hover:rounded-lg">
        <div className=" w-4 ">{props.startIcon} </div>
    
        {props.text}

    </div>



}
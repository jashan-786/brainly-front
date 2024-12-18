import { BrainIcon } from "../../icons/BrainIcon"
import { Twitter } from "../../icons/TwitterIcon"
import { YouTubeIcon } from "../../icons/YouTubeIcon"
import { Sidebaritem } from "./Sidebaritem"

export const Sidebar= (props: any) =>{

    return (
        <div className=" flex flex-col h-screen border-r  bg-white broder-2 border-slate-400  min-w-16  w-64 max-w-64 fixed top-0 left-0">
            <div className="py-4 px-6 flex gap-4  items-center ">
                <div className="text-purple-400">
                <BrainIcon  size="lg" />
                </div>
                <div className=" font-semibold text-2xl">
                    Brainly
                </div>

            </div>
            <div className="p-4">
            <Sidebaritem  startIcon={ <Twitter size="md"/> } text= { "Twitter"}/>
            <Sidebaritem  startIcon={ <YouTubeIcon size="md"/> } text= { "YouTube"}/>
            </div>
            

        </div>

    )


}
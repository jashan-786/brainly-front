import { useRef, useState } from "react"
import { CrossIcon } from "../../icons/Crossicon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../../config"


enum ContentType{
    Youtube= "Youtube",
    Twitter= "Twitter"

}
// comntrol component uisign modal open
export const CreateContentModal= ({open , onClose} : { open : boolean , onClose : () => void }) => {

    const titleRef= useRef<HTMLInputElement>()
    const linkRef= useRef<HTMLInputElement>()
    const [contentType, setContentType]= useState<ContentType>(ContentType.Youtube)

    async function addContent(){

        const title= titleRef.current?.value
        const link= titleRef.current?.value

        console.log(title)
        console.log(link)
        console.log(contentType)
        // send the data to backend
        await axios.post( BACKEND_URL+ "/api/v1/content" , {
            title,
            link,
            contentType

    })
}

    // not making a controlled compoennt its me controlling thee state inside 
    // const [modalOpen, setModalOpen]= useState(false)

    // it should be like  x has on componetn when we press cross button  it will signal to parent componet 
    // to change the state of open to close ( bubbling up )
    return <div  >
   { open && 
   <>
   <div className=" w-screen h-screen   bg-slate-500 fixed top-0 left-0    opacity-90 flex justify-center items-center">
    
     
    </div>
    <div className=" w-screen h-screen    fixed top-0 left-0   flex justify-center items-center">
    
      <div className=" flex flex-col justify-center  items-center">
      <span className=" bg-white  p-4 rounded ">
       <div className=" flex  justify-end p-2 poi" > 
         <div className=" cursor-pointer" onClick={ () => { onClose()}}>          
         <CrossIcon  size="md"/>
         </div>
       </div>

      
       <div>
         <Input reference={titleRef} placeholder="Title" />
         <Input reference={linkRef} placeholder="Link" />
        <div className=" flex gap-2 items-center justify-center">
        <div className="  py-2 flex items-start "> Select type: </div>
         
         <Button  onButtonClick={() => setContentType(ContentType.Youtube)}  varaint= { contentType === ContentType.Youtube ? "primary" : "secondary"}  text="Youtube" size="sm" />
         <Button onButtonClick={() => setContentType(ContentType.Twitter)}  varaint= { contentType === ContentType.Twitter ? "primary" : "secondary"}   text="Twitter" size="sm" />
         </div>
       </div>
         <div className=" flex justify-center py-2">
       <Button onButtonClick={addContent} varaint="primary"  text="Submit" size="md" /> 
       </div>
       </span>

 
</div>
</div>
</>
      
        }
    </div>




}



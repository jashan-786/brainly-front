import ShareIcon from "../../icons/ShareIcon"

type contentType=  "Youtube" | "Notion" | "Twitter"

interface CardProps{
    title : string,
    link: string,
    type: contentType

}


export const Card= (props : CardProps) =>{

return (
<div className=" flex  justify-normal items-center flex-col  min-h-60   bg-white rounded-md   border  border-gray-300 p-7  max-w-72  max-h-min  ">

    <div className=" flex justify-between">
        <div className=" flex items-center justify-center text-md">
            <div className=" text-gray-500 pr-2">
            <a href= {props.link} target="_blank" >
            <ShareIcon size="md"/>
            </a>
            </div>
            {props.title}
        </div> 
        <div className=" flex items-center justify-center">
            <div className="pr-2 text-gray-500">
            <ShareIcon size="md"/>
            </div>
            <div className="text-gray-500">
            <ShareIcon size="md"/>
            </div>

        </div>




    </div>
    <div className="p-2 ">

    {props.type === "Youtube" &&  
    <iframe  className=" max-w-full" src= {props.link.replace("watch","embed").replace("?v=", "/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
    }
    
    {props.type ===  "Twitter" && <div > <blockquote className="twitter-tweet">
  <a href= {props.link.replace("x.com" , "twitter.com")}></a> 
</blockquote></div> }
    </div>


</div>

)


}
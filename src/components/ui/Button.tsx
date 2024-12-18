import { ButtonHTMLAttributes, DetailedHTMLProps, ReactChildren, ReactElement, ReactNode } from "react"


// use maps or records
 const variantStyles  ={

    "primary": "bg-purple-600 text-white  ",
    "secondary": "bg-purple-300 text-purple-600"


 }
 

 const sizeStyles= {
    "sm" : "py-1  px-2 rounded-xl",
    "md": "py-2 px-4 rounded-md",
    "lg": "py-4 px-6 rounded-sm"

 }
 const defaultStyles = "rounded-md p-4 font-light"



 type varaints= "primary"| "secondary"
export interface ButtonProps  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

    varaint :  varaints,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?:  ReactElement,
    endIcon?: ReactElement,
    onButtonClick? : () => void,
    children?: ReactNode,
    fullWidth ? : boolean,
    loading ?: boolean
    reference?: React.RefObject<HTMLButtonElement>

}

export const Button = ( props: ButtonProps ) => {

        const { varaint ,reference, size, text, onClick , startIcon , endIcon , fullWidth ,loading ,...rest}= props
    return (
    <>
    <button ref={reference} onClick={   props.onButtonClick ? props.onButtonClick :  ()=> {}  } 
    className= {` flex  justify-center items-center ${  variantStyles[props.varaint]} ${sizeStyles[size]} ${defaultStyles} ${ size }  ${text} ${ fullWidth ? "w-full" : null }  ${loading ? "opacity-40" : null} ` }  
    
    {...rest}  disabled={loading}>
        {props.startIcon ? <div className="pr-2"> {props.startIcon}</div> : null}

        {props.text}
        {props.endIcon}
         </button>
         </>
    )

}
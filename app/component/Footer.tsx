import Image from "next/image"
import gmail2 from "/public/gmail.svg"
import cell from '/public/cell.svg'
import git from '/public/github.svg'


export default function Footer(){
    return (
       <div className="bg-white flex justify-center items-center flex-wrap">
        <div className="p-3 flex justify-center gap-2 bg-violet my-4 rounded-full mr-4">
         <Image src={gmail2} alt='gmail' width={30}/>
         <div className="text-sm ">inevitablegaming9@gmail.com</div>
         </div>
        <div className="p-3 flex justify-center gap-2 bg-violet my-4 rounded-full">
         <Image src={cell} alt='cell' width={30}/>
         <div className="text-sm ">+92 3101203675</div>
         </div>
        </div>
       ) }
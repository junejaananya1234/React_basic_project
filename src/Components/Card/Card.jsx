 
 import { FaRocket } from "react-icons/fa";
 import { CgNotes } from "react-icons/cg";
 import { BsPeopleFill } from "react-icons/bs";

 const Card = () =>{
    return(
        <div className="h-64 w-full flex justify-around">

        <section className="flex flex-col h-30 w-50 m-5 justify-center items-center gap-4 " >
        <FaRocket className="h-32 w-28" />
         <p className="font-bold">2,500</p>
         <p className="text-slate-500 text-sm" >enterprise organizations successfully launched </p>

        </section>
        <section className="flex flex-col h-30 w-50 m-5 justify-center items-center gap-4 " >
        <CgNotes className="h-32 w-28" />
         <p className="font-bold">45,000</p>
         <p className="text-slate-500 text-sm" >enterprise users onboarded seamlessly </p>
         
        </section>
        <section className="flex flex-col h-30 w-50 m-5 justify-center items-center gap-4 " >
        <BsPeopleFill className="h-32 w-28" />
         <p className="font-bold">200,000+</p>
         <p className="text-slate-500 text-sm" >Professional trained on product and strategy </p>
         
        </section>
        </div>
    )
 }

 export default Card;
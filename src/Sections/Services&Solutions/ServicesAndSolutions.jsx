import { Services } from "../../Components/Services/Services"
import { Solutions } from "../../Components/Solutions/Solutions"

export const ServicesAndSolutions = ()=>{
    return(
        <div className=" 2xl:max-w-[1760px] mx-auto xl:px-12 lg:px-10 md:px-6 px-3">
           <div className="py-20">
            <Solutions/>
           </div>
           <div className=" pb-20">
             <Services/>
           </div>
        </div>
    )
}
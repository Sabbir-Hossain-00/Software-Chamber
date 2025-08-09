import { Services } from "../../Components/Services/Services"
import { Solutions } from "../../Components/Solutions/Solutions"

export const ServicesAndSolutions = ()=>{
    return(
        <div className=" container mx-auto px-3">
           <div className="py-20">
            <Solutions/>
           </div>
           <div className=" pb-20">
             <Services/>
           </div>
        </div>
    )
}
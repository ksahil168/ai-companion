import { Searchinput } from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";

const RootPage  = () => {
    return ( 
        <div className="h-full p-4 space-y-4">
           <Searchinput/>
        </div>
     );
 }
  
 export default RootPage ;
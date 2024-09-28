import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import classNames from "classnames";


export default function Edit({permissions}){
    
    return(
       <Authenticated>
           <div className="m-8 p-8 overflow-x-auto shadow-md sm:rounded-lg">
               <h2 className={classNames("text-lg font-semibold font-sans")}>Permission</h2>

               {
                   permissions.map((permission, index) => (
                     <div className={classNames("permission grid grid-cols-2 gap-y-2 mt-3")} key={index}>
                   
                    <h6 className={classNames("text-base font-semibold font-sans")}>{permission.display_name}</h6>
                     <div className="checkBox">
                     <InputLabel className={classNames("text-base text-slate-600 font-sans font-medium")}>{permission.permission_name[0].toUpperCase() + permission.permission_name.slice(1).toLowerCase()} </InputLabel>
                    <input type="checkbox" className=""  value={permission.id}/>

                     </div>
                    </div>
                       
                        ))
                    }
           </div>
       </Authenticated>
    )
}
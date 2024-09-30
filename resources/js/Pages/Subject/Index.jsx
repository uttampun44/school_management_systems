import Button from "@/Components/Button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import classNames from "classnames";

export default function Index(){

    const handleModal = () =>{

    }
    return(
      
         <Authenticated>
                <div className={classNames("subject m-8 p-8 overflow-x-auto shadow-md sm:rounded-lg")}>
                 <div className="btnAddsection">
                    <Button
                        type="submit"
                        name="Add Subject"
                        classname={classNames(
                            "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                        )}
                        onClick={handleModal}
                    />
                 </div>
                </div>
         </Authenticated>
       
    )
}
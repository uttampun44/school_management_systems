import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index(){
    return(
        <Authenticated>
           <p className="text-center"> Student</p>
        </Authenticated>
    )
}
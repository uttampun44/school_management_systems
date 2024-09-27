import cn from "classnames";

export default function Drawer({className, children, visibility}){
    return (
       <>
       {visibility && (
        <div className={cn(" fixed w-full h-full inset-0 bg-gray-700/30 z-50")}></div>
      )}
        <div className={cn("max-w-80 w-full h-full fixed top-0 right-0",className)}>
           {children}
        </div>
       </>
    )
}
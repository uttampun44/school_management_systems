import cn from "classnames";

export default function Drawer({className, children, position}){
    return (
        <div className={cn(position == "right" && "max-w-80 w-full h-full fixed top-0 right-0",className)}>
           {children}
        </div>
    )
}
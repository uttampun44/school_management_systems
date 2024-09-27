import useOutsideClick from "@/hooks/UseOutsideClick";
import cn from "classnames";
import { useRef} from "react";

export default function Drawer({className, children, visibility, onClose}){

 /**
   * Drawer component displays a sliding panel on the right side of the screen.
   *
   * @param {Object} props - The component props.
   * @param {string} props.className - Additional Tailwind CSS classes to style the drawer.
   * @param {boolean} props.visibility - Controls the visibility of the drawer. If true, the drawer is shown.
   * @param {React.ReactNode} props.children - The content to be rendered inside the drawer.
   * @param {function} props.onClose - Callback function to handle closing the drawer.
   */


    const drawerRef = useRef();


    useOutsideClick({ref: drawerRef, callBack: onClose})

    if(!visibility && !drawerRef) return null
    return (
       <>
       {visibility && (
        <div className={cn(" fixed w-full h-full inset-0 bg-gray-700/30 z-50")} onClick={onClose}></div>
      )}
        <div className={cn("max-w-80 w-full h-full fixed top-0 right-0",className)} ref={drawerRef}>
           {children}
        </div>
       </>
    )
}

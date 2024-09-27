import { useEffect } from 'react'

/**
 * Custom hook for handling clicks outside a specified element.
 *
 * @param {React.Ref} ref - A reference to the HTML element to monitor for outside clicks.
 * @param {function} callBack - A function to execute when a click outside the referenced element occurs.
 */


export default function UseOutsideClick({ref, callBack}){

    useEffect(() => {
            function handleOutSideClick(event){

                if(ref.current && !ref.current.contains(event.target)){
                    callBack()
                }
            }

            document.addEventListener("mousdown", handleOutSideClick)
            document.addEventListener("touchstart", handleOutSideClick);

            return () => {
                document.removeEventListener("mousedown", handleOutSideClick);
                document.removeEventListener("touchstart", handleOutSideClick)
            }
    }, [ref, callBack])

}

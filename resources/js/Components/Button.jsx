export default function Button({type,classname, onClick, name}){
    return(
        <>
           <button type={type} className={classname} onClick={onClick}>{name}</button>
        </>
    )
}

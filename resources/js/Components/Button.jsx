export default function Button({classname, onClick, name}){
    return(
        <>
           <button className={classname} onClick={onClick}>{name}</button>
        </>
    )
}
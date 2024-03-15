export function Avatar({imagen}){

    return(
        <div className="w-[50px] border-2 rounded-full flex justify-center items-center">
            <div className="w-[40px] border-2 rounded-full overflow-hidden">
                <img src={imagen} alt="avatar" />
            </div>
            
        </div>
    )

}
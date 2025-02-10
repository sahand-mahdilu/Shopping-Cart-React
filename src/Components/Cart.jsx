
export default function Cart({image,price,id,onRemove}) {

  
  return (
    <div className="flex items-center  justify-evenly mt-5 bg-b">
<div className="flex flex-col items-center">
    
<div className="img_container size-[90px]">
        <img className="w-full h-full" src={image} alt="img" />
        </div>

        <span>phone</span>
</div>

        <span>{price}$</span>

        <button onClick={()=>{onRemove(id)}} className="bg-red-500 p-1 px-2 rounded-lg hover:bg-red-400">Remove</button>



    </div>
  )
}

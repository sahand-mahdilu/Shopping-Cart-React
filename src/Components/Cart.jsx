
export default function Cart({image,price,id}) {

  console.log(image);
  console.log(price);
  console.log(id);
  return (
    <div className="flex items-center  justify-evenly mt-5 bg-b">
<div className="flex flex-col items-center">
    
<div className="img_container size-[90px]">
        <img className="w-full h-full" src={image} alt="img" />
        </div>

        <span>phone</span>
</div>

        <span>{price}$</span>

        <button className="bg-red-500 p-1 px-2 rounded-lg hover:bg-red-400">Remove</button>



    </div>
  )
}

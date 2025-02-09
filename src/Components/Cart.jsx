
export default function Cart() {
  return (
    <div className="flex items-center  justify-evenly mt-5 bg-b">
<div className="flex flex-col items-center">
    
<div className="img_container size-[90px]">
        <img className="w-full h-full" src="/public/img/phone-1.jpg" alt="" />
        </div>

        <span>phone</span>
</div>

        <span>600$</span>

        <button className="bg-red-500 p-1 px-2 rounded-lg hover:bg-red-400">Remove</button>



    </div>
  )
}

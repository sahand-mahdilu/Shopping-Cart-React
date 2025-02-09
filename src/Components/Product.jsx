
export default function Product() {
  return (
    <div className="bg-blue-300 w-max p-3 rounded-xl">
        <div className="img_container size-[150px] ">
            <img className="w-full h-full" src="/public/img/phone-1.jpg" alt="" />
        </div>

        <div className="mt-6  flex items-center justify-center gap-2">
        <p className="  font-bold ">300$</p>
        <button className="bg-green-500 p-1 px-3 rounded-lg hover:bg-green-400">Add to cart</button>

        </div>

    </div>
  )
}

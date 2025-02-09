
export default function Header() {
  return (
    <div className="Header_container h-[180px]">
        

        <ul className="flex text-white ">
            <li className="p-2 cursor-pointer hover:bg-blue-500 font-bold ">HOME</li>
            <li className="p-2 cursor-pointer hover:bg-blue-500 font-bold ">MENU</li>
            <li className="p-2 cursor-pointer hover:bg-blue-500 font-bold ">ABOUT US</li>
            <li className="p-2 cursor-pointer hover:bg-blue-500 font-bold ">STORE</li>
        </ul>
        
        <h1 className="text-center mt-6 text-6xl  text-white font-bold">Galexy Shop</h1>
    </div>
  )
}

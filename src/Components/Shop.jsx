import Cart from "./Cart";
import Header from "./Header";
import Product from "./Product";

export default function Shop() {
  return (
    <div>

        <Header/>

        <div className="product_container gap-5 grid grid-cols-3 justify-items-center mt-10 ">

        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

        </div>

        <section className="cart_section mt-8">
            <h2 className="text-center text-5xl font-bold">
                    cart
            </h2>

            <div className="mt-4 cart_row flex items-center justify-evenly text-[18px] font-bold text-b">
                <span>Item</span>
                <span>price</span>
                <span>doing</span>

            </div>
            <hr  />
            <div className="cart_container">

               <Cart/>
               <Cart/>
               <Cart/>
            </div>

           <div className=" ">
                <button className=" my-10 mx-auto block bg-blue-500 p-2 rounded-lg hover:bg-blue-400 ">Empty Cart</button>
           </div>
        </section>
    </div>
  )
}

import { useState } from "react";
import Cart from "./Cart";
import Header from "./Header";
import Product from "./Product";

export default function Shop() {
  const [products, setProducts] = useState([
    { id: 1, price: 300, image: "./img/phone-1.jpg" },
    { id: 2, price: 400, image: "./img/phone-2.jpg" },
    { id: 3, price: 200, image: "./img/phone-3.jpg" },
    { id: 4, price: 500, image: "./img/phone-4.png" },
    { id: 5, price: 550, image: "./img/phone-5.png" },
    { id: 6, price: 700, image: "./img/phone-6.webp" },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productID) => {
    let selectedProduct = products.find((product) => {
      return product.id === productID;
    });

     let productIncart= cart.find(product=>{

      return  product.id===productID


   


    })

    if(!productIncart){

      setCart((prev) => {
        return [...prev, selectedProduct];
      });
    

    }

   };

  const removeProduct= (productID)=>{

   let newCart= cart.filter(product=>{

    return product.id!==productID

   })

   setCart(newCart)


  }

  const emptyCart = ()=>{

    setCart([])

  }

  return (
    <div>
      <Header />

      <div className="product_container gap-5 grid grid-cols-3 justify-items-center mt-10 ">
        {products.map((product) => {
          return (
            <Product key={product.id} {...product} addProduct={addToCart} />
          );
        })}
      </div>

      <section className="cart_section mt-8">
        <h2 className="text-center text-5xl font-bold">cart</h2>

        <div className="mt-4 cart_row flex items-center justify-evenly text-[18px] font-bold text-b">
          <span>Item</span>
          <span>price</span>
          <span>doing</span>
        </div>
        <hr />
        <div className="cart_container">
          {cart.map((product) => {
            return <Cart key={product.id} {...product} onRemove={removeProduct} />;
          })}
        </div>

        <div className=" ">
          <button onClick={()=>{emptyCart()}} className=" my-10 mx-auto block bg-blue-500 p-2 rounded-lg hover:bg-blue-400 ">
            Empty Cart
          </button>
        </div>
      </section>
    </div>
  );
}

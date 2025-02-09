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

       
    </div>
  )
}

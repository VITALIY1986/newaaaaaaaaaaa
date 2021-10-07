import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import { IProductg } from "../components/Giftbox"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import giftboxList from "../lib/gift.json"
import GiftboxList from "../components/GiftboxList"
import Head from "next/head"
import productList from "../lib/products.json"


interface IIndexProps {
  products: IProduct[],
  gift: IProductg[]
}



const Index = (props: IIndexProps) => {
  return (
    <div className="mx-auto ">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
  
          <section >
            <div className="flex flex-col items-center product-list text-center   relative w-full">
             <div className="bg_container w-full relative">
             <div className=" hidden text-center absolute top-0 bottom-0 left-0 right-0 md:flex flex-col justify-center">
               
     </div >
     
              <img className="md:h-screen md:object-cover bg_small object-cover w-full pt-16" src="/static/Bgsmall.jpg" alt=""  />
            </div>
          <div className="text-center md:hidden ">
  
      <div className="flex justify-center mt-4 mb-10 ease-linea  ">
   
      </div ></div ></div>
          </section>
      
        
    <ProductList products={props.products} />
    <GiftboxList gift={props.gift} />
  
    <Contact />
    <Footer />
</div>
  )
}

Index.getInitialProps = async () => {
  
  return {
    products: productList,
    gift: giftboxList
  }
}

export default Index
import React, { useState } from "react";

import { Products } from "../Home/Home";
import { Heart, List, ShoppingBag, ShoppingCart } from "lucide-react";
import CardModal from "./CardModal/CardModal";
type CardProps = {
  product: Products;
};

const Cards: React.FC<CardProps> = ({ product }) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle opening the modal

  const handleClickModalOpen = () => {
    setIsModalOpen(true);
    console.log("modal open");
  };

  // console.log(product);
  const discount = product.discountPercentage;
  return (
    <>
      <div className="w-[350px] h-[450px] rounded-lg ring-[0.5px] relative transition-all transform-3d  hover:shadow-xl  hover:shadow-slate-900/70 ">
        <section className="w-[100%] h-[280px] flex justify-center items-center bg-white rounded-t-lg   overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className=" p-0 w-[150px] h-[230px]  rounded-lg"
          />
        </section>
        <section>
          <p
            className={
              discount < 10
                ? "text-white text-center bg-gradient-to-r from-red-600 to-red-500 w-[80px] h-[30px] absolute  shadow-lg shadow-red-600/30  overflow-hidden rounded-r-lg top-3.5 left-0 font-bold m-auto"
                : "text-white text-center bg-gradient-to-r from-green-500 to-emerald-500 w-[80px] h-[30px] absolute  shadow-lg shadow-emerald-600/30  overflow-hidden rounded-r-lg top-3.5 left-0 font-bold m-auto"
            }
          >
            {discount}%
          </p>
          <p className="absolute bg-slate-900 shadow-lg shadow-slate-900/60 text-white right-0  p-4 rounded-l-md font-bold text-md text-center h-[60px] w-[78%] overflow-hidden">
            {product.title}
          </p>
          <p className="text-center w-[65px] border-2 h-[65px] flex justify-center items-center absolute left-1.5  rounded-4xl  bg-stone-950 text-white font-bold">
            ${product.price}
          </p>
          <button className="absolute top-3.5 right-3.5  p-[4%] rounded-2xl bg-gradient-to-r from-slate-950 to-slate-800 cursor-pointer">
            <Heart className="" fill="white" />
          </button>
        </section>

        {/* Modal Button */}
        <button
          className="absolute top-28 right-3.5   p-[4%] rounded-2xl bg-gradient-to-r from-blue-800 to-blue-950 cursor-pointer"
          onClick={handleClickModalOpen}
        >
          <List className="" color="white" fill="white" />
        </button>
        <section className="flex justify-evenly items-center p-2 absolute bottom-3.5 w-[100%]">
          <button className="flex justify-evenly items-center p-2 ring-[2px] rounded-md transition-all delay-200 cursor-pointer w-[40%] hover:bg-slate-950 hover:text-white font-extrabold">
            <ShoppingBag /> Buy
          </button>
          <button className="flex justify-evenly items-center p-2 ring-[2px] rounded-md transition-all delay-200 cursor-pointer w-[40%] hover:bg-slate-950 hover:text-white font-extrabold">
            <ShoppingCart /> Cart
          </button>
        </section>
      </div>
      {isModalOpen && (
        <div className="w-[100%] h-[100%] z-[100] fixed top-0 left-0 bg-[rgba(146,146,146,0.28)] overflow-hidden">
          <CardModal product={product} setIsModalOpen={setIsModalOpen}/>
        </div>
      )}
    </>
  );
};

export default Cards;

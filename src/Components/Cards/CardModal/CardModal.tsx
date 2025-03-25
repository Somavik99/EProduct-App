import  { useState } from "react";
import { Products } from "../../Home/Home";
import { Circle, MoveLeft, MoveRight, X } from "lucide-react";
type CardModalProps = {
  product: Products;
  setIsModalOpen: (argument: boolean) => void;
};
const CardModal = ({ product, setIsModalOpen }: CardModalProps) => {
  const [nextImg, setNextImg] = useState(0);

  const nextButtonClick = () => {
    setNextImg((nxt) => (nxt === product.images.length - 1 ? 0 : nxt + 1));
  };

  const prevButtonClick = () => {
    setNextImg((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const closeModalClick = () => {
    setIsModalOpen(false);
  };

  // console.log(product)
  if (!product?.images || product?.images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-[800px] h-[500px] bg-white  rounded-lg m-auto mt-50  z-50 relative">
        <p>{product?.title}</p>
        <section
          className="w-[350px] h-[350px] relative bg-gradient-to-r from-slate-200 to-slate-100 m-auto mb-[50px] top-10 right-[50%] rounded-md  shadow-lg shadow-slate-500/60 overflow-hidden image_container"
          style={{ flexShrink: 0, flexGrow: 0 }}
        >
          <div
            className="flex  transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(${-88 * nextImg}%)` }}
          >
            {product?.images.map((url, index) => (
              <img
                src={url}
                key={index}
                alt={product?.title}
                className="w-[100%] h-[320px] object-cover"
              />
            ))}
          </div>
          <button
            className="absolute top-0 h-[100%] w-[50px] flex justify-center items-center right-0 transition-all delay-100 duration-200  bg-[rgba(255,255,255,0.15)] hover:backdrop-blur-lg  rounded-r-md  cursor-pointer p-[2px] next-button"
            onClick={nextButtonClick}
          >
            <MoveRight />
          </button>
          <button
            className="absolute top-0 h-[100%] w-[50px] flex justify-center items-center left-0 transition-all delay-100 duration-200 bg-[rgba(255,255,255,0.15)] hover:backdrop-blur-lg rounded-l-md  cursor-pointer p-[2px] previous-button"
            onClick={prevButtonClick}
          >
            <MoveLeft />
          </button>
          <div className="text-center ">
            {product?.images.map((_, index) => (
              <button
                className="p-[5px] cursor-pointer ml-3.5 "
                onClick={() => setNextImg(index)}
              >
                {index===nextImg?<Circle size={15} color="gray" fill="true" className="transition-transform duration-150 delay-150 translate-y-[3.5px]" />:<Circle size={7.5} />}
              </button>
            ))}
          </div>
        </section>
        <button
          className="p-[3.5px]  rounded-md absolute top-3.5 right-3.5 cursor-pointer transition-all delay-150 duration-150 hover:ring-[1.5px]  hover:bg-slate-950 hover:text-white"
          onClick={closeModalClick}
        >
          <X />
        </button>
      </div>
    </>
  );
};

export default CardModal;

import cartSvg from "../../assets/cart.svg";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center ring-2 bg-[rgba(255,255,255,0.07)] backdrop-blur-2xl h-[80px] p-[5px] shadow-lg shadow-slate-800/100 scroll-mx-[50px]">
      <h1 className="text-4xl font-extrabold flex justify-center items-center"> <img src={cartSvg} alt="cart" className="w-[50px]" /> <span>ProductStore</span></h1>

      <section className="flex justify-around items-center w-[750px]">
        <ul className="flex justify-around items-center w-[500px] cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Products</li>
        </ul>
        <div className="flex justify-around items-center w-[200px]">
          <button className="cursor-pointer  bg-gradient-to-r from-green-500 to-green-600 p-[9px] ring-2 ring-green-500 font-extrabold text-white rounded">
            Login
          </button>
          <p>or</p>
          <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600  p-[9px] ring-[2px] ring-blue-500 font-extrabold text-white rounded">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default NavBar;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import { Atom } from "react-loading-indicators";
export type Products = {
  id: number;
  title: string;
  images: string[];
  thumbnail: string;
  price: number;
  rating: number;
  description: string;
  discountPercentage: number;
};

type conditions = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};
const Home: React.FC = () => {
  const [apiData, setApiData] = useState<Products[]>([]);
  const [conditionals, setConditionals] = useState<conditions>({
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const FetchApiData = async () => {

      try {
        const data = await axios.get(
          `https://dummyjson.com/products?limit=50`,
          {
            cancelToken: cancelToken.token,
          }
        );
        setApiData(data?.data?.products);
        // console.log(data?.data?.products);
        setConditionals({
          ...conditionals,
          isSuccess: true,
        });
      } catch (error) {
        if (error instanceof Error) {
          setConditionals({
            ...conditionals,
            isError: true,
          });
          console.log(error.message);
        }
      } finally {
        setConditionals({
          ...conditionals,
          isLoading: false,
        });
        console.log("Data Fetched successfully");
      }
    };
    const timeOut = setTimeout(FetchApiData, 500);
    return () => {
      cancelToken.cancel("Fetching canceled...!");
      clearTimeout(timeOut);
    };
  }, [conditionals.isLoading, conditionals.isError, conditionals.isSuccess]);

  return (
    <>
      <div className="sticky top-0 z-50 bg-[rgba(255,255,255,0.07)] backdrop-blur-2xl snap-start">
        <NavBar />
      </div>
      {conditionals.isLoading === true ? (
   <div className="flex justify-center items-center w-[100%] h-[100%]"><Loading /></div>     
      ) : (
        <div className="flex flex-wrap  justify-center items-center flex-row m-3.5 relative">
          {apiData?.map((prod) => (
            <div key={prod.id} className="m-3.5">
              <Cards product={prod} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;

export const Loading = () => {
  return (
    <Atom color="#32cd32" size="large" text="Loading..." textColor="#4c0057" />
  );
};

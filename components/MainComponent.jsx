import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const MainComponent = () => {
  return (
    <section className="overflow-auto h-[calc(100vh-50px)]  bg-[url('/hero.svg')] bg-cover  bg-no-repeat bg-top">
      {/* hero section */}
      <div className="md:h-[calc(100%-50px)] h-max w-[90%] mx-auto justify-center py-12 md:py-0  flex  flex-col md:flex-row  place-items-center">
        {/*  content */}
        <div className="w-full md:w-[50%] px-8 order-2 md:order-1 mt-6 ">
          <h4 className="md:text-5xl text-4xl font-semibold">
            Increase your pipeline by{" "}
            <span className="text-primary">35-150%</span>
          </h4>
          <p className="my-4 text-slate-600 text-xl">
            Automated account intelligence for your sales team
          </p>
        </div>
        {/*  image content */}
        <div className="w-full md:w-[50%] order-1  md:order-2">
          <img
            src="/hero-women.png"
            width="500px"
            height="400px"
            className="object-cover z-0"
          />
        </div>
      </div>
      {/*  clients section */}
      <div className="my-12  w-full">
        <h4 className="md:text-3xl text-xl px-6 font-bold text-center md:my-8 my-4">
          Trusted by enterprise sales teams globally
        </h4>
        <div className="flex items-center  py-4 md:my-16 space-x-6 px-6 overflow-scroll w-full client">
          {["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp"].map(
            (image) => (
              <span className="block shrink-0 p-4 z-0" key={image}>
                <img
                  src={`/logos${image}`}
                  className=" mx-4 block  w-[90px] md:w-[200px] my-3 z-0"
                  width="180px"
                  height="50px"
                />
              </span>
            )
          )}
        </div>
      </div>
      {/*  reviews section */}
      <div className="bg-gray-50 py-4">
        <h4 className="md:text-3xl text-xl px-6 font-bold text-center">
          Trusted by enterprise sales teams globally
        </h4>
        <div className="flex items-center justify-center py-4 my-2  px-4 overflow-x-auto flex-wrap">
          {/*  card 1 */}
          <div className="md:w-[40%] w-full px-6 py-2 flex bg-white  my-4 rounded-md shadow-md pt-4">
            <span>
              <FaQuoteLeft className="text-primary/40 text-2xl " />
            </span>
            <div className="px-3">
              <p className="px-2 text-xs font-semibold">
                Set the conversation with hard to track account, within a week
                of starting with B2Brain
              </p>
              <p className="text-slate-700 text-xs my-2 px-2">
                augie hoffman, SDR manager
              </p>
              <img
                src="https://uilogos.co/img/logotype/velocity9.png"
                alt="logo"
                className="object-cover h-[30px] w-[90px]"
              />
            </div>
            <span className="rounded-full">
              <img
                src="/icons/h-logo.svg"
                height="150px"
                width="150px"
                className="rounded-full"
              />
            </span>
          </div>
          <div className="md:w-[50%] w-full"></div>
          <div className="md:w-[50%] w-full "></div>
          {/*  card 2 */}
          <div className="md:w-[40%] w-full px-6 py-2  flex bg-white rounded-md shadow-md pt-4">
            <span>
              <FaQuoteLeft className="text-primary/40 text-2xl " />
            </span>
            <div className="px-3">
              <p className="px-2 text-xs font-semibold">
                Salesloft got 12% higher responses with personalization using
                B2Brain intel
              </p>
              <p className="text-slate-700 text-xs my-2 px-2">
                William Strurgis , Enterprise SDR
              </p>
              <img
                src="https://uilogos.co/img/logotype/earth.png"
                alt="logo"
                className="object-cover h-[30px] w-[90px]"
              />
            </div>
            <span className="rounded-full">
              <img
                src="/icons/h-logo.svg"
                height="150px"
                width="150px"
                className="rounded-full"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;

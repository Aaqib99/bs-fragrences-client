/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, PerfumeCard } from "../components";
import perfume1 from "../assets/images/perfumeimage1.png";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [perfumeImg, setperfumeImg] = useState(perfume1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p
          className="inline-block font-montserrat mt-12"
          style={{ color: "#D9BB66" }}
        >
          Our Summer collections
        </p>

        <h1 className="mt-8 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span
            className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"
            style={{ lineHeight: "1", color: "#0A273C" }}
          >
            We're Leaders in
          </span>
          <br />
          <span className=" inline-block mt-3" style={{ color: "#D9BB66" }}>
            Fragrance{" "}
          </span>{" "}
          <span style={{ color: "#0A273C" }}>Distribution</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover your scent today! Explore the new fragrances.
        </p>

        <Button label="Get Started" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={perfumeImg}
          alt="perfume colletion"
          width={460}
          height={350}
          className={"img-hero"}
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <PerfumeCard
                index={index}
                imgURL={image}
                changeperfumeImage={(perfume) => setperfumeImg(perfume)}
                perfumeImg={perfumeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

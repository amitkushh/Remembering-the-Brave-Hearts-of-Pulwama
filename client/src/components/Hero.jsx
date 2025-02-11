import React from "react";

function Hero() {
  return (
    <>
      <div className="relative bg-[url(/src/assets/pulwama-attack.jpg)] h-96 bg-cover bg-center lg:h-screen mx-3 mt-4 rounded-xl">
        <div class="absolute inset-0 backdrop-blur-sm bg-black/40 p-5 flex flex-col items-center justify-center rounded-xl ">
          <h1 className="text-white text-center text-4xl font-extrabold leading-tight">
            Remembering the Brave Hearts of Pulwama
          </h1>
          <p className="italic text-white text-center text-xl font-semibold mt-5">
            February 14, 2019
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;

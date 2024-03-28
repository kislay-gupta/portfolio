import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="hero image"
              height={469}
              width={469}
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className=""
            />
          </div>

          <div className=" text-end">
            <h1 className="text-3xl  font-primary font-bold sm:text-5xl ">
              Hello, I am{" "}
              <span className="text-Blue-Darker font-outline-2">
                Kislay Gupta
              </span>
            </h1>

            <p className="mt-4  text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <div className="pt-11 flex gap-4 justify-end">
              <Button className="h-full py-2 px-6 text-xl border-solid border-[3px] border-black font-bold bg-Pink-ExtraLight hover:bg-Pink-Light text-Black  transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Contact Me
              </Button>
              <Button className="px-6 h-full py-2 text-xl border-solid border-[3px] border-black font-bold bg-Blue-ExtraLight hover:bg-Blue-Light text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

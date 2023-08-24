import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;
  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="text-black dark:text-white text-xl xl:text-2xl font-bold mb-7">
            {title}
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col  ">
              {desc1?.map((data, key) => (

                <p key={key} className="m-5  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 cursor-not-allowed rounded">{data}</p>

              ))}
            </div>
            <div className="flex flex-col">
              {desc2?.map((data, key) => (

                <p key={key} className="m-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 cursor-not-allowed rounded">{data}</p>

              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
          {/* <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          /> */}
          <div className="relative 2xl:-mr-7.5">
            <Image
              src="/images/shape/shape-01.png"
              alt="shape"
              width={46}
              height={246}
              className="absolute -left-11.5 top-0"
            />
            <Image
              src="/images/shape/shape-02.svg"
              alt="shape"
              width={36.9}
              height={36.7}
              className="absolute right-0 bottom-0 z-10"
            />
            <Image
              src="/images/shape/shape-03.svg"
              alt="shape"
              width={21.64}
              height={21.66}
              className="absolute -right-6.5 bottom-0 z-1"
            />
            <div className=" relative aspect-[700/444] w-full">
              <Image
                className="dark:hidden shadow-solid-l"
                src="/images/shape/hello.jpg"
                alt="Hero"
                fill
              />
              <Image
                className="hidden dark:block shadow-solid-l"
                src="/images/shape/hello1.svg"
                alt="Hero"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;

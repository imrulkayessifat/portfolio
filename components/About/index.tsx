"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import wellteamData from "./wellteamData";
import nemcData from "./nemcData";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from "framer-motion";


const About = () => {
  return (
    <>

      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {wellteamData.map((data, key) => (
                  <SwiperSlide key={data.id}>
                    <Image
                      width="800"
                      height="800"
                      className=""
                      src={data.icon}
                      alt="User"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">

                WELLTEAM
              </h4>
              <h2 className="relative font-medium text-black dark:text-white text-3xl xl:text-hero mb-6">
                Improves mind and body fitness
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  with wellteam
                </span>
              </h2>
              <p className="text-black dark:text-white">Wellteam provides global challenge to their member for use
                online tools to explore, experiment with,then log activity and
                earning points on local and global leaderboards.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <p className="text-black dark:text-white text-base mb-0.5">
                    Building stable and maintainable codebases and convert
                    figma to responsive templates using using Next.js and
                    Tailwind CSS.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <p className="text-black dark:text-white text-base mb-0.5">
                    Creating component library using typescript.Ex:Custom
                    table component for use of crud functionality,Custom
                    modal component for creating dialogs or whatever else.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                NEMC(Northeast Medical College)
              </h4>
              <h2 className="relative font-medium text-black dark:text-white text-base xl:text-hero mb-6">
                Makes all the medical education & exam related tasks very easy, automate and online
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1 ml-2.5">
                  With NEMC
                </span>
              </h2>
              <p>
                It is management system for medical students,their
                parent,teacher,staff and admin.
              </p>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <p className="text-black dark:text-white text-base mb-0.5">
                    Convert figma to responsive templates for 40+ web pages using JQuery,HTML5,CSS/Tabler.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Swiper

                modules={[Autoplay]}
                spaceBetween={15}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {nemcData.map((data, key) => (
                  <SwiperSlide key={data.id}>
                    <Image
                      width="800"
                      height="800"
                      className=""
                      src={data.icon}
                      alt="User"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;

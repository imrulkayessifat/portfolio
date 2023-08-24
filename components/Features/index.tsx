"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      
      <section id="experience" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 ">
          
          <SectionHeader
            headerInfo={{
              title: "Vivasoft LTD",
              subtitle: "Intern Software Engineer",
              description: `Vivasoft LTD is service provider company.As the Front End
              Developer,my core activities included:`,
            }}
          />
 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
          

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
       
          </div>
        </div>
      </section>

   
    </>
  );
};

export default Feature;

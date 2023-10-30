import React from "react";
import about from "./about.json"
import QR from "../../assets/about-us/QR.png"
import img1 from "../../assets/about-us/img-1-au.jpg"
import img2 from "../../assets/about-us/img-2-au.jpg"



const About = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2 overflow-x-hidden">
      <h1 className="font-bold text-4xl mt-4">About us</h1>
      <section className="flex justify-center items-center my-20">
        <img className="w-64" src={img1} />
        <section className="" >
          <p className="text-left text-3xl">{about["heading"]}</p>
          <p className="text-xl">{about["sub-heading"]}</p>
        </section>
      </section>
      <section className="w-full flex-col flex justify-center items-center">
        <h3 className="font-bold ml-20 flex justify-start w-full  text-3xl">DONATE</h3>
        <img className="w-80" src={QR} />
      </section>
      <section className="flex flex-col justify-center items-center m-10">
        <p className=" text-2xl text-center" >{about["content-1"]}</p>
        <section className="flex justify-center items-center">
          <p className=" text-lg font-normal   " >{about["content-2"]}</p>
          <img className="w-3/5" src={img2} />
        </section>
      </section>
    </div>
  )
};

export default About;

import React from "react";
import hhImg from "../../assets/Logo/hh.png"
import hhImg2 from "../../assets/Logo/hh2.png"


const Footer = () => {
    return (
        <section className=" w-full">
            <section className="bg-rgb h-80 flex flex-col justify-between px-16  ">
                <section className="flex flex-row w-full justify-between h-3/4  ">
                    <section className="w-1/4 flex justify-center items-center ">
                        <img className="h-48" src={hhImg} />
                    </section>
                    <section className="flex flex-col w-3/4 justify-center items-end mr-8  ">
                        <section className="flex space-x-5 text-white font-bold  ">
                            <p>Your health and wellbeing </p>
                            <p>Helping your business</p>
                            <p>Supported living</p>
                            <p>Get involved</p>
                        </section>
                        <section className="">
                            {/* <p>dd</p>
                            <p>dd</p> */}
                        </section>
                    </section>
                </section>
                <section className="flex justify-start text-white font-medium items-center mt-4 space-x-6 h-1/4">
                    <p>Privacy notice </p>
                    <p>Terms and conditions</p>
                    <p>Cookies policy</p>
                    <p>Contact us</p>
                    <p>© 2023 Retail Trust</p>
                </section>
            </section>
            <section className="bg-black h-44 flex justify-center items-center p-16">
                <section className="w-3/4 flex flex-col justify-start items-start space-y-2">
                    <section>
                        <p className="text-white">
                            Retail Trust is a registered charity in England and Wales
                            (1090136) and in Scotland (SC039684). Company No 4254201 (Company
                            limited by Guarantee) Registered England & Wales. Retail Trust,
                            The Form Rooms, Second Floor, 22 Tower Street, London, WC2H 9NS.
                        </p>
                    </section>
                    <section className="text-white font-light text-xs">Site powered by Webvision Cloud</section>
                </section>
                <section className="text-white w-1/4 flex justify-center items-center ">
                    <img className="h-32" src={hhImg2} />
                </section>
            </section>
        </section>
    );
};

export default Footer;
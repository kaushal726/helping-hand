import { FaSearch } from "react-icons/fa";

let Header = () => {
  return (
    <section className="flex bg-rgb  h-52 ">
      <section className="w-1/4 flex justify-center items-center flex-col">
        <h2 className=" text-white  font font-medium text-5xl">Helping</h2>
        <h2 className=" text-white  font font-medium text-5xl">Hand</h2>
        <h2 className=" text-white font-serif  text-lg">2023 Onwards</h2>
      </section>
      <section className="w-3/4 flex flex-col items-end mr-28 justify-center">
        <section className="flex m-4 relative">
          <a className=" text-white font-medium hover:underline-offset-2 hover:underline" href="#">Register</a>
          {/* <p className="cursor-pointer text-white font-medium">Register</p> */}
          <span className="px-4 text-xl text-white font-light">|</span>
          <a className="hover:underline-offset-2 hover:underline pr-8 text-white font-medium" href="#">Sign in</a>
          <input
            className=" appearance-none w-80 h-8 border border-2 rounded-lg bg-rgb input-search text-white"
            type="text"
            placeholder=""
          ></input>
          <i className="text-white flex items-center justify-center right-2 absolute top-2 ">
            <FaSearch />
          </i>
        </section>
        <section className="flex justify-center items-center my-4">
          <p className="text-white font-medium text-2xl pr-20">
            Helping Hand helpline{" "}
            <span className="font-bold">0808 801 0808</span>
          </p>

          <button className="  py-3 text-lg px-8 bg-white text-red-600 font-bold rounded-xl hover:bg-red-600 hover:text-white hover:scale-105 transition duration-200 transform  ease-in ">
            DONATE
          </button>
        </section>
      </section>
    </section>
  );
};

export default Header;

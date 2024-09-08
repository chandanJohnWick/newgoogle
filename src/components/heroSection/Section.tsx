import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import image from "../../../public/vite.svg";

function Section() {
  const loginWithGoogle = () => {
    console.log("login with google");
    window.open("http://localhost:3000/auth/google/callback", "_self");
  };

  return (
    <section
      id="home"
      className=" bg-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-between mx-auto w-[100%]  pt-36"
    >
      <div className=" ">
        <h1 className="text-3xl md:text-[40px] font-bold leading-relaxed">
          Hello, It's Me <br />
          <span className="text-white text-6xl">Chandan Varma</span> <br />
          I'm a <span className="text-teal-400">Blockchain Developer</span>
        </h1>
        <p className="text-gray-400 mt-4 w-[75%]">
          This is only demo version of my Portfolio more details, upcoming
          updates will be available soon.stay updated for more I am curruntly
          woking on it in my spare time,open in desptop mode in chrome for
          better result
        </p>
        <div className="flex space-x-6 mt-8">
          <a href="#" className="text-teal-400 hover:text-teal-600">
            <i className="text-2xl">
              <FaFacebook />
            </i>
          </a>
          <a href="#" className="text-teal-400 hover:text-teal-600">
            <i className="text-2xl">
              <FaTwitter />
            </i>
          </a>
          <a href="#" className="text-teal-400 hover:text-teal-600">
            <i className="text-2xl">
              <FaInstagram />
            </i>
          </a>
          <a href="#" className="text-teal-400 hover:text-teal-600">
            <i className="text-2xl">
              <FaLinkedin />
            </i>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="mt-12 bg-teal-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition duration-300">
            Download CV
          </button>
          <button
            className="mt-12 bg-teal-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition duration-300"
            onClick={() => loginWithGoogle()}
          >
            Login With Google
          </button>
        </div>
      </div>
      <div className="md:w-[45%] flex justify-center md:justify-center mb-10 md:mb-0 rounded-full ">
        <div className="rounded-lg p-2 ">
          <img
            src={image}
            alt="John Kendric"
            className="rounded-lg object-cover w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Section;

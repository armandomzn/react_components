import heroImg from "../assets/hero.svg";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="h-[calc(100vh-6rem)] bg-sky-200 py-4 flex md:items-center justify-start">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-11/12 items-center">
        <article className="grid gap-y-4">
          <h1 className="capitalize tracking-wider font-bold sm:text-6xl text-4xl">
            i'm armando
          </h1>
          <p className="capitalize text-sky-700 text-3xl tracking-wide">
            software developer
          </p>
          <p className="capitalize text-xl tracking-wide text-sky-700">
            unlocking digital potential
          </p>
          <div className="flex gap-x-4">
            <a href="https://github.com/armandomzn" target="_blank">
              <FaGithubSquare className="w-9 h-9 text-sky-800 hover:text-sky-600 duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/armadomzn/" target="_blank">
              <FaLinkedin className="w-9 h-9 text-sky-800 hover:text-sky-600 duration-200" />
            </a>
          </div>
        </article>
        <article className="hidden md:block justify-self-center">
          <img
            src={heroImg}
            alt="hero img"
            className="h-64 w-full object-cover"
          />
        </article>
      </div>
    </div>
  );
};
export default Hero;

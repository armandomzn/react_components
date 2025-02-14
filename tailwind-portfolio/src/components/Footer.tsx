const Footer = () => {
  return (
    <footer className="py-8 bg-sky-200">
      <div className="mx-auto w-11/12 max-w-6xl flex justify-center content-center">
        <p className="flex sm:flex-row flex-col gap-4 justify-center items-center text-sky-800 capitalize font-medium text-base tracking-wide">
          made in méxico, &copy; {new Date().getFullYear()}
          <span className="text-center p-2 text-sky-500 hover:text-white hover:bg-sky-800 hover:rounded duration-200 cursor-pointer">
            <a
              href="https://github.com/armandomzn"
              target="_blank"
              className="capitalize"
            >
              armando maldonado
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

export const Loader = () => {
  return (
    <div id="preloader">
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>
  );
};

export const LoaderGrowing = () => {
  return (
    <div className="absolute inset-0 flex bg-[#ffffffd0] z-40 justify-center items-center">
      <div className="spinner-grow text-themePrimary h-10 w-10" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

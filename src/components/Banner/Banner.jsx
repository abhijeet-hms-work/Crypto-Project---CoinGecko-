import BannerImage from "../../assets/banner1.jpeg";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImage} alt="" className="h-full w-full" />

      <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
        <div className="font-semibold text-5xl tect-white">Crypto Tracker</div>
        <div className="font-semibold text-sm text-white text-center">
          Get all info regarding cryptocurrencies
        </div>
      </div>
    </div>
  );
}

export default Banner;

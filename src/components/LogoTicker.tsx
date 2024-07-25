import ad from "@/assets/ad.png";
import st from "@/assets/st.png";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex justify-around w-full flex-none">
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;

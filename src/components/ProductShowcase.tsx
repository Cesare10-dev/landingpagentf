import Image from "next/image";
import dd from "@/assets/dd.jpg";
import cyl from "@/assets/3dcyl.png";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-4xl md:text-[54px] md:leading-[60px] h-28 md:h-32 mt-5 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            eum quis vero temporibus ducimus eius?
          </p>
        </div>
        <div className="relative">
          <Image
            src={dd}
            alt="Product image"
            width={1050}
            className="mt-10 mx-auto"
          />
          <Image
            src={cyl}
            alt="c"
            width={262}
            height={262}
            className="hidden md:block absolute -right-28 -top-24"
          />
          <Image
            src={cyl}
            alt="c"
            height={248}
            className="hidden md:block absolute bottom-20 -left-36"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

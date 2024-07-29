"use client";
import Image from "next/image";
import dd from "@/assets/dd.jpg";
import cyl from "@/assets/3dcyl.png";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title h-32 mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
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
          <motion.img
            src={cyl.src}
            alt="c"
            width={262}
            height={262}
            className="hidden md:block absolute -right-28 -top-24"
          />
          <motion.img
            src={cyl.src}
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

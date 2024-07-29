"use client";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import cog from "@/assets/3dcog.png";
import cyl from "@/assets/3dcyl.png";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_68%)] overflow-x-clip">
      <div className="container mx-auto px-8">
        <div className="md:flex items-center">
          <div className="w-[578px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              asperiores iste odit assumenda non magnam ab voluptatem,
              aspernatur sed earum?
            </p>
            <div className="flex items-center gap-1 mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowLongRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cog.src}
              alt="cog img"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cyl.src}
              alt="cyl"
              width={220}
              height={220}
              className="hidden md:block md:absolute -top-8 -left-32"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={cyl.src}
              alt="cyl"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[450px] left-[448px] rotate-[70deg]"
              style={{
                rotate: 70,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

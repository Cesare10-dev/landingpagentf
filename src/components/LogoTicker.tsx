"use client";
import ad from "@/assets/ad.png";
import st from "@/assets/st.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            // Per la velocità dell'animazione il valore di gap e pr
            // deve essere uguale, quindi se c'è il salto devo aumentare
            // finchè non trovo il valore che fa sembrare continuato.
            className="flex gap-36 flex-none pr-36"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
            <Image src={st} alt="logo" className="logo-thicker-image" />
            <Image src={ad} alt="logo" className="logo-thicker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;

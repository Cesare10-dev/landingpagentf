import Logo from "@/assets/img1.png";
import Image from "next/image";
import {
  BsTwitterX,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10 text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center mt-6 gap-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <BsTwitterX />
          <BsInstagram />
          <BsLinkedin />
          <BsPinterest />
          <BsYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

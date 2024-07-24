import { ArrowLongRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "@/assets/img1.png";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your creativity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="">Get started for Free</p>
          <ArrowLongRightIcon className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      {/* Navbar */}
      <div className="py-5">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" height={40} width={40} />
            <Bars3Icon className="w-5 h-5 md:hidden" />

            <nav className="hidden md:flex text-black/60 gap-6 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Update</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

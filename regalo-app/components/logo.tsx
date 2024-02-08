import Image from "next/image";
import logo from "../public/images/logo-horizontal.png";

const Logo = () => {
  return (
    <div className="flex lg:flex-1 max-h-24">
      <span className="sr-only">Regalo Assessoria</span>
      <Image src={logo} className="object-cover max-h-24 max-w-52" alt="" />
    </div>
  );
};

export default Logo;

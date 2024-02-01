import Image from "next/image";
import logo from "../../assets/logo.svg";

const SideBer = () => {
  return (
    <div className="bg-white rounded-2xl min-h-screen">
      <div className="flex justify-center">
        <Image className="mx-auto mt-4" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default SideBer;

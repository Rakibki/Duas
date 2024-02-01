import Image from "next/image";

const SettingsItem = ({ logo, text }) => {
  return (
    <div className="flex py-3 px-2 rounded-lg gap-1 items-center bg-[#f7f8fa]">
      <Image width={20} height={20} src={logo} alt="Setting_logo" />
      <h3 className="text-xs">{text}</h3>
    </div>
  );
};

export default SettingsItem;

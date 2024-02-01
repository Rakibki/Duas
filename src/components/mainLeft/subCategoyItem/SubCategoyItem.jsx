import Image from "next/image";

const SubCategoyItem = ({ category }) => {
  return (
    <div className="collapse p-0 w-full rounded-none">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div className="collapse-title mb-0 p-0">
        <h2 className="text-[13px] font-medium pt-4 text-center">{category?.title}</h2>
      </div>
      <ul className="collapse-content -mt-3">
        {category?.subCategories?.map((item, index) => {
          return (
            <div key={index} className="flex cursor-pointer items-center gap-1">
              <Image width={16} height={16} src={"https://duaruqyah.com/assets/duaarrow.svg"} alt="aroow" />
              <li className="text-[13px]" key={item?.id}>
                {item?.subTitle}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SubCategoyItem;

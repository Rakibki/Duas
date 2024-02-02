import Image from "next/image";

const SubCategoyItem = ({ category }) => {
  return (
    <div className="collapse p-0 w-full rounded-none">
      <input type="radio" name="my-accordion-8" checked="checked" />
      <div className="collapse-title mb-0 p-0">
        <h2 className="text-[13px] font-medium pt-4 text-center">
          {category?.title}
        </h2>
      </div>
      <ul className="collapse-content -mt-3">
        {category?.subCategories?.map((item, index) => {
          return (
            <div key={index} className="flex cursor-pointer gap-1">
              <Image
                className="-mt-4"
                width={18}
                height={18}
                src={"https://duaruqyah.com/assets/duaarrow.svg"}
                alt="aroow"
              />
              <li className="text-[12px] font-medium mb-2" key={item?.id}>
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

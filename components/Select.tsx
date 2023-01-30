import Image from "next/image";
import upArrow from "../public/up-arrow.png";
import downArrow from "../public/down-arrow.png";
import { useEffect, useRef, useState } from "react";

const Select: React.FC<{
  list: string[];
  setFunc: (value: string) => void;
  initialValue?: string;
}> = ({ list, setFunc, initialValue }) => {
  const [dropDowns, setDropDowns] = useState(false);
  const [selectValue, setSelectValue] = useState(initialValue || list[0]);

  useEffect(() => {
    document.addEventListener("click", clickOutside);
  }, []);
  const ref = useRef(null);
  const clickOutside = (el: any) => {
    !ref.current?.contains(el.target) && setDropDowns(false);
  };
  useEffect(() => {
    setFunc(selectValue);
  }, [selectValue]);
  return (
    <div className="relative ml-10 cursor-pointer" ref={ref}>
      <div
        className="relative shadow-lg w-[200px] h-[40px] flex items-center border-gray-400 border-[1px] py-q pl-2 rounded-md"
        onClick={() => setDropDowns(dropDowns ? false : true)}
      >
        <Image
          src={dropDowns ? upArrow : downArrow}
          alt="arrow"
          className="w-4 h-4 right-3 top-3 absolute"
        />
        <p>{selectValue}</p>
      </div>
      <div
        className={`absolute bg-white w-full py-1 pl-1 rounded-md shadow-xl ${
          !dropDowns && "hidden"
        }`}
      >
        {list.map((el) => (
          <p
            className="pl-1 py-2"
            onClick={() => {
              setDropDowns(false);
              setSelectValue(el);
            }}
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Select;

import Image from "next/image";
import search from "../public/search.png";
import { useEffect, useState } from "react";
import { Params } from "../pages/index";
import Select from "./Select";
import { useDebounce } from "usehooks-ts";
import { CustomSelect } from "./CustomSelectFeedback";

const Header: React.FC<{
  setParams: (value: Params) => void;
  params: Params;
}> = ({ setParams, params }) => {
  const [status, setStatus] = useState("");
  const [all, setAll] = useState("");
  const debounceValue = useDebounce(params.search, 500);
  useEffect(() => {
    setParams({ ...params, status: status, all: all });
  }, [status, all]);
  return (
    <div>
      <div className="flex justify-between">
        <div className="relative">
          <Image
            src={search}
            alt="search"
            className="w-6 h-6 mt-1 ml-2 absolute"
          />
          <input
            placeholder="Search items"
            onChange={(el) => {
              setParams({ ...params, search: el.target.value });
            }}
            className="pl-10 py-1 pr-2 rounded-md border-gray-400 shadow-lg border-[1px]"
          />
        </div>
        <div className="flex">
          <div className="w-[200px]">
            <CustomSelect
              className={"shadow-lg"}
              defaultValue={params.status}
              options={[
                { value: "Status 1", label: "Status 1" },
                { value: "Status 2", label: "Status 2" },
                { value: "Status 3", label: "Status 3" },
                { value: "Status 4", label: "Status 4" },
                { value: "Status 5", label: "Status 5" },
              ]}
              onChange={(item: any) => {
                setStatus(item.value);
              }}
            />
          </div>
          <div className="w-[200px] ml-10">
            <CustomSelect
              className={"shadow-lg"}
              defaultValue={params.all}
              options={[
                { value: "All 1", label: "All 1" },
                { value: "All 2", label: "All 2" },
                { value: "All 3", label: "All 3" },
                { value: "All 4", label: "All 4" },
                { value: "All 5", label: "All 5" },
              ]}
              onChange={(item: any) => {
                setAll(item.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-md font-semibold">Items: 43</p>
        <div className="flex">
          <input type="checkbox" className="w-5 h-5 mt-1" />
          <label className="ml-3 text-md font-semibold">has guarantee</label>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import search from "../public/search.png";
import { useEffect, useState } from "react";
import { Params } from "../pages/index";
import Select from "./Select";
import { useDebounce } from "usehooks-ts";

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
  console.log(debounceValue);
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
          <Select
            list={[
              "Status 1",
              "Status 2",
              "Status 3",
              "Status 4",
              "Status 5",
              "Status 6",
            ]}
            setFunc={setStatus}
            initialValue={params.status}
          />
          <Select
            list={["All 1", "All 2", "All 3", "All 4", "All 5", "All 6"]}
            setFunc={setAll}
            initialValue={params.all}
          />
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

import Image from "next/image";
import Select from "./Select";
import user from "../public/user.png";
import grid from "../public/grid.png";
import { useState } from "react";
import { CustomSelect } from "./CustomSelectFeedback";
import { Params } from "@/pages";

const Navigation: React.FC<{
  setParams: (value: Params) => void;
  params: Params;
}> = ({ setParams, params }) => {
  return (
    <div className="flex sticky z-20 top-0 left-0 w-full justify-between bg-white shadow-lg items-center pl-2">
      <div className="flex items-center ml-4">
        <Image src={grid} alt="grid" className="w-5 h-5" />
        <p className="font-bold text-3xl ml-2 mt-[-6px]">Inventory</p>
        <CustomSelect
          width={"250px"}
          className={
            "shadow-lg border-[1px] border-bray-400 rounded-lg top-2 left-4 mb-3"
          }
          name={null}
          errors={null}
          options={[
            { value: "Status 1", label: "Status 1" },
            { value: "Status 2", label: "Status 2" },
            { value: "Status 3", label: "Status 3" },
            { value: "Status 4", label: "Status 4" },
            { value: "Status 5", label: "Status 5" },
          ]}
        />
      </div>
      <div className="flex items-center w-[40%] justify-evenly h-full">
        <p
          onClick={() => setParams({ ...params, page: "Items" })}
          className={`p-2 py-4 font-medium text-xl cursor-pointer h-full ${
            params.page === "Items" && "border-b-2 border-gray-400"
          }`}
        >
          Items
        </p>
        <p
          onClick={() => setParams({ ...params, page: "Activity" })}
          className={`p-2 py-4 font-medium text-xl cursor-pointer ${
            params.page === "Activity" && "border-b-2 border-gray-400"
          } eas`}
        >
          Activity
        </p>
        <p
          onClick={() => setParams({ ...params, page: "Categories" })}
          className={`p-2 py-4 font-medium text-xl cursor-pointer ${
            params.page === "Categories" && "border-b-2 border-gray-400"
          }`}
        >
          Categories
        </p>
        <p
          onClick={() => setParams({ ...params, page: "Users" })}
          className={`p-2 py-4 font-medium text-xl cursor-pointer ${
            params.page === "Users" && "border-b-2 border-gray-400"
          }`}
        >
          Users
        </p>
        <p
          onClick={() => setParams({ ...params, page: "Location" })}
          className={`p-2 py-4 font-medium text-xl cursor-pointer ${
            params.page === "Location" && "border-b-2 border-gray-400"
          }`}
        >
          Location
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={user} alt="user" className="w-10 h-10" />
        <button className="bg-blue-600 text-xl text-white font-semibold px-4 py-2 mr-5 ml-2 rounded-md">
          Add new item
        </button>
      </div>
    </div>
  );
};

export default Navigation;

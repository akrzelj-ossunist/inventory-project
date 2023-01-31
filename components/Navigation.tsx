import Image from "next/image";
import Select from "./Select";
import user from "../public/user.png";
import grid from "../public/grid.png";
import { useState } from "react";
import { CustomSelect } from "./CustomSelectFeedback";

const Navigation: React.FC<{
  setPage: (value: string) => void;
  page: string;
}> = ({ setPage, page }) => {
  return (
    <div className="flex sticky z-20 top-0 left-0 w-full justify-between bg-white shadow-lg items-center py-2 pl-2">
      <div className="flex items-center ml-4">
        <Image src={grid} alt="grid" className="w-5 h-5" />
        <p className="font-bold text-3xl ml-2 mt-[-6px]">Inventory</p>
        <CustomSelect
          width={"250px"}
          className={
            "shadow-lg border-[1px] border-bray-400 rounded-lg top-2 left-4"
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
      <div className="flex items-center w-[40%] justify-evenly">
        <p
          onClick={() => setPage("Items")}
          className={`m-2 font-medium text-xl cursor-pointer ${
            page === "Items" && "border-b-[1px] border-gray-400"
          }`}
        >
          Items
        </p>
        <p
          onClick={() => setPage("Activity")}
          className={`m-2 font-medium text-xl cursor-pointer ${
            page === "Activity" && "border-b-[1px] border-gray-400"
          }`}
        >
          Activity
        </p>
        <p
          onClick={() => setPage("Categories")}
          className={`m-2 font-medium text-xl cursor-pointer ${
            page === "Categories" && "border-b-[1px] border-gray-400"
          }`}
        >
          Categories
        </p>
        <p
          onClick={() => setPage("Users")}
          className={`m-2 font-medium text-xl cursor-pointer ${
            page === "Users" && "border-b-[1px] border-gray-400"
          }`}
        >
          Users
        </p>
        <p
          onClick={() => setPage("Location")}
          className={`m-2 font-medium text-xl cursor-pointer ${
            page === "Location" && "border-b-[1px] border-gray-400"
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

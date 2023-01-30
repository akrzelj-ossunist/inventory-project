import Image from "next/image";
import Select from "./Select";
import user from "../public/user.png";
import grid from "../public/grid.png";
import { useState } from "react";

const Navigation = () => {
  const [company, setCompany] = useState("");
  return (
    <div className="flex sticky z-10 top-0 left-0 w-full justify-between bg-white shadow-lg items-center py-4">
      <div className="flex items-center ml-4">
        <Image src={grid} alt="grid" className="w-5 h-5" />
        <p className="font-bold text-3xl ml-2 mt-[-6px]">Invetory</p>
        <Select
          list={[
            "Company 1",
            "Company 2",
            "Company 3",
            "Company 4",
            "Company 5",
            "Company 6",
          ]}
          setFunc={setCompany}
        />
      </div>
      <div className="flex items-center w-[40%] justify-evenly">
        <p className="m-2 font-medium text-xl">Items</p>
        <p className="m-2 font-medium text-xl">Activity</p>
        <p className="m-2 font-medium text-xl">Categories</p>
        <p className="m-2 font-medium text-xl">Users</p>
        <p className="m-2 font-medium text-xl">Location</p>
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

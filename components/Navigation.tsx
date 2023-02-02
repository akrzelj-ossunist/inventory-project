import Image from "next/image";
import user from "../public/user.png";
import grid from "../public/grid.png";
import { CustomSelect } from "./CustomSelectFeedback";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const route = useRouter();
  return (
    <>
      <div className="flex sticky z-20 top-0 left-0 w-full justify-between bg-white shadow-lg items-center pl-2">
        <div className="flex items-center ml-4">
          <Link className="flex" href="/">
            <Image src={grid} alt="grid" className="w-5 h-5 mt-1" />
            <p className="font-bold text-3xl ml-2 mt-[-6px] mr-5">Inventory</p>
          </Link>
          <CustomSelect
            width={"200px"}
            className="mt-2"
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
          <Link
            href={`/`}
            className={`p-2 py-4 font-medium text-xl cursor-pointer h-full ${
              route.query.page === undefined && "border-b-4 border-gray-400"
            }`}
          >
            Items
          </Link>
          <Link
            href={`/Activity`}
            className={`p-2 py-4 font-medium text-xl cursor-pointer ${
              route.query.page === "Activity" && "border-b-4 border-gray-400"
            }`}
          >
            Activity
          </Link>
          <Link
            href={`/Categories`}
            className={`p-2 py-4 font-medium text-xl cursor-pointer ${
              route.query.page === "Categories" && "border-b-4 border-gray-400"
            }`}
          >
            Categories
          </Link>
          <Link
            href={`/Users`}
            className={`p-2 py-4 font-medium text-xl cursor-pointer ${
              route.query.page === "Users" && "border-b-4 border-gray-400"
            }`}
          >
            Users
          </Link>
          <Link
            href={`/Location`}
            className={`p-2 py-4 font-medium text-xl cursor-pointer ${
              route.query.page === "Location" && "border-b-4 border-gray-400"
            }`}
          >
            Location
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Image src={user} alt="user" className="w-10 h-10" />
          <button className="bg-blue-600 text-xl text-white font-semibold px-4 py-2 mr-5 ml-2 rounded-md">
            Add new item
          </button>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navigation;

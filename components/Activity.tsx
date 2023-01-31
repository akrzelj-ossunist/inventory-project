import Image from "next/image";
import search from "../public/search.png";
import user from "../public/user.png";
import more from "../public/more.png";
import add from "../public/add.png";
import { useState } from "react";

const Activity: React.FC = () => {
  const Item = "Macbook Pro (#55477)";
  const username = " Marko Maljkovic";
  let arr = new Array();
  for (let i = 0; i < 12; i++) arr.push(i + 1);
  const [addNewActivity, setAddNewActivity] = useState(false);
  console.log(addNewActivity);
  return (
    <div>
      <div className="relative">
        <Image
          src={search}
          alt="search"
          className="w-6 h-6 mt-1 ml-2 absolute"
        />
        <input
          placeholder="Search items"
          className="pl-10 py-1 pr-2 rounded-md border-gray-400 shadow-lg border-[1px]"
        />
      </div>
      <p className="font-semibold my-5 mt-10">Activities: 43</p>
      {arr.map(() => {
        return (
          <div className="flex justify-between items-centerm my-5">
            <div className="flex items-center">
              <Image src={user} alt="user" className="w-12 h-12 mr-3" />
              <div>
                <div className="flex">
                  <p className="mr-1 font-bold">{Item}</p>
                  <p className="mr-1">was given to</p>
                  <p className="mr-1 font-medium underline">{username}</p>
                  <p>on date 14.05.2022.</p>
                </div>
                <p className="text-gray-400 text-sm">
                  Prezuet iz skladišta ali je malo oštećen od strane Keka!
                </p>
                <p className="text-gray-400 text-sm">
                  Last edited on 22.05.2022 by Tina Ivišić.
                </p>
              </div>
            </div>
            <div className={`flex`}>
              <Image
                onClick={() => setAddNewActivity(addNewActivity ? false : true)}
                src={more}
                alt="more"
                className="w-6 h-6 cursor-pointer"
              />
              <div
                className={`mt-5 rounded-lg shadow-xl flex pr-10 pl-5 pt-4 pb-14 absolute ml-5 ${
                  !addNewActivity && "hidden"
                }`}
              >
                <Image src={add} alt="add" className="w-4 h-4 mt-1 mr-2" />
                <p>Add new activity</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;

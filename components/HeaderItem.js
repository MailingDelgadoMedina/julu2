import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col cursor-pointer items-center group w-12 sm:w-20 hover:text-green-300">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0  group-hover:opacity-100 tracking-widest ">
        {" "}
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;

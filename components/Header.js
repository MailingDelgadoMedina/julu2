import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div>
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://res.cloudinary.com/programandoconmei/image/upload/v1663476468/JULUtransparent_kzds8o.svg"
        width={200}
        height={100}
      />
      Header
    </div>
  );
}

export default Header;

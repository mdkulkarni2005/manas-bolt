import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Color from "@/data/Color";
import { UserDetailContext } from "@/context/UserDetailContext";
import Link from "next/link";

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href="/">
        <Image src={"/bolt.png"} alt="Logo" width={40} height={40} />
      </Link>

      {!userDetail?.name && (
        <div className="flex gap-5">
          <Button variant="ghost">Sign In</Button>
          <Button
            className="text-white"
            style={{
              backgroundColor: Color.BLUE,
            }}
          >
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;

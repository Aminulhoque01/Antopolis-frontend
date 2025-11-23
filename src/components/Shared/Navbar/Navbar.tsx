"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
 
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
   
  const router = useRouter();

  const handleLogout = () => {
   
    router.push("/login");
  };

   

  return (
    <div className="    ">
      <div className="w-full container flex justify-between items-center">
        <Link href='/'><h1 className="text-xl font-bold text-white  ">Antopolis</h1></Link>
       
      </div>
    </div>
  );
};

export default Navbar;

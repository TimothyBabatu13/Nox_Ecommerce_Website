<<<<<<< HEAD
"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { SearchIcon } from "./SVGs";

const NotAuthenticated = () => {
  return(
    <section>
      <Link 
        href={"/login"}
        prefetch
        className="text-secondary"
      >
        Login 
      </Link>
      <Link 
        href={"/register"}
        prefetch
        className="bg-primary font-sevenHundred text-primary py-[16px] px-[24px] rounded-[5px] ml-[30px] transition-all hover:bg-[#af1313d0]"
      > 
        Register Now 
      </Link>
    </section>
  )
}

const HeaderClientComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
      const [search, setSearch] = useState<string>("");
      const url = usePathname();
      const ref = useRef<any>(null);

      if(url === "/") return <NotAuthenticated />
      if(url === '/login' || url === '/register' || url === '/verify' || url === '/forgot-password' || url === '/reset-password'){
        return <></>
      }

      const handleFocus = ()=>{

      }
      const handleChange = ()=> {

      }

      const handleSearch = () => {

      }
  return (
    <div className="flex items-center">
      <div
            className="hidden relative mb-[15px] md:mb-0 md:flex"
        >
            <input 
              type="email" 
              name="" 
              id=""
              value={search}
              onChange={handleChange}
              className="bg-[#FFFFFF] text-[16px] h-[40px] w-[350px] py-[28px] border px-[56px] rounded-[5px] mr-[8px]"
              placeholder="Search for something..." 
              ref={ref}
            />
            <button
              className="absolute top-[50%] -translate-y-1/2 left-[24px]"
              onClick={handleFocus}
            >
              <SearchIcon />
            </button>
            <button 
              type="submit"
              onClick={handleSearch}
              className="w-fit bg-primary text-[#FFFFFF] py-[15px] px-[30px] rounded-[5px] transition-all hover:bg-[#af1313d0]"
            >
              Search
            </button>
        </div>
        {children}
    </div>
  )
}

=======
"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { SearchIcon } from "./SVGs";

const NotAuthenticated = () => {
  return(
    <section>
      <Link 
        href={"/login"}
        className="text-secondary"
      >
        Login 
      </Link>
      <Link 
        href={"/register"}
        className="bg-primary font-sevenHundred text-primary py-[16px] px-[24px] rounded-[5px] ml-[30px] transition-all hover:bg-[#af1313d0]"
      > 
        Register Now 
      </Link>
    </section>
  )
}

const HeaderClientComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
      const [search, setSearch] = useState<string>("");
      const url = usePathname();
      const ref = useRef<any>(null);

      if(url === "/") return <NotAuthenticated />
      if(url === '/login' || url === '/register' || url === '/verify' || url === '/forgot-password' || url === '/reset-password'){
        return <></>
      }

      const handleFocus = ()=>{

      }
      const handleChange = ()=> {

      }

      const handleSearch = () => {

      }
  return (
    <div className="flex items-center">
      <div
            className="hidden relative mb-[15px] md:mb-0 md:flex"
        >
            <input 
              type="email" 
              name="" 
              id=""
              value={search}
              onChange={handleChange}
              className="bg-[#FFFFFF] text-[16px] h-[40px] w-[350px] py-[28px] border px-[56px] rounded-[5px] mr-[8px]"
              placeholder="Search for something..." 
              ref={ref}
            />
            <button
              className="absolute top-[50%] -translate-y-1/2 left-[24px]"
              onClick={handleFocus}
            >
              <SearchIcon />
            </button>
            <button 
              type="submit"
              onClick={handleSearch}
              className="w-fit bg-primary text-[#FFFFFF] py-[15px] px-[30px] rounded-[5px] transition-all hover:bg-[#af1313d0]"
            >
              Search
            </button>
        </div>
        {children}
    </div>
  )
}

>>>>>>> fa096c5419a1cc3487731f6ea6c5b651a34dad8a
export default HeaderClientComponent
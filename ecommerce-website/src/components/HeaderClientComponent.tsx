"use client";

import { usePathname } from "next/navigation";

const HeaderClientComponent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

      const url = usePathname();
  
  return (
    <div>
        {url === '/login' || url === '/register' ? <></> : children}
    </div>
  )
}

export default HeaderClientComponent
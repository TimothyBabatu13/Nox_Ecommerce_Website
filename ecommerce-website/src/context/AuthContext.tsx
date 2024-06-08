'use client';

import { useRouter } from "next/navigation";

import React, { createContext,  useEffect,  useState } from "react";



const Context = createContext<any>(null);

const data = {
    isActive: true,
}

const AuthContext = ({ children } : { children: React.ReactElement }) => {
    const token = 'marcsonic';
    const route = useRouter();

    const [active, setIsActive] = useState<any>({
        isActive: true
        // isActive: (window.localStorage.getItem('active-token') && window.localStorage.getItem('active-token') === token) ? true : false
    });

    
    useEffect(()=> {
        if(active.isActive){
            // route.push("/home");
        }
    }, [])
    

  return (
    <Context.Provider value={{}}>
        {children}
    </Context.Provider>
  )
}

export default AuthContext
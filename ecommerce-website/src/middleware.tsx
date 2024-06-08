import { NextRequest, NextResponse } from "next/server"


const middleware = (request: NextRequest) => {
    // if(request.nextUrl.pathname === "/") return NextResponse.redirect(new URL('/hello', request.url))
    const response = NextResponse.next();
    // console.log(response.cookies.get('hello'))
}

export default middleware
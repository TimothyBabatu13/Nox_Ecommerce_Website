import Banner from "@/components/Banner";
import Body from "@/components/Body";
import Camera from "@/components/Camera";
import Info from "@/components/Info";
import Model from "@/components/Model";
import Review from "@/components/Review";
import Why from "@/components/Why";
import Wrapper from "@/components/Wrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <Wrapper>
        <Suspense fallback={<></>}>
          <Body />
        </Suspense>
        <Info />
      </Wrapper>
      <Suspense fallback={<></>}>
        <Why />
      </Suspense>
      <Wrapper>
        <Suspense fallback={<></>}>
          <Model />
        </Suspense>
        <Suspense fallback={<></>}>
          <Review />
        </Suspense>
        <Suspense fallback={<></>}>
          <Banner 
            title="Simple is Beautiful"
            text="You realize how much you wanna feel thos beats"
            reverse={false}
          />
        </Suspense>
        <div className="mt-[100px] mb-[100px]">
          <Suspense fallback={<></>}>
            <Banner 
              title="Your Comfort, Our Pride"
              text="You realize how much you wanna feel those beats"
              reverse
            />
          </Suspense>
        </div>
        <Camera />
      </Wrapper>
    </main>
  );
}

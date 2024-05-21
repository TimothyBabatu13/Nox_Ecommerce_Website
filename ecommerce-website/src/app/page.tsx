import Banner from "@/components/Banner";
import Body from "@/components/Body";
import Camera from "@/components/Camera";
import Info from "@/components/Info";
import Model from "@/components/Model";
import Review from "@/components/Review";
import Why from "@/components/Why";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="">
      <Wrapper>
        <Body />
        <Info />
      </Wrapper>
      <Why />
      <Wrapper>
        <Model />
        <Review />
        <Banner 
          title="Simple is Beautiful"
          text="You realize how much you wanna feel thos beats"
          reverse={false}
        />
        <div className="mt-[100px] mb-[100px]">
          <Banner 
            title="Your Comfort, Our Pride"
            text="You realize how much you wanna feel those beats"
            reverse
          />
        </div>
        <Camera />
      </Wrapper>
    </main>
  );
}

import Body from "@/components/Body";
import Info from "@/components/Info";
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
    </main>
  );
}

import { Hero } from "@/components/sections/hero";
import { QuickInfo } from "@/components/sections/quick-info";
import { About } from "@/components/sections/about";
import { Levels } from "@/components/sections/levels";
import { Schedule } from "@/components/sections/schedule";
import { Library } from "@/components/sections/library";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <About />
      <Levels />
      <Schedule />
      <Library />
      <Location />
      <Contact />
    </>
  );
}
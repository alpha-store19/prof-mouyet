import { Hero } from "@/components/sections/hero";
import { QuickInfo } from "@/components/sections/quick-info";
import { About } from "@/components/sections/about";
import { Levels } from "@/components/sections/levels";
import { Schedule } from "@/components/sections/schedule";
import { Instagram } from "@/components/sections/instagram";
import { Telegram } from "@/components/sections/telegram";
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
      <Instagram />
      <Telegram />
      <Library />
      <Location />
      <Contact />
    </>
  );
}
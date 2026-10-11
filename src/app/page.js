import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Section2DataP1,
  Section2DataP2,
  Section4DataP1,
  Section4DataP2,
} from "./data/HomePageData";
import { BiTargetLock } from "react-icons/bi";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
      {/* Section 1 */}
      <section
        className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/2117697-3840x2160-desktop-4k-dark-wallpaper.jpg')",
        }}
      >
        <Header />
        <div className="py-15 px-7 lg:p-20">
          <h1 className="text-2xl lg:text-3xl font-bold italic">
            Experience
            <br /> Vancouver Island’s
            <br /> <span className="text-gold-400">Ultimate</span> Hunting
            Adventures
          </h1>
          <p className="text-[15px] lg:text-base italic mt-4 lg:mt-6.5">
            Guided wilderness expeditions across Vancouver Island’s most
            spectacular hunting territories.
            <br /> Where wild landscapes meet unforgettable adventure.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative z-10 flex flex-col items-center min-h-screen bg-paper py-5 px-3.5 lg:px-8.5 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <ScrollReveal className="flex flex-col items-center gap-7.5 lg:gap-10">
          <div className="flex flex-col items-center gap-15">
            <div className="flex items-center justify-center gap-2 border border-gold-500 px-4 py-1.5 rounded-full">
              <BiTargetLock className="size-5 lg:size-6.5 text-gold-500" />
              <span className="uppercase text-[11px] lg:text-sm font-bold">
                unrivaled wildlife density
              </span>
            </div>
            <h2 className="text-xl lg:text-3xl font-bold italic text-center">
              Why Hunters Are Obsessed with Hunting on Vancouver Island
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {Section2DataP1.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3.5 border-t-3 border-b-1 border-x-2 border-gold-500 p-4 rounded-lg"
                >
                  <h3 className="text-lg lg:text-xl font-bold italic">
                    {item.title}
                  </h3>
                  <span className="h-px w-1/3 bg-gold-500" />
                  <h3 className="text-lg lg:text-xl font-bold text-center">
                    {item.subTitile}
                  </h3>
                  <p className="text-[15px] lg:text-base italic text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-7.5">
            <h2 className="text-2xl lg:text-3xl font-bold italic text-center">
              Find the Perfect Hunting Adventure on Vancouver Island
            </h2>
            <p className="text-sm lg:text-base text-center">
              The Vanisle Hunters team offers tailored hunting tours for
              individuals, groups, or families. If you have any particular
              requests, we will do our best to design a hunting trip that meets
              your preferences. Explore our hunting challenges and enjoy your
              dream hunt in one of BC’s best-hunting destinations.
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
              {Section2DataP2.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full min-h-40 flex flex-col items-center justify-center gap-3.5 border-2 border-gold-500/85 rounded-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover absolute rounded-xl opacity-50"
                  />
                  <h3 className="text-lg lg:text-xl font-bold italic z-[10px] text-white">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <Link
              href="/hunting-locations"
              className="flex items-center justify-center gap-2 border-2 border-gold-500/85 px-6 py-2 rounded-2xl"
            >
              <span className="capitalize text-lg lg:text-xl font-bold">
                More Hunting Locations
              </span>
              <FaAngleRight className="size-6 lg:size-7.5 text-gold-500" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3 */}
      <section
        className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat py-15 px-3.5 lg:px-8.5 text-center"
        style={{
          backgroundImage:
            "url('/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg')",
        }}
      >
        <ScrollReveal className="w-full flex flex-col items-center gap-3.5 rounded-2xl py-8 px-7 border border-gold-500 bg-black/75">
          <div className="flex items-center justify-center gap-5 px-5.5 py-2.5 border border-gray-700/60 rounded-full">
            <GiCutDiamond className="size-4.5" />
            <span className="uppercase text-xs font-bold">
              Exclusive Packages
            </span>
          </div>
          <h2 className="italic text-[22px]">
            Opportunities More Tempting than Your First Harvest
          </h2>
          <p className="text-sm leading-6">
            You are not alone on the journey. Vanisle Hunters works with
            experienced, licensed hunting guides who can provide the services,
            local knowledge, and equipment you need for a well-planned hunt.
            With some species offering year-round hunting opportunities, there
            are options to explore throughout the year depending on the species,
            Management Unit, and applicable regulations. We’ve done the research
            to bring together quality B.C. hunting opportunities at affordable
            prices, with each hunt selected for its overall value and
            experience.
          </p>
        </ScrollReveal>
      </section>

      {/* Section 4 */}
      <section className="relative z-10 flex flex-col items-center bg-paper px-3.5 py-8 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <div className="flex flex-col items-center gap-15">
          <ScrollReveal className="w-full text-center">
            <div className="flex flex-col items-center gap-7.5">
              <div className="flex items-center justify-center gap-2 border border-gold-500 px-4 py-1.5 rounded-full">
                <BiTargetLock className="size-5 lg:size-6.5 text-gold-500" />
                <span className="uppercase text-[11px] lg:text-sm font-bold">
                  Target Species
                </span>
              </div>
              <h2 className="text-xl lg:text-3xl font-bold italic text-center">
                Vancouver Island Game Classifications
              </h2>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                {Section4DataP1.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    className="relative w-full min-h-40 flex flex-col items-start gap-3.5 border border-gold-500 rounded-2xl p-7 lg:p-9"
                  >
                    <Image
                      alt={item.title}
                      src={item.image}
                      fill
                      className="object-cover absolute rounded-2xl"
                    />
                    <div className="py-1 px-4 uppercase text-[11px] border border-gold-500 rounded-full bg-gold-500/20">
                      {item.head}
                    </div>
                    <div className="flex flex-col gap-1.5 text-start">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <p className="text-xs text-black/60 dark:text-white/60">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-full flex items-center justify-between mt-5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm lg:text-base text-gold-500">
                          Choose Your {item.title}
                        </span>
                        <FaArrowRight className="size-3 text-gold-500" />
                      </div>
                      <div className="flex size-8 items-center justify-center border border-gold-500 rounded-full bg-gold-500/20">
                        <FaArrowRight className="size-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="w-full flex flex-col items-start gap-15 relative rounded-2xl p-5">
            <div className="flex flex-col items-start gap-3.5">
              <div className="flex items-center justify-center gap-2 border border-gray-700/60 px-3.5 py-1.25 rounded-full">
                <BiTargetLock className="size-4 lg:size-6.5 text-gold-500" />
                <span className="uppercase text-[11px] lg:text-sm font-bold">
                  top big game hunting
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-xs text-gray-300">
                  Guided cougar hunt with experienced outfitters
                </p>
                <span className="h-px w-20 bg-gold-500 mt-2"></span>
                <h2 className="italic text-2xl">
                  <span className="text-gold-500">Cougar</span> Hunting
                  Expedition <br /> Vancouver Island
                </h2>
              </div>
              <p className="text-xs leading-5 text-gray-300">
                Guided cougar hunt with experienced outfitters. Includes
                lodging, meals, and trophy preparation. Season: November to
                March.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/cougar-hunting"
                  className="flex items-center gap-2.5 bg-gold-500 rounded-full px-4 py-2"
                >
                  <span className="text-sm">view all hunting tours</span>
                  <GoArrowUpRight />
                </Link>
                <Link
                  href="/cougar-hunting"
                  className="w-fit flex items-center gap-2.5 border border-gold-500 rounded-full px-4 py-2"
                >
                  <span className="text-sm">view hunt details</span>
                  <GoArrowUpRight />
                </Link>
              </div>
            </div>
            <div></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 */}
      <section
        className="relative flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat p-6 text-center"
        style={{
          backgroundImage:
            "url('/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg')",
        }}
      >
        <ScrollReveal className="max-w-2xl rounded-2xl bg-night-950/60 p-8 text-paper shadow-2xl backdrop-blur-xs border border-gold-500/30">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-400">
            Highlights
          </h2>
          <p className="mt-4 text-sm sm:text-base text-paper/85">
            Repeated showcase section with the second background image.
          </p>
        </ScrollReveal>
      </section>

      {/* Section 6 */}
      <section className="relative z-10 flex flex-col items-center min-h-screen bg-paper px-6 py-16 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <ScrollReveal className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-700 dark:text-gold-400">
            Connect With Us
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
            Final theme background section before the footer.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}

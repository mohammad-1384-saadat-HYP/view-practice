import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
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
            <br /> <span className="text-gold-400">Ultimate</span> Hunting Adventures
          </h1>
          <p className="text-[15px] lg:text-base italic mt-4 lg:mt-6.5">
            Guided wilderness expeditions across Vancouver Island’s most
            spectacular hunting territories.
            <br /> Where wild landscapes meet unforgettable adventure.
          </p>
        </div>
      </section>

      {/* 2. Section 2: Site Theme Background */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-700 dark:text-gold-400">
            About
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
            Content section on the site theme background.
          </p>
        </ScrollReveal>
      </section>

      {/* 3. Section 3: Image 2 as background */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-6 text-center"
        style={{
          backgroundImage:
            "url('/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg')",
        }}
      >
        <ScrollReveal className="max-w-2xl rounded-2xl bg-night-950/60 p-8 text-paper shadow-2xl backdrop-blur-xs border border-gold-500/30">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-400">
            Featured Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base text-paper/85">
            Full-view presentation on the second background image.
          </p>
        </ScrollReveal>
      </section>

      {/* 4. Section 4: Site Theme Background */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-700 dark:text-gold-400">
            Information & Details
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
            Content section on the site theme background.
          </p>
        </ScrollReveal>
      </section>

      {/* 5. Section 5: Image 2 repeated as background */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-6 text-center"
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

      {/* 6. Section 6: Site Theme Background before footer */}
      <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center bg-paper px-6 py-16 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
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

import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
      <section
        className="relative flex min-h-screen flex-col justify-between bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('/2117697-3840x2160-desktop-4k-dark-wallpaper.jpg')",
        }}
      >
        <Header />
        <div className="flex flex-1 items-center justify-center p-6 text-center">
          <div className="max-w-2xl rounded-2xl bg-black/30 p-8 text-paper shadow-2xl backdrop-blur-xs">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
              Welcome
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-paper/90 drop-shadow">
              Scroll down to explore
            </p>
          </div>
        </div>
      </section>

      {/* 2. Section 2: Site Theme Background */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-600 dark:text-gold-400">
            About
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
            Content section on the site theme background.
          </p>
        </div>
      </section>

      {/* 3. Section 3: Image 2 as fixed background */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed p-6 text-center"
        style={{
          backgroundImage:
            "url('/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg')",
        }}
      >
        <div className="max-w-2xl rounded-2xl bg-black/40 p-8 text-paper shadow-2xl backdrop-blur-xs border border-gold-500/20">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-400">
            Featured Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base text-paper/85">
            Full-view presentation on the second background image.
          </p>
        </div>
      </section>

      {/* 4. Section 4: Site Theme Background */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-600 dark:text-gold-400">
            Information & Details
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
            Content section on the site theme background.
          </p>
        </div>
      </section>

      {/* 5. Section 5: Image 2 repeated as fixed background */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed p-6 text-center"
        style={{
          backgroundImage:
            "url('/5815532-3840x2160-desktop-hd-4k-wallpaper-image.jpg')",
        }}
      >
        <div className="max-w-2xl rounded-2xl bg-black/40 p-8 text-paper shadow-2xl backdrop-blur-xs border border-gold-500/20">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-400">
            Highlights
          </h2>
          <p className="mt-4 text-sm sm:text-base text-paper/85">
            Repeated showcase section with the second background image.
          </p>
        </div>
      </section>

      {/* 6. Section 6: Site Theme Background before footer */}
      <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center bg-paper px-6 py-16 text-ink shadow-xl transition-colors dark:bg-black dark:text-paper">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-gold-600 dark:text-gold-400">
            Connect With Us
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-80">
            Final theme background section before the footer.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

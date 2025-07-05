import Navbar from "@/components/navbar/Navbar";

export default function page() {
  return (
    <main>
      <section className="flex flex-col px-4 sm:px-[6.4%] items-center">
        <div className="mw md:min-h-screen xl:min-h-auto relative overflow-hidden">
          <Navbar />
        </div>
      </section>
    </main>
  );
}

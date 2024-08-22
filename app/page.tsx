import Hero from "./_components/hero";
import Personas from "./_components/personas";
import Services from "./_components/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <Hero />
      <Services />
      <Personas />
    </main>
  );
}

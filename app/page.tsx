import Hero from "../pages/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative w-full bg-black flex justify-center items-center flex-col mx-auto overflow-x-hidden">
      <div>
        <FloatingNav navItems={[
          {name: 'Home', link: '#home'},
          {name: 'About', link: '#about'},
          {name: 'Skills', link: '#skills'},
          {name: 'Projects', link: '#projects'},
          {name: 'Contact', link: '#contact'},
        ]} />
      </div>
      <div className="max-w-7xl w-full flex justify-center items-center flex-col">
        <Hero />
      </div>
    </main>
  );
}
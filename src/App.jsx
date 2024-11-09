import {
  CallToAction,
  Footer,
  Hero,
  PopularProducts, Testimonials,
  Collection,
  AboutUs
} from "./sections";

import Nav from "./components/Nav";
import ValueProposition from "./sections/ValueProposition";

const App = () => (
  <main className="relative bg-gradient-to-b from-[#FFFBEB] to-[#FFFFFF]">
    <Nav />
    <section >
      <Hero />
    </section>
    <section className="padding-x p-20">
      <ValueProposition />
    </section>
    <section className="bg-secondary border-t  border-b border-[#E2E8F0]">
      <PopularProducts />
    </section>
    <section className="">
      <AboutUs />
    </section>
    <section className="gap-20">
      <Testimonials />
    </section>
    <section className="">
      <CallToAction />
    </section>
    <section className="bg-primary w-full">
      <Collection />
    </section>
    <section className="padding bg-secondary px-20 pb-8">
      <Footer />
    </section>
  </main>
);

export default App;

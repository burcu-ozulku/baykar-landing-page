import { services } from "../assets/constants";
import ServiceCard from "../components/ServiceCard";

const ValueProposition = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-20">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default ValueProposition;

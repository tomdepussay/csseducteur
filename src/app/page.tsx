import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import frameworks from "@/data/frameworks";
import FrameworkCard from "@/components/FrameworkCard";
import WhyChooseFramework from "@/components/WhyChooseFramework";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseFramework />
      <section id="frameworks" className="py-20 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-violet-900 mb-12">
            Découvrez les Frameworks CSS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks
              .filter((framework) => framework.homepage)
              .map((framework, index) => (
                <FrameworkCard key={index} {...framework} />
              ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}

import frameworks from '@/data/frameworks';
import FrameworkCard from '@/components/FrameworkCard';

export default function Frameworks() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">Frameworks</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            frameworks.map((framework, index) => (
              <FrameworkCard key={index} {...framework} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
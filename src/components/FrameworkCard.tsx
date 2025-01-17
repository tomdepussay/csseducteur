import Image from 'next/image';
import Link from 'next/link';
import Framework from '@/models/Framework';

export default function FrameworkCard({ id, name, description, link, features }: Framework) {
  return (
    <Link href={`/frameworks/${link}`} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-48">
        <Image
          src={`/frameworks/${id}.webp`}
          alt={name}
          fill 
          className="object-cover" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-violet-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
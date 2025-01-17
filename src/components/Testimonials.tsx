import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'David Martin',
    role: 'Développeur Frontend',
    content: 'CSSeducteur m\'a aidé à choisir le framework parfait pour mon projet. La comparaison était claire et précise.',
    avatar: '/avatar/1.webp'
  },
  {
    name: 'Thomas Dubois',
    role: 'Designer UI/UX',
    content: 'Un outil indispensable pour tout développeur web moderne. Je le recommande vivement !',
    avatar: '/avatar/3.webp'
  },
  {
    name: 'Julie Lambert',
    role: 'Lead Developer',
    content: 'Grâce à CSSeducteur, notre équipe a pu faire un choix éclairé rapidement et efficacement.',
    avatar: '/avatar/2.webp'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <MessageCircle size={32} className="text-violet-600 mr-3" />
          <h2 className="text-3xl font-bold text-violet-900">Ce qu&#39;ils en pensent</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-violet-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill 
                    className="object-cover rounded-full" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-violet-900">{testimonial.name}</h3>
                  <p className="text-violet-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
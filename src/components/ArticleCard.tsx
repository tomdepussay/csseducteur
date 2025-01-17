import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Article from '@/models/Article';

export default function ArticleCard({ id, title, date, excerpt, link }: Article) {
    return (
        <article key={id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-full h-48 relative">
            <Image 
              src={`/articles/${id}.webp`}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <time>{date}</time>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground mb-4">{excerpt}</p>
            <Link 
              href={`/articles/${link}`}
              className="inline-flex items-center text-primary hover:underline"
            >
              Lire la suite
            </Link>
          </div>
        </article>
    )
}
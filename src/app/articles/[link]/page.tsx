import Image from "next/image";
import articles from "@/data/articles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ link: string }> }): Promise<Metadata> {
  const link = (await params).link;
  const article = articles.find((article) => article.link === link);
  
  if (!article) {
    return {
      title: 'Article non trouvé',
      description: 'L\'article que vous recherchez n\'existe pas.',
    };
  }

  return {
    title: `${article.title} - CSSéducteur`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt
    },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ link: string }>;
}) {
  const link = (await params).link;
  const article = articles.find((article) => article.link === link);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">
            Actualité non trouvée
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 mb-8">
          <Link
            href="/articles"
            passHref
            className="flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="w-6 h-6 text-muted-foreground cursor-pointer" />
            <span className="text-muted-foreground ml-2">
              Retour aux actualités
            </span>
          </Link>
        </div>
        <article className="container mx-auto px-4">
          <div className="mb-8 mx-auto h-60 w-1/2 relative">
            <Image
              src={`/articles/${article.id}.webp`}
              alt={article.title}
              fill
              className="object-cover aspect-video"
            />
          </div>
          <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">
            {article.title}
          </h1>
          <div className="text-muted-foreground text-center mb-8">
            {article.date}
          </div>
          <div
            className="prose max-w-none text-xl flex flex-col justify-start gap-5 "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    );
  }
}

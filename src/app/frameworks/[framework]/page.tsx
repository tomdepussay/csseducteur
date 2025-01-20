import Image from "next/image";
import frameworks from "@/data/frameworks";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ framework: string }> }): Promise<Metadata> {
  const link = (await params).framework;
  const framework = frameworks.find((framework) => framework.link === link);
  
  if (!framework) {
    return {
      title: 'Framework non trouvé',
      description: 'Le framwork que vous recherchez n\'existe pas.',
    };
  }

  return {
    title: `${framework.name} - CSSéducteur`,
    description: framework.description,
    openGraph: {
      title: framework.name,
      description: framework.description
    },
  };
}

export default async function Framework({ params }: { params: Promise<{ framework: string }>}) {
  
  const link = (await params).framework;
  const framework = frameworks.find((framework) => framework.link === link);
  
  if(!framework) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">Framework non trouvé</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 mb-8"> 
          <Link href="/frameworks" passHref className="flex items-center text-primary hover:underline">
            <ArrowLeft className="w-6 h-6 text-muted-foreground cursor-pointer" />
            <span className="text-muted-foreground ml-2">Retour aux frameworks</span>
          </Link>
        </div>
        <article className="container mx-auto px-4">
          <div className="mb-8 mx-auto h-60 w-1/4 relative">
            <Image
              src={`/frameworks/${framework.id}.webp`}
              alt={framework.name}
              fill
              className="object-cover aspect-video"
            />
          </div>
          <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">{framework.name}</h1>
          <div className="prose max-w-none text-xl " dangerouslySetInnerHTML={{ __html: framework.description }} />          
        </article>
      </div>
    );
  }
}
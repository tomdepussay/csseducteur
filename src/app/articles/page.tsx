import ArticleCard from "@/components/ArticleCard";
import articles from "@/data/articles";

export default function Articles() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">Actualités</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
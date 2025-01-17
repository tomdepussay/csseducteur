import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="about" className="bg-gradient-to-b from-violet-900 to-violet-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles size={48} className="mx-auto mb-6 text-violet-300" />
          <h1 className="text-5xl font-bold mb-6">
            Trouvez le Framework CSS Parfait pour Votre Projet
          </h1>
          <p className="text-xl text-violet-200 mb-8">
            CSSeducteur est votre guide expert pour choisir le framework CSS idéal. 
            Comparez les fonctionnalités, explorez les styles et prenez une décision éclairée 
            pour créer des interfaces exceptionnelles.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/frameworks" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Découvrir les Frameworks
            </Link>
            <Link href="/articles" className="bg-violet-100 hover:bg-violet-200 text-violet-900 px-8 py-3 rounded-full font-semibold transition-colors flex items-center">
              Lire nos Articles <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-violet-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Comparaison Détaillée</h3>
              <p className="text-violet-200">Analysez en profondeur les caractéristiques de chaque framework CSS pour faire le meilleur choix.</p>
            </div>
            <div className="bg-violet-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Conseils d&apos;Experts</h3>
              <p className="text-violet-200">Bénéficiez de recommandations basées sur des années d&apos;expérience en développement web.</p>
            </div>
            <div className="bg-violet-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Mises à Jour Régulières</h3>
              <p className="text-violet-200">Restez informé des dernières évolutions des frameworks CSS grâce à nos actualités spécialisées.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
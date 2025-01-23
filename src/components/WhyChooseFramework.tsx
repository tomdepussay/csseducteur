import { CheckCircle } from "lucide-react";

export default function WhyChooseFramework() {
  return (
    <section id="why-framework" className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pourquoi choisir un Framework CSS ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Un <strong>framework CSS</strong> est bien plus qu’un simple outil.
            C’est une solution essentielle pour développer rapidement des
            projets web modernes tout en garantissant une expérience utilisateur
            optimale.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <CheckCircle size={32} className="text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Gagnez du temps</h2>
              <p className="text-gray-700">
                Les frameworks CSS offrent des composants prêts à l’emploi, vous
                permettant de créer rapidement des interfaces modernes et
                élégantes.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <CheckCircle size={32} className="text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-3">
                Des designs responsifs
              </h2>
              <p className="text-gray-700">
                Adaptez vos sites aux différents écrans grâce aux systèmes de
                grilles intégrés comme ceux de Bootstrap ou Tailwind CSS.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <CheckCircle size={32} className="text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-3">Un style uniforme</h2>
              <p className="text-gray-700">
                Maintenez une cohérence visuelle sur toutes vos pages grâce à
                des classes CSS prédéfinies et des styles harmonisés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

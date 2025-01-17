import { Mail, User, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mail size={48} className="text-violet-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-violet-900 mb-4">Contactez-nous</h1>
            <p className="text-lg text-gray-600">
              Vous avez des questions sur les frameworks CSS ? Besoin de conseils pour votre projet ?
              Notre équipe d&apos;experts est là pour vous aider.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Raison du contact
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                >
                  <option value="question">Question générale</option>
                  <option value="conseil">Besoin de conseils</option>
                  <option value="bug">Signaler un problème</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare size={20} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="font-semibold text-violet-900 mb-2">Support Rapide</h3>
              <p className="text-gray-600">Réponse garantie sous 24h ouvrées</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="font-semibold text-violet-900 mb-2">Expertise</h3>
              <p className="text-gray-600">Conseils personnalisés par des experts</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="font-semibold text-violet-900 mb-2">Gratuit</h3>
              <p className="text-gray-600">Service de conseil sans engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
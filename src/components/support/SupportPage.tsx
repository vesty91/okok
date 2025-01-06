import React from 'react';
import { Mail, Phone, MessageSquare, FileQuestion } from 'lucide-react';

const SupportPage = () => {
  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Support Téléphonique",
      description: "Appelez-nous au 07.67.28.23.65",
      availability: "Lun-Ven: 9h-18h"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "restorpc91@gmail.com",
      availability: "Réponse sous 24h"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat en Direct",
      description: "Discussion instantanée avec un expert",
      availability: "24/7"
    },
    {
      icon: <FileQuestion className="w-8 h-8" />,
      title: "FAQ",
      description: "Consultez notre base de connaissances",
      availability: "Accès illimité"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Support Technique</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {supportOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-cyan-600 mb-4">{option.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-2">{option.description}</p>
            <p className="text-sm text-gray-500">{option.availability}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Formulaire de Contact</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nom</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full p-2 border rounded-lg h-32"></textarea>
          </div>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;

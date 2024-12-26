import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-7xl md:text-8xl mb-16 text-center">Kontakt</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Phone className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Telefon</h3>
              <a 
                href="tel:+420605033166" 
                className="text-xl hover:text-gray-600 transition-colors"
              >
                +420 605 033 166
              </a>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Mail className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Email</h3>
              <a 
                href="mailto:petraklimesova21@seznam.cz" 
                className="text-xl hover:text-gray-600 transition-colors"
              >
                petraklimesova21@seznam.cz
              </a>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Adresa</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Na+Věčnosti,+Biskupice+72,+675+57"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-600 transition-colors"
              >
                Na Věčnosti<br />
                Biskupice 72<br />
                675 57
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


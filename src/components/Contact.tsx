import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-12">Kontakt</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <p>Biskupice 72, 675 57, Česká republika</p>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <p>+420 XXX XXX XXX</p>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <p>navecnosti@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


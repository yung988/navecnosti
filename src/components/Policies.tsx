import { Clock, Ban, Info } from 'lucide-react'

export function Policies() {
  const rules = [
    "V tomto ubytování se nemohou konat rozlučky se svobodou a jiné podobné oslavy.",
    "Kouření je zakázáno.",
    "Večírky/akce nejsou povoleny.",
    "Domácí zvířata nejsou povolena."
  ]

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-7xl md:text-8xl mb-16 text-center">Pravidla pobytu</h2>
          
          <div className="grid gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-gray-400" />
                  <h3 className="text-2xl font-serif ml-4">Check-in</h3>
                </div>
                <p className="text-xl">Od 16:00 do 20:00</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-gray-400" />
                  <h3 className="text-2xl font-serif ml-4">Check-out</h3>
                </div>
                <p className="text-xl">Od 7:00 do 10:00</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Info className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-serif ml-4">Důležitá pravidla</h3>
              </div>
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-center">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


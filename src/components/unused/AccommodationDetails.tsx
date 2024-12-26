import { Bed, Users, SquareIcon as SquareFootIcon } from 'lucide-react'

export function AccommodationDetails() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">O ubytování</h2>
      <p className="mb-4">
        Na Věčnosti se může pochlubit výhledem do zahrady. Bazilika svatého Prokopa se nachází přibližně 26 km odtud. V tomto apartmánu budete mít k dispozici bezplatné Wi-Fi a balkon.
      </p>
      <p className="mb-4">
        Tento apartmán má 2 ložnice a kuchyň s lednicí, mikrovlnnou troubou a varnou konvicí. V tomto apartmánu jsou k dispozici ručníky a ložní prádlo.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center">
          <Bed className="w-6 h-6 mr-2" />
          <span>2 ložnice</span>
        </div>
        <div className="flex items-center">
          <Users className="w-6 h-6 mr-2" />
          <span>Pro 4 osoby</span>
        </div>
        <div className="flex items-center">
          <SquareFootIcon className="w-6 h-6 mr-2" />
          <span>59 m²</span>
        </div>
      </div>
    </section>
  )
}


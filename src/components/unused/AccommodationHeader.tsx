import { Star } from 'lucide-react'

export function AccommodationHeader() {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold mb-2">Na Věčnosti</h1>
      <p className="text-xl mb-4">Nabídky v ubytování Na Věčnosti (Apartmán), Biskupice (Česko)</p>
      <div className="flex items-center justify-center">
        <Star className="text-yellow-400 w-6 h-6" />
        <span className="ml-2 text-lg font-semibold">9.1</span>
        <span className="ml-2 text-gray-600">(13 hodnocení)</span>
      </div>
    </header>
  )
}


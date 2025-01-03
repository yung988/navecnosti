import { Star } from 'lucide-react'

interface ReviewsProps {
  data: {
    reviews: {
      overall_rating: number;
      total_count: number;
      categories: Array<{
        name: string;
        score: number;
      }>;
      all_reviews: Array<{
        author: string;
        nationality: string;
        text: string;
      }>;
    };
  };
  className?: string;
}

export function Reviews({ data, className }: ReviewsProps) {
  const categories = data.reviews.categories

  const reviews = data.reviews.all_reviews

  return (
    <section className={`py-32 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-7xl md:text-8xl mb-16 text-center">Hodnocení</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Star className="w-12 h-12 text-yellow-400" />
            <span className="text-6xl font-serif ml-4">9.1</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-lg">
                  <span>{category.name}</span>
                  <span className="font-semibold">{category.score}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-600 rounded-full"
                    style={{ width: `${(category.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg mb-4">{review.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif">{review.author[0]}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-gray-600">{review.nationality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


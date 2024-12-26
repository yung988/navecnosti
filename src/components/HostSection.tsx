import Image from 'next/image'

export function HostSection() {
  return (
    <section id="host" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-7xl md:text-8xl mb-16">Váš hostitel</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-serif mb-6">Petra</h3>
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                Baví mě poznávat nové tváře, seznamovat se s lidmi. Miluji přírodu, procházky po okolí se svojí psicí. Je to francouzský buldoček, má ráda děti. Vyrábím přírodní mýdla a svíčky a nabízím možnost workshopů. Po dohodě i pro ubytované, jak dospělé tak děti.
              </p>
              <div className="space-y-2">
                <p className="text-lg">Jazyky:</p>
                <div className="flex flex-wrap gap-2">
                  {["česky", "německy", "rusky", "slovensky"].map((language, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/optimized/petra.webp"
                alt="Majitelka ubytování Na Věčnosti"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Image from 'next/image'

export function PhotoGallery() {
  const photos = [
    { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557366183.jpg?k=6eb333901e7aa45f6b00deb4a5716f0c50fe7b39139ba61561c737ee2570334e&o=", description: "Balkón nebo terasa v ubytování Na Věčnosti" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max500/557366209.jpg?k=57d74000168039833edd251401105da18761fa3cef6ae8440f3e699ae5ba4314&o=", description: "Příroda nedaleko apartmánu" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max500/557366211.jpg?k=5e10be5247e54eb6dda3698ae055a67a5f7aca6cb466a34b309e274d6205dade&o=", description: "Posezení v ubytování Na Věčnosti" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max300/557366214.jpg?k=ebe86bbd19038432d5653eca345539ca7bb538ccad100432bc0a01108dabf45c&o=", description: "Zahrada ubytování Na Věčnosti" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max300/557366217.jpg?k=bd6079b492ccfca89a55a94f1348a617884bcfeb2c1153754afd1154702db5bb&o=", description: "Koupelna v ubytování Na Věčnosti" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max300/557366220.jpg?k=bee1b22659161e7684604fc7d5cbaddd5f6e1d48f50a001491eff330ed183f12&o=", description: "Kuchyň nebo kuchyňský kout v ubytování Na Věčnosti" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max300/557366221.jpg?k=3a3a89cfe063d200143a21ca3e9cd98899f8a45795650c58051cd9abf041a842&o=", description: "Posezení v ubytování Na Věčnosti" },
    { url: "https://cf.bstatic.com/xdata/images/hotel/max300/557366229.jpg?k=2dc931e8422b8f35226364e8640a11e9488c032f2e42c5144b626e1487bed322&o=", description: "Posezení v ubytování Na Věčnosti" }
  ]

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Fotogalerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src={photo.url}
              alt={photo.description}
              layout="fill"
              objectFit="cover"
              className="hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}


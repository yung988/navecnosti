import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ImageDialogProps {
  selectedImage: string | null
  onClose: () => void
  onNext?: () => void
  onPrevious?: () => void
  hasNext?: boolean
  hasPrevious?: boolean
}

export function ImageDialog({ 
  selectedImage, 
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}: ImageDialogProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    setIsLoading(true)
  }, [selectedImage])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const swipeDistance = touchStart - touchEnd

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0 && onNext && hasNext) {
        onNext()
      }
      if (swipeDistance < 0 && onPrevious && hasPrevious) {
        onPrevious()
      }
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  if (!selectedImage) return null

  return (
    <Dialog open={!!selectedImage} onOpenChange={() => onClose()}>
      <DialogContent 
        className="max-w-7xl bg-black/95 border-none p-0 h-[100vh] max-h-[100vh] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <DialogTitle className="sr-only">Zvětšený obrázek</DialogTitle>
        
        <div className="absolute top-4 right-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="relative w-full h-full flex items-center justify-center p-4">
          {hasPrevious && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className={cn(
                "relative w-full max-w-5xl aspect-[4/3]",
                isLoading && "animate-pulse bg-white/10"
              )}>
                <Image
                  src={selectedImage}
                  alt="Zvětšený pohled"
                  fill
                  quality={100}
                  className="object-contain"
                  onLoadingComplete={() => setIsLoading(false)}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {hasNext && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20"
              onClick={onNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 
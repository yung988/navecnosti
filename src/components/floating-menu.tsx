'use client'

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, ImageIcon, Calendar, X, Menu, Home, Map, Star, Info, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface FloatingMenuProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  showContactInfo: boolean
  setShowContactInfo: (show: boolean) => void
}

const menuVariants = {
  hidden: { 
    opacity: 0,
    x: "100%",
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
      duration: 1.2
    }
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
      duration: 0.8
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      damping: 25,
      stiffness: 200,
      duration: 1.2
    }
  })
}

export function FloatingMenu({ isOpen, setIsOpen, showContactInfo, setShowContactInfo }: FloatingMenuProps) {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const menuItems = [
    { id: 'info', label: 'Informace', icon: Info },
    { id: 'gallery', label: 'Galerie', icon: ImageIcon },
    { id: 'reviews', label: 'Hodnocení', icon: Star },
    { id: 'location', label: 'Lokalita', icon: Map },
    { id: 'booking', label: 'Rezervace', icon: Calendar },
  ]

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:w-[75vw] lg:w-[65vw] border-none p-0 bg-white/95 backdrop-blur-md">
          <motion.div 
            className="flex flex-col h-full p-12 lg:p-16"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex justify-end mb-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-full hover:bg-gray-100"
              >
                <X className="w-7 h-7" />
              </Button>
            </div>

            <div className="flex-1">
              <nav className="space-y-16">
                {menuItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.id}
                      custom={i}
                      variants={itemVariants}
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-8 group transition-all duration-500",
                        activeSection === item.id 
                          ? "text-gray-900" 
                          : "text-gray-400 hover:text-gray-900"
                      )}
                    >
                      <Icon className={cn(
                        "w-10 h-10 transition-transform duration-500 group-hover:scale-110",
                        activeSection === item.id && "scale-110"
                      )} />
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                        {item.label}
                      </span>
                    </motion.a>
                  )
                })}
              </nav>
            </div>

            <motion.div 
              className="pt-16"
              variants={itemVariants}
              custom={menuItems.length}
            >
              <Button 
                variant="outline"
                size="lg"
                className="w-full text-xl py-8 rounded-full hover:scale-[1.02] transition-all duration-500"
                onClick={() => {
                  setShowContactInfo(true)
                  setIsOpen(false)
                }}
              >
                Kontaktovat
              </Button>
            </motion.div>
          </motion.div>
        </SheetContent>
      </Sheet>
    </>
  )
} 
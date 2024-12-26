import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
        <DialogTitle className="text-lg font-medium mb-4">Kontakt</DialogTitle>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-2">
            <GraduationCap className="h-5 w-5 text-stone-600" />
            <span>Bc. Petra Klimešová</span>
          </div>
          <a href="tel:+420605033166" className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-lg transition-colors">
            <Phone className="h-5 w-5 text-stone-600" />
            <span>+420 605 033 166</span>
          </a>
          <a href="mailto:petraklimesova21@seznam.cz" className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-lg transition-colors">
            <Mail className="h-5 w-5 text-stone-600" />
            <span>petraklimesova21@seznam.cz</span>
          </a>
          <div className="flex items-center gap-3 p-2">
            <MapPin className="h-5 w-5 text-stone-600" />
            <span>Biskupice-Pulkov 72, 67557</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
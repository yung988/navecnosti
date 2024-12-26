'use client'

import Image from 'next/image'
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Languages } from "lucide-react"
import { UserIcon } from "@radix-ui/react-icons"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface HostSectionProps {
  data: {
    host: {
      name: string;
      languages: string[];
      about: string;
      description: string;
    };
  };
}

export function HostSection({ data }: HostSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">O hostiteli</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <UserIcon className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{data.host.name}</h3>
                <p className="text-gray-600">
                  Jazyky: {data.host.languages.join(", ")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p>{data.host.about}</p>
              <p>{data.host.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
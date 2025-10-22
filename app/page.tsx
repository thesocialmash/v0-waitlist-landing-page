import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight max-w-[650px]">
              The All-in-One Platform for the Craft Beer Ecosystem.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[650px]">
              Source from local breweries, hire industry talent, and connect with your community—all through a single,
              integrated platform.
            </p>
          </div>

          <WaitlistForm />
        </div>

        {/* Right Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phone%203-t2wItZ3s6k9FvM49aKbpmrex7iFO7U.png"
              alt="The Social Mash app on phone"
              width={600}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-6 text-sm text-gray-500">
        © 2025 The Social Mash. All rights reserved.
      </footer>
    </main>
  )
}

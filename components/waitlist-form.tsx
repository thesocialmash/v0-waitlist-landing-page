"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail("")

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl">
      <div className="relative flex-1">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="pl-10 h-12 bg-white border-gray-200 text-base"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="h-12 px-8 bg-[#001f3f] hover:bg-[#003366] text-white font-semibold rounded-lg transition-colors"
      >
        {isSubmitted ? "Joined!" : isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  )
}

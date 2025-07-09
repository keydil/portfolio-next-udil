"use client"

import { useEffect, useRef } from "react"
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti"

type Props = {
  targetRef: React.RefObject<HTMLElement | null>
}


export function ConfettiLoop({ targetRef }: Props) {
  const confettiRef = useRef<ConfettiRef>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect()
        const x = (rect.left + rect.width / 2) / window.innerWidth
        const y = (rect.top + rect.height / 2) / window.innerHeight

        confettiRef.current?.fire?.({
          origin: { x, y },
          particleCount: 100,
          spread: 80,
          startVelocity: 40,
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [targetRef])

  return (
    <Confetti
      ref={confettiRef}
      className="absolute inset-0 pointer-events-none z-0"
      manualstart
    />
  )
}

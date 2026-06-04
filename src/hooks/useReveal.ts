import { useEffect, useRef, useState, type RefObject } from 'react'

type UseRevealOptions = {
  threshold?: number
  rootMargin?: string
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useReveal<T extends HTMLElement>({
  threshold = 0.18,
  rootMargin = '0px 0px -8% 0px',
}: UseRevealOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, isVisible]
}

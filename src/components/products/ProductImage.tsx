'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  seed: string
  sizes?: string
  className?: string
  priority?: boolean
}

export function ProductImage({
  src,
  alt,
  seed,
  sizes = '(min-width: 1024px) 33vw, 100vw',
  className,
  priority = false,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false)
  const resolvedSrc = failed ? `https://picsum.photos/seed/${seed}/1200/1200` : src

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      preload={priority}
      onError={() => setFailed(true)}
    />
  )
}

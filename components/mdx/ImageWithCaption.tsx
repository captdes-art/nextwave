import Image from 'next/image'

interface ImageWithCaptionProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
  width = 800,
  height = 500,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

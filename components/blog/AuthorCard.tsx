interface AuthorCardProps {
  author: string
  date: string
  readingTime?: string
}

export default function AuthorCard({ author, date, readingTime }: AuthorCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{date}</span>
          {readingTime && (
            <>
              <span>•</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

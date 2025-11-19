import { Technology } from "@/types"

interface TechnologyCardProps {
  technology: Technology
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
      <div className="w-full h-40 bg-gradient-to-br from-teal-100 to-cyan-100 rounded mb-6 flex items-center justify-center">
        <span className="text-5xl">{technology.icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{technology.name}</h3>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">
        {technology.description}
      </p>
      <div className="flex justify-between items-center pt-4 border-t">
        <span className="text-xs font-semibold text-teal-600 uppercase">
          {technology.category}
        </span>
        <a href="#" className="text-teal-600 font-semibold text-sm hover:text-teal-700">
          Learn More →
        </a>
      </div>
    </div>
  )
}

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error'
  children: React.ReactNode
}

export default function Callout({ type = 'info', children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-500 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-900',
    success: 'bg-green-50 border-green-500 text-green-900',
    error: 'bg-red-50 border-red-500 text-red-900',
  }

  const icons = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    error: '❌',
  }

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-lg ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

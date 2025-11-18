import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default HTML elements
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-900">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href as string}
        className="text-teal-600 hover:text-teal-700 underline"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-teal-600 pl-4 py-2 my-4 italic text-gray-700 bg-gray-50">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-teal-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src as string}
        alt={alt as string}
        width={800}
        height={400}
        className="rounded-lg my-6"
      />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold text-gray-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2 text-gray-700">
        {children}
      </td>
    ),
    hr: () => <hr className="my-8 border-gray-200" />,
    ...components,
  }
}

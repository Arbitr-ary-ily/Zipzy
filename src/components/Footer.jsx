export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 flex items-center justify-center border-t bg-gray-100 dark:bg-gray-900 shadow-lg">
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        2024-2025 Copyright &copy;{' '}
        <a 
          href="https://aryan-kumar.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-600 dark:text-red-400 hover:underline"
        >
          Aryan Kumar
        </a>
        . All rights reserved.
      </p>
    </footer>
  )
}

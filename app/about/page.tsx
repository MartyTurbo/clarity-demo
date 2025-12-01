import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About This Project
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                This is a demonstration project for testing Microsoft Clarity integration with Next.js
                and Vercel deployment.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Features
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                <li>Next.js 15 with App Router</li>
                <li>TypeScript for type safety</li>
                <li>Tailwind CSS for styling</li>
                <li>Microsoft Clarity integration with auto-consent</li>
                <li>Multiple test pages for interaction tracking</li>
                <li>Responsive design</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                How Clarity Tracking Works
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Microsoft Clarity automatically tracks:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>User clicks and interactions</li>
                <li>Scroll depth and patterns</li>
                <li>Session recordings</li>
                <li>Heatmaps of user activity</li>
                <li>Rage clicks and dead clicks</li>
              </ul>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Test Interactions Here
            </h2>
            <div className="space-y-4">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Click Me!
              </button>
              <input
                type="text"
                placeholder="Type something to test..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <textarea
                placeholder="Test textarea input..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


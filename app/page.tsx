import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Microsoft Clarity Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Testing Microsoft Clarity Analytics Integration
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About This Demo
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This Next.js application is configured with Microsoft Clarity to track user interactions,
              heatmaps, and session recordings. All tracking is automatically enabled (covered by our TOS).
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Note:</strong> Add your Clarity Project ID to the <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">.env.local</code> file 
                to enable tracking.
              </p>
            </div>
          </div>

          {/* Interactive Elements for Testing */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Interactive Test Elements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Click to Test
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Another Button
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Test Interaction
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Track This Click
              </button>
            </div>
          </div>

          {/* Navigation to Test Pages */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Test Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/about"
                className="block p-6 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-center font-semibold transition-all transform hover:scale-105"
              >
                About Page
              </Link>
              <Link
                href="/contact"
                className="block p-6 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg text-center font-semibold transition-all transform hover:scale-105"
              >
                Contact Page
              </Link>
              <Link
                href="/demo"
                className="block p-6 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg text-center font-semibold transition-all transform hover:scale-105"
              >
                Demo Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

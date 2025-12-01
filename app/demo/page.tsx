'use client'

import Link from "next/link";
import { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
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
              Interactive Demo
            </h1>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              This page contains various interactive elements to test Clarity's tracking capabilities.
            </p>

            {/* Counter */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Click Counter
              </h2>
              <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                {count}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Increment
                </button>
                <button
                  onClick={() => setCount(count - 1)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Decrement
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Modal Trigger */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Modal Test
              </h2>
              <button
                onClick={() => setShowModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Open Modal
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Scroll Test
              </h2>
              <div className="h-64 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Scroll through this content to test Clarity's scroll tracking.
                </p>
                {[...Array(20)].map((_, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 mb-2">
                    Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Modal Window
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This modal tests how Clarity tracks overlay interactions and user engagement
              with popup elements.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


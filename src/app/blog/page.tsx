
export default function BlogComingSoon() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Blog Coming Soon 🚀</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            We’re working hard to bring you awesome content. Stay tuned!
          </p>
          <div className="mt-8">
            <button
              disabled
              className="px-6 py-3 rounded-2xl bg-gray-700 text-gray-400 cursor-not-allowed"
            >
              Stay Notified
            </button>
          </div>
        </div>
      </main>
    )
  }
  
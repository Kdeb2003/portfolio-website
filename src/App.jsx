function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      
      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Kushal Deb
      </h1>

      {/* Role */}
      <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
        AI & Robotics Student | ML Enthusiast
      </h2>

      {/* Description */}
      <p className="max-w-xl text-gray-500 mb-8">
        I build intelligent systems and explore machine learning, deep learning, 
        and real-world AI applications.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          View Projects
        </button>
        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </div>

    </div>
  )
}

export default App
function Home() {
  const [message, setMessage] = useState("Welcome!");

  return (
    <div className="text-center max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Home</h1>

      <p className="mb-4">{message}</p>

      <button
        onClick={() => setMessage("Clicked!")}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-emerald-600 hover:to-teal-700 transition duration-200"
      >
        Click
      </button>

      <div className="mt-6">
        <Card
          title="Abdul Wahab Nadeem"
          text="I enjoy learning new technologies, solving problems through clean and efficient code, and continuously improving my skills through practical experience and personal projects. My goal is to grow into a well-rounded developer who can contribute to innovative teams and build products that make a meaningful difference."
        />
      </div>
    </div>
  );
}
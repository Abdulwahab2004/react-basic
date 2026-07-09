function Card({ title, text }) {
  return (
    <div className="w-80 mx-auto rounded-xl border border-gray-200 bg-green-900 p-6 shadow-md">
      <h2 className="mb-3 text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default Card;
function Card({ title, text }) {
  return (
    <div className="w-80 mx-auto rounded-xl border border-gray-200 bg-emerald-900 p-6 shadow-md">
      <h2 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-white leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default Card;
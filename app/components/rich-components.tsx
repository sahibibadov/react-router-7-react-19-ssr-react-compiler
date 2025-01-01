export default function Rich() {
  console.log("Header", Math.random());
  const richdata = Array.from({ length: 10000 }, (_, i) => i);
  return (
    <div className="p-3 mt-10 border border-gray-200 rounded">
      <h3 className="text-3xl font-bold mb-5">Rich Component</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {richdata.map((i) => (
          <div
            className="flex items-center justify-center text-2xl font-bold border rounded-lg shadow-md aspect-square hover:shadow-lg transition-all duration-300"
            key={i}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

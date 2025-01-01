export default function Rich() {
  console.log("Header", Math.random());
  const richdata = Array.from({ length: 10000 }, (_, i) => i);
  return (
    <div className="p-3 mt-10 border border-gray-200 rounded">
      <h3 className="text-3xl font-bold mb-5">Rich Component</h3>
      <div className="grid grid-cols-4 gap-4">
        {richdata.map((i) => (
          <div
            className="flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg shadow-md aspect-square"
            key={i}
          >
            {i}
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

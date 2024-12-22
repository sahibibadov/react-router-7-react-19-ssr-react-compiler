export default function Rich() {
  console.log("Header", Math.random());
  const richdata = Array.from({ length: 10000 }, (_, i) => i);
  return (
    <div className="p-3 mt-10 border border-gray-400">
      <h3 className="text-3xl font-bold">Rich Component</h3>
      <div className="grid grid-cols-4 gap-3">
        {richdata.map((i) => (
          <div
            className="flex items-center justify-center text-3xl font-bold bg-gray-200 rounded aspect-square"
            key={i}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

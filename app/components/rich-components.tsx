import { Card } from "~/components/ui/card";

export default function Rich() {
  console.log("Header", Math.random());
  const richdata = Array.from({ length: 1000 }, (_, i) => i);
  return (
    <div className="p-6 mt-10 border rounded-lg">
      <h3 className="text-5xl font-bold mb-6 text-center">Rich Component</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {richdata.map((i) => (
          <Card
            className="flex items-center justify-center cursor-pointer hover:scale-105  text-2xl font-bold  aspect-square hover:shadow-lg transition-transform duration-300"
            key={i}
          >
            {i}
          </Card>
        ))}
      </div>
    </div>
  );
}

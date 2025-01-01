interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />;
};

export const PostSkeleton = () => (
  <div className="bg-white border rounded-lg shadow-md p-4">
    <Skeleton className="h-6 w-3/4 mb-2" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
    <div className="mt-4 flex justify-between items-center">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-9 w-24" />
    </div>
  </div>
);

export default function ArticleSkeleton({ length = 6 }: { length?: number }) {
  return (
    <section className="bg-[#1D1B1E] flex px-4 sm:px-[6.4%] justify-center relative">
      <div className="relative flex flex-col mw my-16 gap-10">
        <div className="h-8 w-1/3 bg-gray-700 rounded mb-4 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {Array.from({ length }).map((_, i) => (
            <div className="space-y-5 animate-pulse" key={i}>
              <div className="w-full h-[237px] bg-gray-700 rounded-[14px]" />
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-3 bg-gray-700 rounded" />
                  <div className="size-0.5 bg-gray-700" />
                  <div className="w-16 h-3 bg-gray-700 rounded" />
                  <div className="size-0.5 bg-gray-700" />
                  <div className="w-12 h-3 bg-gray-700 rounded" />
                </div>
                <div className="w-3/4 h-5 bg-gray-700 rounded" />
                <div className="w-full h-4 bg-gray-700 rounded" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-[200px] h-12 mx-auto bg-gray-700 rounded-[15px] animate-pulse" />
      </div>
    </section>
  );
}

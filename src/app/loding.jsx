export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex gap-1">
        <div className="w-2 h-8 bg-green-400 animate-pulse"></div>
        <div className="w-2 h-12 bg-green-400 animate-pulse delay-150"></div>
        <div className="w-2 h-16 bg-green-400 animate-pulse delay-300"></div>
        <div className="w-2 h-12 bg-green-400 animate-pulse delay-150"></div>
        <div className="w-2 h-8 bg-green-400 animate-pulse"></div>
      </div>
    </div>
  );
}
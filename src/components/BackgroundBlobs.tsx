export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-[200px] -left-[150px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400 to-orange-500 blur-[80px] opacity-35 animate-blob-1" />
      <div className="absolute -bottom-[100px] -right-[120px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-400 to-sky-600 blur-[80px] opacity-30 animate-blob-2" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 blur-[80px] opacity-25 animate-blob-3" />
    </div>
  );
}

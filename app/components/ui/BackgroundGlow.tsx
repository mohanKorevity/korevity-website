export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-20 right-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[130px]" />
    </>
  );
}
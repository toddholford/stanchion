// components/Background.tsx
export const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
    {/* Orb 1 — purple, top-left */}
    <div className="orb-one absolute top-[15%] left-[10%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
    {/* Orb 2 — cyan, bottom-right */}
    <div className="orb-two absolute bottom-[10%] right-[10%] h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-amber-400/5 blur-[90px]" />
    {/* Orb 3 — pink, center */}
    <div className="orb-three absolute top-[50%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[80px]" />
    {/* Noise grain */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150" />
  </div>
);
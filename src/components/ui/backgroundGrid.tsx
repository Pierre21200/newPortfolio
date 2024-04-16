export function BackgroundGrid({children}) {
    return (
      <div className="h-[50rem] w-full bg-transparent bg-grid-white/[0.2] relative flex items-center justify-center shadow-[0px_0px_5px_rgba(255,255,255,0.5)]  ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)]"></div>

        <div className="text-4xl w-full sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex justify-center">
          {children}
        </div>
      </div>
    );
  }
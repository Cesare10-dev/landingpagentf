export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-8">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway yo productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            asperiores iste odit assumenda non magnam ab voluptatem, aspernatur
            sed earum?
          </p>
          <div className="flex items-center gap-1 mt-[30px]">
            <button>Get for free</button>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

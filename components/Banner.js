export default function Banner() {
  return (
    <div className="relative h-[90vh]">
      <img
        src="/images/bannerimg.jpg"
        alt="text"
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full sm:text-center px-4">
        <h1 className="text-4xl md:text-5xl text-slate-50">
          Welcome to <br />
          <span className="uppercase text-green-500">ps it institute</span>
        </h1>
        <p className="text-lg text-slate-50 capitalize mt-4">
          We are ps it institute. We provide 100% good training with freelance sessions.
        </p>
      </div>
    </div>
  );
}

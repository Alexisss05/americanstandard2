export default function Index() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl text-center">
        <h1 className="text-white text-6xl font-black mb-4 tracking-tighter">
          AMERICAN STANDARD
        </h1>
        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
        <p className="text-slate-300 text-xl mb-8">
          Sistemas configurados correctamente.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all transform hover:scale-105">
          ¡ESTÁ VIVO!
        </button>
      </div>
    </div>
  );
}
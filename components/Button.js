export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-10 py-3 bg-slate-500 hover:bg-slate-800 text-slate-50 uppercase duration-300"
    >
      {label}
    </button>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-4xl font-bold">Payment received ✅</h1>
        <p className="mt-3 text-zinc-300">Your deployment is in progress. We’ll connect your assistant shortly.</p>
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-lg font-semibold">Next steps</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>Connect your Telegram or other channel</li>
            <li>Choose a model</li>
            <li>Confirm your assistant is online</li>
          </ol>
        </div>
      </div>
    </main>
  );
}

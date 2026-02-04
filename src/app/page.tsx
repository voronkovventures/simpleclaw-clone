import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">Deploy OpenClaw under 1 minute</h1>
        <p className="mt-4 text-lg text-zinc-300">
          Skip SSH, VPS setup, and config. Click, pay, and go live.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/deploy" className="rounded-lg bg-white px-6 py-3 font-semibold text-black">
            Deploy now
          </Link>
          <button className="rounded-lg border border-zinc-700 px-6 py-3 text-zinc-300">
            See how it works
          </button>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">Traditional method</h2>
            <p className="mt-2 text-zinc-400">SSH, VM, Node, OpenClaw setup — 30+ minutes.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">SimpleClaw</h2>
            <p className="mt-2 text-zinc-400">One click, pay, deploy — under 1 minute.</p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">One assistant, thousands of use cases</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-zinc-300">
            <div>Email summaries</div>
            <div>Calendar scheduling</div>
            <div>Reminders & alerts</div>
            <div>Research & reports</div>
            <div>Recruiting support</div>
            <div>Customer support</div>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";
import { useState } from "react";

export default function DeployPage() {
  const [amount, setAmount] = useState("10");
  const [payUrl, setPayUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const createInvoice = async () => {
    setLoading(true);
    const res = await fetch("/api/solana-pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    setPayUrl(data.url || null);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Deploy in under 1 minute</h1>
        <p className="mt-3 text-zinc-300">Pay with USDC on Solana. No QR, just click to pay.</p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <label className="text-sm text-zinc-400">Amount (USDC)</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-2 w-full rounded-lg border border-zinc-800 bg-black px-4 py-2 text-white"
          />

          <button
            onClick={createInvoice}
            className="mt-6 w-full rounded-lg bg-white px-4 py-3 font-semibold text-black"
            disabled={loading}
          >
            {loading ? "Creating payment..." : "Pay with Wallet"}
          </button>

          {payUrl && (
            <div className="mt-6">
              <p className="text-sm text-zinc-400">Payment link:</p>
              <a className="break-all text-blue-400" href={payUrl}>
                {payUrl}
              </a>
              <p className="mt-2 text-xs text-zinc-500">After payment, you will be redirected to /success.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { encodeURL, findReference } from "@solana/pay";
import { PublicKey } from "@solana/web3.js";

// ENV required: SOLANA_PAY_RECIPIENT, SOLANA_PAY_LABEL, SOLANA_PAY_MESSAGE, SOLANA_PAY_USDC_MINT

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  const recipient = process.env.SOLANA_PAY_RECIPIENT;
  const usdcMint = process.env.SOLANA_PAY_USDC_MINT; // USDC on Solana
  if (!recipient || !usdcMint) {
    return NextResponse.json({ error: "Missing env config" }, { status: 500 });
  }

  const reference = new PublicKey(process.env.SOLANA_PAY_REFERENCE || PublicKey.unique().toBase58());
  const url = encodeURL({
    recipient: new PublicKey(recipient),
    amount: Number(amount || 10),
    splToken: new PublicKey(usdcMint),
    reference,
    label: process.env.SOLANA_PAY_LABEL || "SimpleClaw",
    message: process.env.SOLANA_PAY_MESSAGE || "Deploy OpenClaw",
  });

  return NextResponse.json({ url: url.toString(), reference: reference.toBase58() });
}

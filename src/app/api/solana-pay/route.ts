import { NextRequest, NextResponse } from "next/server";
import { encodeURL } from "@solana/pay";
import BigNumber from "bignumber.js";
import { PublicKey, Keypair } from "@solana/web3.js";

export const runtime = "nodejs";

// ENV required: SOLANA_PAY_RECIPIENT, SOLANA_PAY_LABEL, SOLANA_PAY_MESSAGE, SOLANA_PAY_USDC_MINT

export async function POST(req: NextRequest) {
  const body = await req.json();
  const amountRaw = body?.amount;
  const recipient = process.env.SOLANA_PAY_RECIPIENT;
  const usdcMint = process.env.SOLANA_PAY_USDC_MINT; // USDC on Solana
  if (!recipient || !usdcMint) {
    return NextResponse.json({ error: "Missing env config" }, { status: 500 });
  }

  const reference = new PublicKey(
    process.env.SOLANA_PAY_REFERENCE || Keypair.generate().publicKey
  );
  const amount = new BigNumber(amountRaw ?? 10);

  const url = encodeURL({
    recipient: new PublicKey(recipient),
    amount,
    splToken: new PublicKey(usdcMint),
    reference,
    label: process.env.SOLANA_PAY_LABEL || "SimpleClaw",
    message: process.env.SOLANA_PAY_MESSAGE || "Deploy OpenClaw",
  });

  return NextResponse.json({ url: url.toString(), reference: reference.toBase58() });
}

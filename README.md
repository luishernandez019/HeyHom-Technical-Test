This is a [`Next.js`](https://nextjs.org/) project developed with [`Shadcn`](https://ui.shadcn.com/) library for the UI.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
[yarn|pnpm|bun] dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implement the Mortgage Calculator component
```bash
import MortgageCalculator from "@/components/mortgage-calculator";

export default function Home() {
  return (
    <MortgageCalculator />
  )
}
```
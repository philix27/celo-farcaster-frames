# V2 Farcaster Wordle Game  | Cryptodle

This is a Wordle game for V2 Farcaster frames. This shows how to get up and running with a simple worlde game with farcaster.

## Setup & Installation

### Set environment variables

Create a copy of `.env.example` and rename it to `.env`.

#### Add Wallet Connect ID

Create a WalletConnect Cloud Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

Provide the WalletConnect Cloud Project ID in your `.env` file to use WalletConnect in your project. As shown in the `.env.example` file.

```typescript
TS_PUBLIC_PROJECT_ID=YOUR_EXAMPLE_PROJECT_ID;
```


### Install dependencies

Install all the required dependencies to run the dApp.

Using **yarn**

```bash
yarn
```

or using **npm**

```bash
npm i
```

> Next.js + Tailwind CSS Template does not have any dependency on hardhat.
> This starterkit does not include connection of Hardhat/Truffle with Next.js. It's up to the user to integrate smart contract with Next.js. This gives user more flexibility over the dApp.

- To start the dApp, run the following command.

```bash
yarn dev
```

## UI Components

To add a component from the shadcn library run:

```bash
npx shadcn@latest add <component-name>
```

The component will be added to the `src/libs/components/ui` dir


## Dependencies

- Next.js app framework
- [TailwindCSS](https://tailwindcss.com/) for styling
- [UI Components](https://ui.shadcn.com/) - Shadcn  
- [Wagmi](https://wagmi.sh/) for onchain transactions

```

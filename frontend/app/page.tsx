import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-4xl">Welcome to Persons DB!</h1>
      <p>Please choose from these options:</p>
      <ul>
        <li>
          <Link href="/list">List persons</Link>
        </li>
        <li>
          <Link href="/new">New person</Link>
        </li>
        <li>
          <Link href="/depersonalize">Depersonalize</Link>
        </li>
      </ul>
    </main>
  );
}

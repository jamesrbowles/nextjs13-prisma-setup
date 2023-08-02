import { prisma } from '@/lib/prisma';
/* import ListUsers from './components/ListUsers'; */
import Link from 'next/link';

async function getListings() {
  const response = await prisma.listings.findMany();
  return response;
}

export default async function Home() {
  const listings = await getListings();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*       <ListUsers /> */}
      {listings.map((listing) => (
        <div
          key={listing.ID}
          style={{ border: '1px solid #ccc', textAlign: 'center' }}
        >
          <h3>{listing.Title}</h3>
          <p>{listing.Description}</p>
          <Link
            href={`/property/${listing.ID}`}
            className="text-green-700"
          >
            link
          </Link>
        </div>
      ))}
    </main>
  );
}

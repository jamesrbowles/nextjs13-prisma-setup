/* 'use client';

import { User } from '@prisma/client';
import React, { cache, use } from 'react';

const getListings = cache(() =>
  fetch('/api/listings').then((res) => res.json())
);

export default function ListUsers() {
  let listings = use<User[]>(getListings());

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 20,
      }}
    >
      {listings.map((listing) => (
        <div
          key={listing.ID}
          style={{ border: '1px solid #ccc', textAlign: 'center' }}
        >
          <h3>{listing.Title}</h3>
          <p>{listing.Description}</p>
        </div>
      ))}
    </div>
  );
}
 */

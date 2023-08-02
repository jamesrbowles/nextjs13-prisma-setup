import { prisma } from '@/lib/prisma';

async function getPropertyData(id: number) {
  const response = await prisma.listings.findUnique({
    where: {
      ID: id,
    },
  });
  return response;
}

export default async function page({ params }: { params: { slug: string } }) {
  const slugAsNumber = parseInt(params.slug, 10); // Use parseInt to convert the slug to an integer

  const property = await getPropertyData(slugAsNumber);
  console.log(property);
  return <div>{property?.Title}</div>;
}

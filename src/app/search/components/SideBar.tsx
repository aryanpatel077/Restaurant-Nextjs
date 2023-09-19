import { Location, PRICE, Region } from "@prisma/client";
import Link from "next/link";

function SideBar({
  locations,
  regions,
  searchParams,
}: {
  locations: Location[];
  regions: Region[];
  searchParams: { city?: string; region?: string; price?: PRICE };
}) {
  const price = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg text-center font-light rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className:
        "border-r border-t border-b text-center w-full text-reg font-light p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className:
        "border-r border-t border-b text-center w-full text-reg font-light p-2 rounded-r",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Location</h1>
        <div className="flex flex-col">
          {locations.map((location: Location) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
              className="font-light text-reg capitalize"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Region</h1>
        <div className="flex flex-col">
          {regions.map((region: Region) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  region: region.name,
                },
              }}
              className="font-light text-reg capitalize"
            >
              {region.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {price.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

import Image from "next/image";
import { Cat } from "./types";

export function CatsList({ cats }: { cats: Cat[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {cats.map((cat) => (
        <li key={cat.url} className="relative">
          <div className="group block h-48 w-60 overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              fill
              src={cat.url}
              alt={cat.breeds[0].name}
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">
                View details for {cat.breeds[0].name}
              </span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {cat.breeds[0].name}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {cat.breeds[0].origin}
          </p>
        </li>
      ))}
    </ul>
  );
}

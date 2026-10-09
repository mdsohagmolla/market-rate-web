import { Ifilter } from '@/app/page';
import Link from 'next/link';
import React from 'react';

const AllProductCard = ({ item }: { item: Ifilter }) => {
  return (
    <div className="mx-2 min-w-0">
      <Link href={`/details/${item.id}`}>
      <div className="w-full min-w-0 rounded-2xl border border-[#dfe8df] bg-[#f9fcf9] p-3.5 hover:scale-105 transition-transform duration-300">

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#edf3ed] text-2xl">
            {item.image}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="break-words font-semibold text-[#25352a]">
              {item.nameBn}
            </h3>

            <p className="text-xs text-gray-500">
              প্রতি {item.unit === "kg" ? "কেজি" : item.unit}
            </p>
          </div>
        </div>

        <div className="mt-3 flex min-w-0 items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs text-gray-500">
              আজকের দাম
            </p>

            <p className="mt-0.5 text-base font-bold text-[#25352a]">
              ৳{item.today}{" "}
              <span className="text-sm font-normal">টাকা</span>
            </p>
          </div>

          <span className="shrink-0 rounded-full px-2 py-1 text-xs font-semibold">
            {item.change.dir === "up" ? (
              <span className="text-red-500">▲</span>
            ) : (
              <span className="text-green-500">▼</span>
            )}{" "}
            {item.change.pct}%
          </span>

        </div>
        
      </div>
      </Link>
    </div>
  );
};

export default AllProductCard;
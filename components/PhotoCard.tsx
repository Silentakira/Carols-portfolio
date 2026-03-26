'use client';

import Link from 'next/link';

interface PhotoCardProps {
  title: string;
  href: string;
  itemClass: string;
}

export default function PhotoCard({ title, href, itemClass }: PhotoCardProps) {
  return (
    <div className={`grid-item ${itemClass}`}>
      <Link href={href} className="block w-full h-full">
        <div className="card hover-target">
          <div className="card-img"></div>
          <div className="card-overlay">
            <h3 className="series-title">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

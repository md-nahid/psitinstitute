import ActiveLink from './ActiveLink';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Topnav() {
  return (
    <div className="flex justify-between items-center px-5 md:px-10 bg-navBg border-b border-slate-400">
      <div className="flex justify-end items-center">
        <Link href="/">
          <a>
            <Image src="/images/logo.jpg" width={100} height={60} />
          </a>
        </Link>
      </div>
      <div className="hidden md:block h-full">
        <ul className="flex items-center uppercase font-normal font-inter">
          {topNavData.map((nav) => (
            <li key={nav.label} className="mx-3 h-full py-7 group">
              <ActiveLink href={nav.value} label={nav.label} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end items-center text-xl font-normal text-navText">
        <button>
          <Icon icon="fa:user-circle-o" />
        </button>
      </div>
    </div>
  );
}

const topNavData = [
  {
    label: 'home',
    value: '/',
  },
  {
    label: 'courses',
    value: '/courses',
  },
  {
    label: 'contact us',
    value: '/contact',
  },
];

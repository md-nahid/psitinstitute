import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Container from './Container';

export default function Footer() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl m-auto gap-5 px-5 py-10">
        <div>
          <Link href="/">
            <a className="text-3xl font-bold">
              <Image src="/images/logo.jpg" width={100} height={60} />
            </a>
          </Link>
          <div className="flex text-slate-600 text-sm mt-5">
            <span className="mt-1 text-xl">
              <Icon icon="bytesize:location" />
            </span>
            <h4 className="ml-2">Allardorga 7042, Doulatpur, Kushtia</h4>
          </div>
          <div className="flex items-center text-slate-600 text-sm mt-2">
            <span className="text-xl">
              <Icon icon="ant-design:mail-outlined" />
            </span>
            <h4 className="ml-2">bakor6229@gmail.com</h4>
          </div>
          <div className="flex text-slate-600 text-sm mt-2">
            <span className="text-xl">
              <Icon icon="fluent:call-32-regular" />
            </span>
            <div>
              <h4 className="ml-2">+880 1700-944594</h4>
              <h4 className="ml-2">+880 1838-666338</h4>
            </div>
          </div>
          <div className="flex items-center text-slate-700 text-4xl mt-5">
            <a href="https://facebook.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:facebook-with-circle" />
            </a>
            <a href="https://twitter.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:twitter-with-circle" />
            </a>
            <a href="https://instagram.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:instagram-with-circle" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 text-lg font-semibold">Informations</h4>
          <div className="flex flex-col mt-5 text-xs">
            <Link href="/">
              <a className="mb-3 hover:font-semibold">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="mb-3 hover:font-semibold">Terms & Conditions</a>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 text-lg font-semibold">We Accept</h4>
          <div className="flex mt-5 text-xl text-slate-500">
            <p className="mr-3 w-20 hover:scale-125 duration-300" title="bkash pay">
              <Image src="/images/bkash.svg" width={100} height={100} />
            </p>
            <p className="w-20 hover:scale-125 duration-300" title="nagad pay">
              <Image src="/images/nagad.png" width={100} height={60} />
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-slate-500 text-sm px-5 max-w-7xl m-auto">
        <span>&copy;</span> Copyright 2022 <span className="text-red-500">PS ABU BAKOR</span>
      </div>
    </Container>
  );
}

"use client"; 
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavItem {
  href: string;
  name: string;
}

const Link_data: NavItem[] = [
    {"href":"/tire","name":"SHOP"},
    {"href":"/board","name":"COMMUNITY"},
    {"href":"/login","name":"LOGIN"},
]

// todo : navbar css수정 
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='pb-20'>
      <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" className="text-2xl font-bold text-stone-600 hover:text-stone-800">
                TIRE
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <Image 
                    src="/icon/hamburger.svg"
                    width={30} 
                    height={30} 
                    alt="Menu" 
                    className={`${isOpen ? 'rotate-90' : ''} transition-transform duration-200`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex space-y-4 md:space-y-0">
                {Link_data.map((item, index) => (
                  <li 
                    key={index} 
                    className="pb-4 text-l text-stone-600 py-4 md:px-4 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent transition-colors duration-200"
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setIsOpen(false)}
                      className="block w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


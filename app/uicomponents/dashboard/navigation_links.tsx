'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'login', href:'/login',},
    { name: 'Home', href: '/dashboard' },

    { name: 'Appointment', href: '/dashboard/Appointment', },

    { name: 'client', href: '/dashboard/Client', },

    { name: 'contact', href: '/dashboard/Contact', },

    { name: 'employee', href: '/dashboard/Employee' ,},

    { name: 'payment', href: '/dashboard/Payment', },

    { name: 'Sales', href:'/dashboard/Sales', },

    { name: 'schedule', href:'/dashboard/Schedule', },

    
    
  ];

  
export default function Navigation_links() {
  
  const pathname = usePathname();
  return (
    <>
        {links.map((link) => {
         
          return(
        
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-pink-50 p-3 text-xl font-xl hover:bg-pink-100 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
              'bg-pink-100 text-gray-600': pathname === link.href,
              },
            )}>
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
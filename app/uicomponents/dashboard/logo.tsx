import Image from 'next/image';

export default function Logo() {
  return (
    <div className=" flex flex-row items-center leading-none text-white"> 
     <Image
    src="/logo.jpeg"
    width={110}
    height={110}
    className="hidden md:block"
    alt="image for logo"
  />
    </div>
  );
}

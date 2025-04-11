import Image from 'next/image';
import React from 'react';
import LogoImage from '@/assets/images/logo.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="./">
      <Image src={LogoImage} alt="Logo" />
    </Link>
  );
};

export default Logo;

import { PropsWithChildren } from 'react';

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <div>
      Footer
      {children}
    </div>
  );
};

export default Footer;

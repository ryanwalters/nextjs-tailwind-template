import '../styles/globals.css';
import { FC, ReactNode } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
};

export default RootLayout;

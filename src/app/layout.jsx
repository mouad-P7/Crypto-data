import '../globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from '@redux/ReduxProvider';
import AppLayout from "@ui/layouts/app/AppLayout";


const inter = Inter({ subsets: ['latin'] });


// export const metadata = {
//   title: 'Crypto Data',
//   description: 'Coin market cap clone.',
// };


export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en" className="relative m-0 p-0 font-inter max-w-full max-h-full text-center text-black box-border transition duration-300 ease-linear text-base md:text-sm">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Coin market cap clone." />
          <title>Crypto Data</title>
        </head>
        <body className={`w-screen min-h-screen bg-white ${inter.className}`}>
          <AppLayout />
          <main className="p-[15px]">{children}</main>  
        </body>
      </html>
    </ReduxProvider>
  );
};

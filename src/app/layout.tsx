import './globals.css';
import localFont from 'next/font/local';

export const PoppinsLight = localFont({
  src: '../assets/fonts/poppins-v12-latin-300.woff2',
  display: 'swap',
  variable: '--font-poppins-300',
  weight: '300',
});

export const PoppinsRegular = localFont({
  src: '../assets/fonts/poppins-v12-latin-regular.woff2',
  display: 'swap',
  variable: '--font-poppins-400',
  weight: '400',
});

export const PoppinsSemibold = localFont({
  src: '../assets/fonts/poppins-v12-latin-600.woff2',
  display: 'swap',
  variable: '--font-poppins-600',
  weight: '600',
});

// TODO: Get fonts from next/fonts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={PoppinsRegular.variable}>
      <body>{children}</body>
    </html>
  );
}

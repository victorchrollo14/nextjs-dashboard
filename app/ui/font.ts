import { Montserrat } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: 'normal',
});

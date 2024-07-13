import { Open_Sans, Bona_Nova, Nunito_Sans } from "next/font/google";

export const openSans = Open_Sans({ subsets: ["latin"] });

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

export const bonaNova = Bona_Nova({
  subsets: ["latin"],
  weight: ["400", "700"],
});

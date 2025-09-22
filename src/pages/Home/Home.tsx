// import type { Film } from "@/types";
import { filmsData } from "@/services";

export async function Home({ films_data }: any) {
  const data = await filmsData();
  console.log("🚀 ~ Home ~ data:", data);
  console.log("films: ", films_data);
  return <h1>This is your home, friend!</h1>;
}

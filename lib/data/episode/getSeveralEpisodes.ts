import { Episode } from "@/lib/types";

export default async function getSeveralEpisodes(
  ids: string[]
): Promise<Episode[] | Episode> {
  try {
    console.log(ids);
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/episode/${ids}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch episodes");
  }
}

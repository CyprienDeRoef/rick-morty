import { Episode } from "@/lib/types";

export default async function getSpecificEpisode(id: string): Promise<Episode> {
  try {
    const res: Response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch episode");
  }
}

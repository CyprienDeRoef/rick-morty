/**
 * Represent the character object from the Rick and Morty API.
 * @see https://rickandmortyapi.com/documentation/#character-schema
 */
export type Character = {
  /** The id of the character. */
  id: number;
  /** The name of the character. */
  name: string;
  /** The status of the character ("Alive", "Dead", or "unknown"). */
  status: "Alive" | "Dead" | "unknown";
  /** The species of the character. */
  species: string;
  /** The type of the character. */
  type: string;
  /** The gender of the character ("Female", "Male", "Genderless", or "unknown"). */
  gender: "Female" | "Male" | "Genderless" | "unknown";
  /** Name and link to the character's origin location. */
  origin: LocationRef;
  /** Name and link to the character's last known location endpoint. */
  location: LocationRef;
  /** Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */
  image: string;
  /** Episodes in which the character appeared. */
  episode: string[];
  /** Link to the character's own URL endpoint. */
  url: string;
  /** Time at which the character was created in the database. */
  created: string;
};

/**
 * References a location by name and URL.
 */
export type LocationRef = {
  /** The name of the location. */
  name: string;
  /** Link to the location's own URL endpoint. */
  url: string;
};

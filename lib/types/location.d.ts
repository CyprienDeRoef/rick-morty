/**
 * Represents a location from the Rick and Morty API.
 */
export type Location = {
  /** The id of the location. */
  id: number;
  /** The name of the location. */
  name: string;
  /** The type of the location. */
  type: string;
  /** The dimension in which the location is located. */
  dimension: string;
  /** List of character who have been last seen in the location. */
  residents: string[];
  /** Link to the location's own URL endpoint. */
  url: string;
  /** Time at which the location was created in the database. */
  created: string;
};

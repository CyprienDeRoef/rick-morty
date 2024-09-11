/**
 * Represents a paginated response from the Rick and Morty API.
 * @see https://rickandmortyapi.com/documentation/#info-and-pagination
 */
export type Paging<T> = {
  /** The paging informations about the response. */
  info: PaginationInfo;
  /** The results from the response. */
  results: T[];
};

/**
 * Represents the informations about the pagination of a response from the Rick and Morty API.
 */
export type PaginationInfo = {
  /** The number of items in a page. */
  count: number;
  /** The number of pages. */
  pages: number;
  /** The URL to the next page. */
  next: string | null;
  /** The URL to the previous page. */
  prev: string | null;
};

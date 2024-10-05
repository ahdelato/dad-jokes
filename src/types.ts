export interface SearchParams{
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    limit: number;
    term: string;
}
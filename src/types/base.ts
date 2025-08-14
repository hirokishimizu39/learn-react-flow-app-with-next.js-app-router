export type Base = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Meta = {
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number;
  totalCount: number;
};

export type IndexResponse<T> = {
  data: T[];
  meta: Meta | undefined;
};

export type cacheOptions = {
  cache?: "no-store" | "force-cache";
  next?: {
    revalidate?: number | false;
  };
};

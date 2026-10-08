export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  deadline: string;
  postedAt: string;
  description: string;
  requirements: string[];
}

export interface OpportunityQuery {
  search?: string;
  type?: string;
  location?: string;
  sort?: "newest" | "deadline" | "title";
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

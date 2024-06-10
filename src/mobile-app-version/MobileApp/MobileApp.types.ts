export interface VersionParams {
  search?: string;
  sort?: string;
  order?: string;
  page?: string;
  size?: string;
}

export interface VersionModel {
  id: number;
  version: string;
  platform: string;
  type: string;
}

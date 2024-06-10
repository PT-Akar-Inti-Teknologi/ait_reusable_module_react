export interface VersionParams {
  search?: string;
  sort?: string;
  order?: string;
  page?: string;
  size?: string;
}
export interface VersionModel {
  id: number | null;
  version: string;
  platform: string;
  type: string;
}

export interface VersionPayload {
  appVersions: VersionModel[];
}

export interface VersionDetailParam {
  version: string;
  platform: string;
}

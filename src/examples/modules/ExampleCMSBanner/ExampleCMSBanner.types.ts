export interface ExampleCMSBannerParams {
    search?: string;
    sort?: string;
    order?: string;
    page?: string;
    size?: string;
}

export interface ExampleCMSBannerModel {
    id: string;
    title: string;
    description: string;
    image_file: string;
    thumbnail_file: string;
    deeplink: string;
    index: string | number;
    is_active: boolean | string;
    created_at: string;
    updated_at: string;
}

export interface reorderCMSBannerPayload {
    id: string;
    index: string;
}
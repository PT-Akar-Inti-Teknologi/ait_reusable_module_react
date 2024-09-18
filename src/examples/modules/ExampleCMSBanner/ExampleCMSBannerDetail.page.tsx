import {
    Button,
    Content,
    ContentAction,
    ContentHeader,
    LabelItem,
    Thumbnail
} from "ait-reusable-component-react";
import {
    QueryState
} from "ait-reusable-component-react/react-query";
import {
    Wrapper
} from "src/examples/components";
import {
    useExampleCMSBannerDetailHook
} from "./ExampleCMSBannerDetail.hooks";
import {
    formatDate
} from "./ExampleCMSBannerDetail.utils";

export function ExampleCMSBannerDetailPage() {

    const {
        banner
    } = useExampleCMSBannerDetailHook();

    return (
        <Wrapper>
            <Content>
                <ContentHeader title="Detail Banner" />
                <QueryState query={banner}>
                    <div className="px-8">
                        <LabelItem label="ID" value={banner.data?.id} />
                        <LabelItem label="Title" value={banner.data?.title} />
                        <LabelItem label="Description" value={banner.data?.description} />
                        <LabelItem label="Index" value={banner.data?.index.toString()} />
                        <LabelItem label="Deeplink" value={banner.data?.deeplink} />
                        <LabelItem
                            label="Image File"
                            renderValue={(_) => <Thumbnail src={_} alt={banner.data?.title} />}
                            value={banner.data?.image_file}
                        />
                        <LabelItem
                            label="Thumbnail File"
                            renderValue={(_) => <Thumbnail src={_} alt={banner.data?.title} />}
                            value={banner.data?.thumbnail_file}
                        />
                        <LabelItem
                            label="Created At"
                            renderValue={formatDate}
                            value={banner.data?.created_at}
                        />
                        <LabelItem
                            label="Updated At"
                            renderValue={formatDate}
                            value={banner.data?.updated_at}
                        />
                        <LabelItem
                            label="Status"
                            renderValue={(_) => _ === "true" ? <span className="px-2 py-1 text-white bg-green-500 rounded">Active</span> : <span className="px-2 py-1 text-white bg-red-500 rounded">Inactive</span>}
                            className="border-0"
                            value={banner.data?.is_active.toString()}
                        />
                    </div>
                </QueryState>
                <ContentAction>
                    <Button>Back</Button>
                </ContentAction>
            </Content>
        </Wrapper>
    );
}

import {
    Wrapper
} from "src/examples/components";
import {
    Button,
    Content,
    ContentAction,
    ContentHeader, Label,
} from "~/components";
import { useExampleCMSBannerHook } from "./ExampleCMSBanner.hooks";

export function ExampleCMSBannerDetailPage() {
    const state = useExampleCMSBannerHook();
    function formatterLabel(value: string) {
        return value
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    function formatDate(isoString: string): string {
        const date = new Date(isoString);

        const year = date.getFullYear();
        // getMonth() returns 0-11; adding 1 to match the human-readable format and padStart to add leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');

        // Example format: "2024-06-11"
        return `${year}/${month}/${day}  ${hour}:${minute}`;
    }

    function renderLabel(key: string, value: any) {
        if (key === 'image_file' || key === 'thumbnail_file') {
            return <img src={value} alt="image" className="w-2/3 aspect-video"/>;
        } else if (key === 'created_at' || key === 'updated_at') {
            return <Label className="col-span-2">{formatDate(value)}</Label>;
        } else if (key === 'is_active') {
            return <Label className="col-span-2">
                {value ? (
                    <span className="px-2 py-1 text-white bg-green-500 rounded">Active</span>
                ) : (
                    <span className="px-2 py-1 text-white bg-red-500 rounded">Inactive</span>
                )}
            </Label>;
        } else {
            return <Label className="col-span-2">{value}</Label>;
        }
    }

    return (
        <Wrapper>
            <Content>
                <ContentHeader title="Detail Banner"/>
                <div className="px-6">
                    {/* loop the label item */}
                    {Object.entries(state.state.detail).map(([key, value]) => (
                        <div className="grid grid-cols-3 my-2">
                            <Label>{key === 'is_active' ? "Status" : formatterLabel(key)}</Label>
                            {renderLabel(key, value)}
                        </div>
                    ))}
                </div>
                <ContentAction>
                    <Button></Button>
                    {/*<Button to={"../edit/"+platform+"/"+version}>Edit</Button>*/}
                </ContentAction>
            </Content>
        </Wrapper>
    );
}

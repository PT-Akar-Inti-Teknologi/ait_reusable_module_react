import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ActionButton, Button,
    Content,
    ContentBody,
    ContentHeader,
    DraggableTable,
    DraggableTableBody,
    DraggableTableRow,
    HandleDragRow,
    RenderTableRowParams,
    TableCell,
    TableHead,
    TableRow,
    ToggleDarkMode
} from "~/components";
import ModalComponent from "~/components/Modal/Modal.page.tsx";
import {
    InputSearchParams, PagingParams
} from "~/components/query-params";
import {
    QueryState,
} from "~/components/react-query";
import { ResponseList } from "~/models";
import {
    Wrapper
} from "../../components";
import {
    useExampleCMSBannerHook
} from "./ExampleCMSBanner.hooks";
import {
    ExampleCMSBannerModel
} from "./ExampleCMSBanner.types";

export function ExampleCMSBanner() {

    const state = useExampleCMSBannerHook();

    const confirmDelete = (id: string) => {
        state.action.setDeleteId(id);
        state.action.setIsModalOpen(true);
    };

    const renderTableItem = ({item, key}: RenderTableRowParams<ExampleCMSBannerModel>) => {
        return (
            <DraggableTableRow identity={key!}>
                <TableCell>
                    <HandleDragRow identity={key!}/>
                </TableCell>
                <TableCell value={item.title}/>
                <TableCell value={item.description} className="break-words"/>
                <TableCell>
                    {item.is_active ? (
                        <span className="px-2 py-1 text-white bg-green-500 rounded">Active</span>
                    ) : (
                        <span className="px-2 py-1 text-white bg-red-500 rounded">Inactive</span>
                    )}
                </TableCell>
                <TableCell value={formatDate(item.updated_at)}/>
                <TableCell value={formatDate(item.updated_at)}/>
                <TableCell action={true}>
                    <ActionButton to={"./detail/" + item.id} variant="detail"/>
                    <ActionButton to={"./edit/" + item.id} variant="edit"/>
                    <ActionButton variant="delete" onClick={() => confirmDelete(item.id?.toString() ?? "")}/>
                </TableCell>
            </DraggableTableRow>
        );
    };

    const hasData = (data: ExampleCMSBannerModel | ResponseList<ExampleCMSBannerModel[]> | undefined): boolean => {
        if (!data) return false;
        if (Array.isArray(data)) return data.length > 0;
        if ('content' in data && Array.isArray(data.content)) return data.content.length > 0;
        return false;
    };

    function formatDate(isoString: string): string {
        const dates = new Date(isoString);

        const years = dates.getFullYear();
        const months = (dates.getMonth() + 1).toString().padStart(2, '0');
        const days = dates.getDate().toString().padStart(2, '0');
        const hours = dates.getHours().toString().padStart(2, '0');
        const minutes = dates.getMinutes().toString().padStart(2, '0');

        // Example format: "2024/06/11"
        return `${years}/${months}/${days}  ${hours}:${minutes}`;
    }

    return (
        <Wrapper>
            <Content>
                <ContentHeader title="CMS Banner">
                    <ToggleDarkMode/>
                </ContentHeader>
                <ContentBody className="px-0">
                    <div className="flex flex-row justify-between">
                        <InputSearchParams/>
                        <div className="px-6">
                            <Button to="./add">Add Banner</Button>
                        </div>
                    </div>
                    <QueryState query={state.exampleCMSBanner} hasData={hasData}>
                        <DraggableTable>
                            <TableHead>
                                <TableRow>
                                    <TableCell index={true}/>
                                    <TableCell>Title</TableCell>
                                    <TableCell className="w-96">Description</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Updated At</TableCell>
                                    <TableCell className="w-[160px]" action={true}></TableCell>
                                </TableRow>
                            </TableHead>
                            <DraggableTableBody keyExtractor={(_) => _.id!} onReorder={state.action.handleReOrderDraft}
                                                renderItem={renderTableItem} data={state.state.draft}/>
                        </DraggableTable>
                    </QueryState>
                    <PagingParams total={state.exampleCMSBanner.data?.pagination?.total || 0} size={10}/>
                </ContentBody>
            </Content>
            {state.state.isDeleting && <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 text-white bg-black bg-opacity-75 rounded-lg">Deleting...</div>}
            <ModalComponent
                isOpen={state.state.isModalOpen}
                onRequestClose={() => state.action.setIsModalOpen(false)}
                onConfirm={state.action.handleDelete}
                title="Confirm Delete"
                message="Are you sure you want to delete this item?"
                confirmText="Yes"
                cancelText="No"
            />
            <ToastContainer autoClose={5000}/>
        </Wrapper>
    );
}

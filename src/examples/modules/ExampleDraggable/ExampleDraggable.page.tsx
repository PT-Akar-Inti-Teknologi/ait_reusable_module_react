import {
    InputSearchParams
  } from "~/components/query-params";
  import {
    QueryState,
  } from "~/components/react-query";
  import {
    ActionButton,
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
  
  import {
    Wrapper
  } from "../../components";
  import {
    useExampleDraggableHook
  } from "./ExampleDraggable.hooks";
  import {
    ExampleDraggableModel
  } from "./ExampleDraggable.types";
  
  export function ExampleDraggable() {
  
    const state = useExampleDraggableHook();
  
    const handleReOrderDraft = (data: ExampleDraggableModel[]) => {
      const draft = data.map((_) => ({..._, id:_.id}));
      state.action.setDraft(draft);
    };
  
    const renderTableItem = ({item, key}: RenderTableRowParams<ExampleDraggableModel>) => {
      return (
        <DraggableTableRow identity={key!}>
          <TableCell>
            <HandleDragRow identity={key!} />
          </TableCell>
          <TableCell value={item.first_name} />
          <TableCell value={item.last_name} />
          <TableCell value={item.username} />
          <TableCell value={item.email} />
          <TableCell action={true}>
            <ActionButton variant="detail" />
            <ActionButton variant="edit" />
            <ActionButton variant="delete" />
          </TableCell>
        </DraggableTableRow>
      );
    };
  
    return (
      <Wrapper>
        <Content>
          <ContentHeader title="Table Example With React Query">
            <ToggleDarkMode />
          </ContentHeader>
          <ContentBody className="px-0">
            <InputSearchParams />
            <QueryState query={state.exampleDraggable}>
              <DraggableTable>
                <TableHead>
                  <TableRow>
                    <TableCell index={true} />
                    <TableCell order="first_name">First Name</TableCell>
                    <TableCell order="last_name">Last Name</TableCell>
                    <TableCell order="username">Username</TableCell>
                    <TableCell order="email">Email</TableCell>
                    <TableCell className="w-[160px]" action={true}></TableCell>
                  </TableRow>
                </TableHead>
                <DraggableTableBody keyExtractor={(_) => _.id!} onReorder={handleReOrderDraft} renderItem={renderTableItem} data={state.state.draft} />
              </DraggableTable>
            </QueryState>
          </ContentBody>
        </Content>
      </Wrapper>
    );
  }
  
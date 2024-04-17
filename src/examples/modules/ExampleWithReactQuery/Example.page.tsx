import {
  InputSearchParams
} from "~/components/query-params";
import {
  PagingQuery,
  QueryState,
  TableQuery
} from "~/components/react-query";
import {
  ActionButton,
  Content,
  ContentBody,
  ContentHeader,
  TableCell,
  TableRow,
  ToggleDarkMode
} from "~/components";

import {
  Wrapper
} from "../../components";
import {
  useExampleHook
} from "./Example.hooks";
import {
  ExampleModel
} from "./Example.types";

export function ExampleWithReactQueryPage() {

  const state = useExampleHook();

  const renderTableItem = (item: ExampleModel, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell {...{ index }} />
        <TableCell value={item.first_name} />
        <TableCell value={item.last_name} />
        <TableCell value={item.username} />
        <TableCell value={item.email} />
        <TableCell action={true}>
          <ActionButton variant="detail" />
          <ActionButton variant="edit" />
          <ActionButton variant="delete" />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Table Example With React Query">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody>
          <InputSearchParams />
          <QueryState query={state.example}>
            <>
              <TableQuery renderItem={renderTableItem}>
                <TableCell index={true} />
                <TableCell order="first_name">First Name</TableCell>
                <TableCell order="last_name">Last Name</TableCell>
                <TableCell order="last_namee">Username</TableCell>
                <TableCell order="email">Email</TableCell>
                <TableCell className="w-[160px]" action={true}></TableCell>
              </TableQuery>
              <PagingQuery />
            </>
          </QueryState>
        </ContentBody>
      </Content>
    </Wrapper>
  );
}

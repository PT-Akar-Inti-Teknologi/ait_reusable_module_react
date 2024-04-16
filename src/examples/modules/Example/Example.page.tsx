import {
  useState
} from "react";

import {
  ActionButton,
  Content,
  ContentBody,
  ContentHeader,
  InputSearch,
  Paging,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ToggleDarkMode
} from "~/components";
import {
  Wrapper
} from "../../components";

export function ExamplePage() {

  const [params, setParams] = useState({
    total: 1000,
    size: 10,
    page: 1
  });

  const updateParams = (value: typeof params) => {
    setParams((_) => ({ ..._, ...value }));
  };

  const renderTableItem = (_: any, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell {...{ index }} />
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
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
        <ContentHeader title="Table Example">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody>
          <InputSearch />
          <Table onUpdateParams={(_: any) => updateParams(_)} {...{ params }}>
            <TableHead>
              <TableRow>
                <TableCell index={true} />
                <TableCell order="first_name">First Name</TableCell>
                <TableCell order="last_name">Last Name</TableCell>
                <TableCell order="username">Username</TableCell>
                <TableCell orderPrefix="example" order="email">Email</TableCell>
                <TableCell className="w-[160px]" action={true}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: params.size }, renderTableItem)}
            </TableBody>
          </Table>
          <Paging
            onChangePage={(_: any) => updateParams(_)}
            total={params.total}
            size={params.size}
            page={params.page}
          />
        </ContentBody>
      </Content>
    </Wrapper>
  );
}

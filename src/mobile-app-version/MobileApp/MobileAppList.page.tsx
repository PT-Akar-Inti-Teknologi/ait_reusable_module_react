import {
  useState
} from "react";

import {
  Wrapper
} from "src/examples/components";
import {
  ActionButton,
  Button,
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

export function MobileAppListPage() {

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
        <TableCell>Platform</TableCell>
        <TableCell>Version Number</TableCell>
        <TableCell>Type</TableCell>
        <TableCell action={true}>
          <ActionButton to="./detail" variant="detail" />
          <ActionButton to="./edit" variant="edit" />
          <ActionButton variant="delete" />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Mobile App Version">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody className="px-0">
          <div className="flex flex-row justify-between">
            <InputSearch />
            <div className="px-6">
              <Button to="./add">Add Version</Button>
            </div>
          </div>
          <Table onUpdateParams={(_: any) => updateParams(_)} {...{ params }}>
            <TableHead>
              <TableRow>
                <TableCell index={true} />
                <TableCell order="platform">Platform</TableCell>
                <TableCell order="version_number">Version Number</TableCell>
                <TableCell order="type">Type</TableCell>
                <TableCell className="w-[160px]" action={true} />
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

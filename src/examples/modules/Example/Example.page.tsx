import {
  InputSearch,
  Paging,
  Table
} from "~/components/query-params";
import {
  ActionButton,
  Content,
  ContentBody,
  ContentHeader,
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

  const renderTableItem = (_: any, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell {...{ index }} />
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Gender</TableCell>
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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell index={true} />
                <TableCell orderPrefix="table" order="first_name">First Name</TableCell>
                <TableCell order="last_name">Last Name</TableCell>
                <TableCell orderPrefix="tablee" order="last_namee">Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell className="w-[160px]" action={true}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 10 }, renderTableItem)}
            </TableBody>
          </Table>
          <Paging
            total={100}
          />
        </ContentBody>
      </Content>
    </Wrapper>
  );
}

import {
  InputSearchParams,
  PagingParams,
  TableParams
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
  useUrlSearchParams
} from "~/hooks";

import {
  Wrapper
} from "../../components";

export function ExampleWithQueryParamsPage() {

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Table Example With Query Params">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody>
          <InputSearchParams />
          <TableParams>
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
            <TableBodyComponent />
          </TableParams>
          <PagingParams total={100} size={0} />
        </ContentBody>
      </Content>
    </Wrapper>
  );
}

function TableBodyComponent() {

  const [searchParams] = useUrlSearchParams<'size'>({ size: '10' });

  const renderTableItem = (_: typeof searchParams, index: number) => {
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
    <TableBody>
      {Array.from({ length: +searchParams.size! }, renderTableItem)}
    </TableBody>
  );
}
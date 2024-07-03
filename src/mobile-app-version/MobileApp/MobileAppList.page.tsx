import { useEffect, useMemo, useState } from 'react';

import { Wrapper } from 'src/examples/components';
import {
  ActionButton,
  Button,
  Content,
  ContentBody,
  ContentHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ToggleDarkMode,
  pagingSizeMaster,
} from '~/components';
import {
  InputSearchParams,
  PagingParams,
  TableParams,
} from '~/components/query-params';
import { useUrlSearchParams } from '~/hooks';
import { VersionModel, VersionParams } from './MobileApp.types';
import { deleteVersion, getAllVersion } from './MobileApp.service';
import { ResponseList } from '~/models';

export function MobileAppListPage() {
  const [data, setData] = useState<ResponseList<VersionModel[]>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  
  const [searchParams] = useUrlSearchParams<keyof VersionParams>({
    page: '1',
    size: '10',
  });

  const sort = useMemo(
    () => ['asc', 'desc'].find((_) => _ === searchParams.sort),
    [searchParams.sort]
  );
  const order = useMemo(
    () =>
      ['platform', 'version', 'type'].find(
        (_) => _ === searchParams.order
      ),
    [searchParams.order]
  );
  const pageSize = useMemo(
    () => pagingSizeMaster.find((_) => _ === searchParams.size) ?? '10',
    [searchParams.size]
  );

  const params: VersionParams = {
    search: searchParams.search,
    page: Math.max(+(searchParams.page ?? '1') - 1, 0).toString(),
    sort: !order || !sort ? undefined : `${order},${sort}`,
    size: pageSize,
  };

  // function delete data
  const deleteData = async (ids: string) => {
    setLoading(true);
    try {
      const response = await deleteVersion(ids)
      if(response.status == 200) {
        fetchData();
      }
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllVersion(params)
      if (response.data.response_output?.list) {
        setData(response.data.response_output?.list);
      }
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to call the API whenever params change
  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const renderTableItem = (versionData: VersionModel, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell {...{ index }} />
        <TableCell>{versionData.platform}</TableCell>
        <TableCell>{versionData.version}</TableCell>
        <TableCell>{versionData.type}</TableCell>
        <TableCell action={true}>
          <ActionButton to={"./detail/"+versionData.id} variant="detail" />
          <ActionButton to={"./edit/"+versionData.id} variant="edit" />
          <ActionButton variant="delete" onClick={() => deleteData(versionData.id?.toString() ?? "")}/>
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
            <InputSearchParams />
            <div className="px-6">
              <Button to="./add">Add Version</Button>
            </div>
          </div>
          <TableParams>
            <TableHead>
              <TableRow>
                <TableCell index={true} />
                <TableCell order="platform">Platform</TableCell>
                <TableCell order="version">Version Number</TableCell>
                <TableCell order="type">Type</TableCell>
                <TableCell className="w-[160px]" action={true} />
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.content && data.content.map((item, index)=>{return renderTableItem(item, index)})}
            </TableBody>
          </TableParams>
          <PagingParams total={data?.pagination?.total || 0} size={10} />
        </ContentBody>
      </Content>
    </Wrapper>
  );
}

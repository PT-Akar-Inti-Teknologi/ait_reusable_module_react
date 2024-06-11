import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Wrapper
} from "src/examples/components";
import {
  Button,
  Content,
  ContentAction,
  ContentHeader,
  LabelItem,
} from "~/components";
import { getVersionDetail } from "./MobileApp.service";
import { VersionDetailParam } from "./MobileApp.types";

export function MobileAppDetailPage() {
  const { platform, version } = useParams();
  const [ type, setType ] = useState<string>("")

  // Function to fetch data
  const fetchData = async () => {
    const params: VersionDetailParam = {
      platform: platform || '',
      version: version || ''
    }
    try {
      const response = await getVersionDetail(params)
      if (response.data.response_output?.detail?.type) {
        setType(response.data.response_output?.detail?.type);
      }
    } catch (err) {
      console.log(err)
    } finally {
      console.log()
    }
  };

  // useEffect to call the API whenever params change
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Mobile App Version - Detail" />
        <div className="px-6">
          <LabelItem label="Platform" value={platform} />
          <LabelItem label="Version Number" value={version} />
          <LabelItem className="border-none" label="Type" value={type} />
        </div>
        <ContentAction>
          <Button></Button>
          <Button to={"../edit/"+platform+"/"+version}>Edit</Button>
        </ContentAction>
      </Content>
    </Wrapper>
  );
}

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
import { getDetail } from "./MobileApp.service";

export function MobileAppDetailPage() {
  const { id } = useParams();
  const [ version, setVersion ] = useState<string>("")
  const [ platform, setPlatform ] = useState<string>("")
  const [ type, setType ] = useState<string>("")

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await getDetail(id || "1")
      if (response.data.response_output?.detail) {
        setVersion(response.data.response_output?.detail?.version)
        setPlatform(response.data.response_output?.detail?.platform)
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

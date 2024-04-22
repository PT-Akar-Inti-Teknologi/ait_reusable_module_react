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

export function MobileAppDetailPage() {

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Mobile App Version - Detail" />
        <div className="px-6">
          <LabelItem label="Platform" value="" />
          <LabelItem label="Version Number" value="" />
          <LabelItem className="border-none" label="Type" value="" />
        </div>
        <ContentAction>
          <Button></Button>
          <Button to="../edit">Edit</Button>
        </ContentAction>
      </Content>
    </Wrapper>
  );
}

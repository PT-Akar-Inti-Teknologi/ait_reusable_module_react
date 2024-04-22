import {
  Wrapper
} from "src/examples/components";
import {
  Button,
  Content,
  ContentAction,
  ContentBody,
  ContentHeader,
  ControlLabel,
  Radio,
  Select
} from "~/components";
import {
  HookFormProvider,
  InputTextField
} from "~/components/hook-form";
import {
  useMobileAppFormHook
} from "./MobileAppForm.hooks";
import {
  MobileAppFormProps
} from "./MobileAppForm.types";

export function MobileAppFormPage(props: Readonly<MobileAppFormProps>) {

  const state = useMobileAppFormHook();

  return (
    <Wrapper>
      <Content>
        <ContentHeader title={props.title} />
        <HookFormProvider form={state.form}>
          <>
            <ContentBody>
              <ControlLabel required={true} label="Platform">
                <Select
                  placeholder="Select platform"
                  options={state.platformMaster}
                  name="platform"
                />
              </ControlLabel>
              <ControlLabel required={true} label="Version Number">
                <InputTextField
                  placeholder="Enter version number"
                  name="version_number"
                />
              </ControlLabel>
              <ControlLabel required={true} label="Type" >
                <div className="flex flex-row gap-6">
                  <Radio label="Soft Update" checked={true} />
                  <Radio label="Force Update" checked={false} />
                </div>
              </ControlLabel>
            </ContentBody>
            <ContentAction>
              <Button />
              <Button onClick={state.action.handleSubmit} />
            </ContentAction>
          </>
        </HookFormProvider>
      </Content>
    </Wrapper>
  );
}

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
  Radio
} from "~/components";
import {
  HookFormProvider,
  InputRadioGroup,
  InputSelect,
  InputTextField
} from "~/components/hook-form";
import {
  useMobileAppFormHook
} from "./MobileAppForm.hooks";
import {
  MobileAppFormProps
} from "./MobileAppForm.types";
import { useParams } from "react-router-dom";

export function MobileAppFormPage(props: Readonly<MobileAppFormProps>) {
  const { platform, version } = useParams();
  const state = useMobileAppFormHook();

  return (
    <Wrapper>
      <Content>
        <ContentHeader title={props.title} />
        <HookFormProvider form={state.form}>
          <>
            <ContentBody>
              <ControlLabel required={true} label="Platform">
                <InputSelect
                  placeholder="Select platform"
                  options={state.platformMaster}
                  name="platform"
                />
              </ControlLabel>
              <ControlLabel required={true} label="Version Number">
                <InputTextField
                  placeholder="Enter version number"
                  name="version_number"
                  value={version || ''}
                />
              </ControlLabel>
              <ControlLabel required={true} label="Type" >
                <InputRadioGroup name="type">
                  <Radio label="Soft Update" value="SOFT_UPDATE" />
                  <Radio label="Force Update" value="FORCE_UPDATE" />
                </InputRadioGroup>
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

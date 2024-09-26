import {
    Button,
    Content,
    ContentAction,
    ContentBody,
    ContentHeader,
    ControlLabel,
    Radio
} from "ait-reusable-component-react";
import {
    HookFormProvider,
    InputImageCropUpload,
    InputRadioGroup,
    InputTextField
} from "ait-reusable-component-react/hook-form";
import {
    Wrapper
} from "src/examples/components";
import {
    useCMSBannerFormHook
} from "./ExampleCMSBannerForm.hooks";
import {
    CMSBannerFormProps
} from "./ExampleCMSBannerForm.types";
import ModalComponent from "~/components/Modal/Modal.page";

export function ExampleCMSBannerFormPage(props: Readonly<CMSBannerFormProps>) {

    const {
        bannerMutation,
        detailBanner,
        action,
        form,
        isModalDirtyForm,
    } = useCMSBannerFormHook();

    return (
        <Wrapper>
            <Content>
                <ContentHeader title={props.title} />
                <HookFormProvider
                    mutation={bannerMutation}
                    query={detailBanner}
                    form={form}
                >
                    <>
                        <ContentBody>
                            <ControlLabel required={true} label="Status">
                                <InputRadioGroup name="is_active">
                                    <Radio label="Active" value="true" />
                                    <Radio label="Inactive" value="false" />
                                </InputRadioGroup>
                            </ControlLabel>
                            <ControlLabel required={true} label="Index">
                                <InputTextField
                                    placeholder="Enter index banner"
                                    name="index"
                                    type="number"
                                />
                            </ControlLabel>
                            <ControlLabel required={true} label="Title">
                                <InputTextField
                                    placeholder="Enter title banner"
                                    name="title"
                                />
                            </ControlLabel>
                            <ControlLabel required={true} label="Description">
                                <InputTextField
                                    placeholder="Enter description banner"
                                    name="description"
                                />
                            </ControlLabel>
                            <ControlLabel required={true} label="Deeplink">
                                <InputTextField
                                    placeholder="Enter deeplink banner"
                                    name="deeplink"
                                />
                            </ControlLabel>
                            <ControlLabel label="Image" required={true}>
                                <InputImageCropUpload
                                    rule={{ required: "Field cannot be empty" }}
                                    maxSize={10}
                                    accept={["png", "jpeg"]}
                                    ratio="16:9"
                                    name="file"
                                />
                            </ControlLabel>
                        </ContentBody>
                        <ContentAction>
                            <Button
                                onClick={action.handleCancel}
                            />
                            <Button
                                loading={bannerMutation.isPending}
                                onClick={action.handleSubmit}
                            />
                        </ContentAction>
                    </>
                </HookFormProvider>
            </Content>
            <ModalComponent
                isOpen={isModalDirtyForm}
                onRequestClose={() => action.setIsModalDirtyForm(false)}
                onConfirm={action.handleNavigateList}
                title="Unsaved Changes"
                message="Are you sure you want to leave without saving? All changes will be lost."
                confirmText="Yes"
                cancelText="No"
            />
        </Wrapper>
    );
}

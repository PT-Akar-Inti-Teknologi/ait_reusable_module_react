import React, { useRef, useState } from "react";
import ReactCrop, {
    Crop,
    PixelCrop,
    centerCrop,
    makeAspectCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
    Wrapper
} from "src/examples/components";
import {
    Button,
    Content,
    ContentAction,
    ContentBody,
    ContentHeader,
    ControlLabel, Radio,
} from "~/components";
import { HookFormProvider, InputRadioGroup, InputTextField } from "~/components/hook-form";
import { canvasPreview } from "~/utils/canvasPreview.ts";
import { useDebounceEffect } from "~/utils/useDebounceEffect.ts";
import {
    useCMSBannerFormHook
} from "./ExampleCMSBannerForm.hooks";
import {
    CMSBannerFormProps
} from "./ExampleCMSBannerForm.types";

export function ExampleCMSBannerFormPage(props: Readonly<CMSBannerFormProps>) {
    const {id} = useParams();
    const state = useCMSBannerFormHook();
    const [imgSrc, setImgSrc] = useState('')
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const blobUrlRef = useRef('')
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [scale] = useState(1)
    const [rotate] = useState(0)
    const [aspect] = useState(16 / 9)
    const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

    function centerAspectCrop(
        mediaWidth: number,
        mediaHeight: number,
        aspect: number,
    ) {
        return centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                aspect,
                mediaWidth,
                mediaHeight,
            ),
            mediaWidth,
            mediaHeight,
        )
    }

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        // reset croppedImageUrl
        setCroppedImageUrl(null);
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined) // Makes crop preview update between images.
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const {width, height} = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }

    async function onCropImage() {
        const image = imgRef.current
        const previewCanvas = previewCanvasRef.current
        if (!image || !previewCanvas || !completedCrop) {
            throw new Error('Crop canvas does not exist')
        }

        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height

        const offscreen = new OffscreenCanvas(
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
        )
        const ctx = offscreen.getContext('2d')
        if (!ctx) {
            throw new Error('No 2d context')
        }

        ctx.drawImage(
            previewCanvas,
            0,
            0,
            previewCanvas.width,
            previewCanvas.height,
            0,
            0,
            offscreen.width,
            offscreen.height,
        )
        // You might want { type: "image/jpeg", quality: <0 to 1> } to
        // reduce image size
        const blob = await offscreen.convertToBlob({
            type: 'image/png',
        })

        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current)
        }
        blobUrlRef.current = URL.createObjectURL(blob)

        // make a random string for filename
        const fileName = Math.random().toString(36).substring(7)

        const file = new File([blob], `${fileName}.png`, {type: 'image/png'});

        setCroppedImageUrl(blobUrlRef.current);

        // insert file to form
        state.state.form.setValue('cropped_file', file);
    }

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
            }
        },
        100,
        [completedCrop, scale, rotate],
    )

    return (
        <Wrapper>
            <Content>
                <ContentHeader title={props.title}/>
                <HookFormProvider form={state.state.form}>
                    <>
                        <ContentBody>
                            <ControlLabel required={true} label="Status">
                                <InputRadioGroup name="status">
                                    <Radio label="Active" value="active"/>
                                    <Radio label="Inactive" value="inactive"/>
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
                            <ControlLabel required={id ? false : true} label="Image File">
                                <InputTextField
                                    name="file"
                                    type="file"
                                    onChange={onSelectFile}
                                    allowedExtensions={['image/jpg', 'image/jpeg', 'image/png']}
                                />
                            </ControlLabel>
                            {state.state.detail.image_file && !croppedImageUrl && (
                                <div className="flex justify-end">
                                    <img src={state.state.detail.image_file} className="w-2/3 aspect-video" alt=""/>
                                </div>
                            )}
                            {croppedImageUrl ? (
                                <div className="flex justify-end">
                                    <img src={croppedImageUrl} className="w-2/3 aspect-video" alt=""/>
                                </div>
                            ) : (
                                <>
                                    {!!imgSrc && !!completedCrop && (
                                        <div className="grid items-start grid-cols-2">
                                            <span className="text-black">Crop Image: </span>
                                            <div className="flex justify-between ml-2">
                                                <span className="text-black">Preview: </span>
                                                <Button color="danger" onClick={onCropImage}>Crop Image</Button>
                                            </div>
                                        </div>
                                    )}
                                    <div className="grid items-start grid-cols-2 h-1/4">
                                        {!!imgSrc && (
                                            <ReactCrop
                                                crop={crop}
                                                onChange={(_, percentCrop) => setCrop(percentCrop)}
                                                onComplete={(c) => setCompletedCrop(c)}
                                                aspect={aspect}
                                                maxHeight={100}
                                                maxWidth={100}
                                                locked={true}
                                            >
                                                <img
                                                    ref={imgRef}
                                                    alt="Crop me"
                                                    src={imgSrc}
                                                    style={{
                                                        transform: `scale(${scale}) rotate(${rotate}deg)`,
                                                    }}
                                                    onLoad={onImageLoad}
                                                />
                                            </ReactCrop>
                                        )}
                                        {!!completedCrop && (
                                            <>
                                                <div className="ml-2 border">
                                                    <div>
                                                        <canvas
                                                            ref={previewCanvasRef}
                                                            style={{
                                                                border: '1px solid black',
                                                                objectFit: 'fill',
                                                                width: '100%',
                                                                height: '300px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </ContentBody>
                        <ContentAction>
                            <Button/>
                            <Button disabled={!croppedImageUrl && !id}
                                    onClick={id ? state.action.handleSubmitEdit : state.action.handleSubmit}/>
                        </ContentAction>
                        <ToastContainer autoClose={5000}/>
                    </>
                </HookFormProvider>
            </Content>
        </Wrapper>
    );
}

import { useEffect, useState } from "react";
import { useGetExample } from "./ExampleDraggable.providers";
import { ExampleDraggableModel } from "./ExampleDraggable.types";

export function useExampleDraggableHook() {
  const [draft, setDraft] = useState<ExampleDraggableModel[]>([]);

  const exampleDraggable = useGetExample();

  useEffect(() => {
    if (exampleDraggable.isSuccess) {
      setDraft(exampleDraggable.data?.content!);
    }
  }, [exampleDraggable.dataUpdatedAt, exampleDraggable.isSuccess]);

  const wasChanged = exampleDraggable.data?.content?.some(
    (_, __) => draft.findIndex((__) => __.id === _.id) !== __
  );

  return {
    exampleDraggable,
    action: {
      setDraft,
    },
    state: {
      draft,
      wasChanged,
    },
  };
}

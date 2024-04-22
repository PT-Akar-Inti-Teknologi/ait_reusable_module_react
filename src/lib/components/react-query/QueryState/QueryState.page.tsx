import { Children, createElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

import { hasArray, hasObjectValues } from "~/utils";
import { useUrlSearchParams } from "~/hooks";
import { Button, Typography } from "~/components";

import { QueryStateProps } from "./QueryState.types"
import { Theme } from "./QueryStateContent.theme";
import { QueryStateContent } from "./QueryStateContent.page";
import { QueryStateProvider } from "./QueryState.context";
import { LoadingIcon } from "./Icons";

function QueryState<T>({
  children,
  hasData,
  query,
  ...props
}: Readonly<QueryStateProps<T>>) {

  const [searchParams] = useUrlSearchParams<'search'>();

  const [
    dataEl,
    emptyEl
  ] = Children.toArray(children);

  if (hasData(query?.data)) {
    return (
      <QueryStateProvider {...{ query }}>
        {dataEl}
      </QueryStateProvider>
    );
  }

  if (query?.isFetching || query?.isLoading) {
    return (
      <QueryStateContent {...props}>
        <LoadingIcon />
        <Typography className={twMerge(Theme.description)}>
          Loading...
        </Typography>
      </QueryStateContent>
    );
  }

  if (query?.isError) {
    const errorMessage = query.error.response?.data.response_schema?.response_message?.en ?? query?.error.message;
    return (
      <QueryStateContent
        title="Error"
        description={errorMessage || "Interal server error"}
        {...props}
      >
        <Button onClick={() => query?.refetch()}>
          Reload
        </Button>
      </QueryStateContent>
    );
  }


  const params = { ...searchParams, page: undefined, limit: undefined };
  if (!hasObjectValues(params)) {
    return (
      <QueryStateContent
        title="Result Not found"
        description="Please enter new keywords or turn off some filters."
        {...props}
      />
    );
  }

  if (isValidElement(emptyEl)) {
    return createElement(emptyEl.type, {
      description: `Click 'Add' button to create new entry`,
      title: 'List is Empty',
      ...emptyEl.props,
      key: emptyEl.key
    });
  }

  if (!!emptyEl) {
    return <>{emptyEl}</>;
  }

  return <QueryStateContent description="No Data" {...props} />;
}

QueryState.defaultProps = {
  hasData: (_: { content: any[], id: any }) => hasArray(_?.content) || !!_?.id
} as QueryStateProps<any>;

export { QueryState }

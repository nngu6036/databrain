import {
  createSelector,
  createSelectorFactory,
  defaultMemoize,
  MemoizedProjection,
} from "@ngrx/store";
import { AnyFn } from "@ngrx/store/src/selector";
import { get } from "lodash";
import { AppState } from "./app.state";

const equal = require("fast-deep-equal");

export function argsEqualMemoize(projectionFn: AnyFn): MemoizedProjection {
  return defaultMemoize(projectionFn, equal);
}

export function resultEqualMemoize(projectionFn: AnyFn): MemoizedProjection {
  return defaultMemoize(projectionFn, undefined, equal);
}

export function equalMemoize(projectionFn: AnyFn): MemoizedProjection {
  return defaultMemoize(projectionFn, equal, equal);
}

export const createSelectorArgsEqual = createSelectorFactory(argsEqualMemoize);
export const createSelectorResultEqual = createSelectorFactory(
  resultEqualMemoize
);
export const createSelectorEqual = createSelectorFactory(equalMemoize);

export const selectAppState = (state: AppState) => state;

export const selectRouteState = createSelector(
  selectAppState,
  (state: AppState) => state.router
);

export const selectRouteUrl = createSelector(
  selectRouteState,
  router => router.state.url
);

export const selectRouteParams = createSelector(
  selectRouteState,
  (router, { param }) =>
    param ? get(router.state.params, param) : router.state.params
);

export const selectQueryParams = createSelector(
  selectRouteState,
  (router, { queryParam }) =>
    queryParam
      ? get(router.state.queryParams, queryParam)
      : router.state.queryParams
);

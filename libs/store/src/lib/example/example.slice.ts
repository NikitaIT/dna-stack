import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const EXAMPLE_FEATURE_KEY = 'example';

/*
 * Update these interfaces according to your requirements.
 */
export interface ExampleEntity {
  id: number;
}

export interface ExampleState extends EntityState<ExampleEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const exampleAdapter = createEntityAdapter<ExampleEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchExample())
 * }, [dispatch]);
 * ```
 */
export const fetchExample = createAsyncThunk(
  'example/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getExamples()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([] as ExampleEntity[]);
  }
);

export const initialExampleState: ExampleState = exampleAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: '',
  }
);

export const exampleSlice = createSlice({
  name: EXAMPLE_FEATURE_KEY,
  initialState: initialExampleState,
  reducers: {
    add: exampleAdapter.addOne,
    remove: exampleAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExample.pending, (state: ExampleState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchExample.fulfilled,
        (state: ExampleState, action: PayloadAction<ExampleEntity[]>) => {
          exampleAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchExample.rejected, (state: ExampleState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message || '';
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const exampleReducer = exampleSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(exampleActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const exampleActions = exampleSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllExample);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = exampleAdapter.getSelectors();

export const getExampleState = (rootState: {
  [EXAMPLE_FEATURE_KEY]: ExampleState;
}): ExampleState => rootState[EXAMPLE_FEATURE_KEY];

export const selectAllExample = createSelector(getExampleState, selectAll);

export const selectExampleEntities = createSelector(
  getExampleState,
  selectEntities
);

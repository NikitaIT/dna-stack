import { fetchExample, exampleAdapter, exampleReducer } from './example.slice';

describe('example reducer', () => {
  it('should handle initial state', () => {
    const expected = exampleAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: '',
    });

    expect(exampleReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchExamples', () => {
    let state = exampleReducer(undefined, fetchExample.pending(''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: '',
        entities: {},
        ids: [],
      })
    );

    state = exampleReducer(state, fetchExample.fulfilled([{ id: 1 }], ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: '',
        entities: { 1: { id: 1 } },
      })
    );

    state = exampleReducer(
      state,
      fetchExample.rejected(new Error('Uh oh'), '')
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});

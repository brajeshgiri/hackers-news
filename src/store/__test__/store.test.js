import store, { dispatch } from '..'
const inialState = { comments: [], page: 1 };
describe('Store', () => {
    test('store initialize', () => {
        expect(store.getState().comments).toEqual(inialState)
    })
})
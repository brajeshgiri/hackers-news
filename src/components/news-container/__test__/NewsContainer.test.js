import React from 'react';
import NewsContainer from '../NewsContainer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// { initialState }
// const store = createStore((state)=>state);
const store = {
    getState: jest.fn(() => ({ comments: { comments: [], page: 1 } })),
    dispatch: jest.fn(),
    subscribe: jest.fn()
};

describe('NewsContainer', () => {
    test('load news container', () => {
        const ui = <Provider store={store}>
            <MemoryRouter><NewsContainer /></MemoryRouter>
        </Provider>
        render(ui);
        expect(screen.findByText('Comments')).toBeTruthy();
        expect(screen.findByText('Vote Count')).toBeTruthy();
        expect(screen.findByText('Up Vote')).toBeTruthy();
        expect(screen.findByText('Previous')).toBeTruthy();
        expect(screen.findByText('Next')).toBeTruthy();
        expect(screen.findByText('ID')).toBeTruthy();
    });
});
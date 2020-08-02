import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
const comments = [{
    author: "nirvana",
    comment_text: "I worked at Amazon from before Steve left to sometime later.  ",
    created_at: "2011-10-12T09:28:11.000Z",
    created_at_i: 1318411691,
    num_comments: 999,
    objectID: "3102129",
    parent_id: 3101876,
    points: 270,
    relevancy_score: 3508,
    story_id: 3101876,
    story_text: null,
    story_title: "Steve's Google Platform rant",
    story_url: "https://plus.google.com/110981030061712822816/posts/WugKtXSp7We",
    title: "",
    url: "",
}]
const store = {
    getState: jest.fn(() => ({ comments: { comments, page: 1 } })),
    dispatch: jest.fn(),
    subscribe: jest.fn()
};

describe('App', () => {
    test('load App component', () => {
        const ui = (
            <Provider store={store}>
                <MemoryRouter><App /></MemoryRouter>
            </Provider>
        );
        render(ui);
        expect(screen.findByText("999")).toBeTruthy();
        // screen.debug();
    });
});
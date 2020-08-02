import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import NewsDetails from '../NewsDetail';
const props = { created_at: '2020/01/01', author: 'test user', story_title: 'test title', story_url: 'http://test.com', onHide: jest.fn() };
describe('NewsDetails', () => {

    beforeEach(() => {
        render(<NewsDetails {...props} />);
    })
    test('snapshot renders', () => {
        // screen.debug();
        screen.getByText('hide');
    });

    test('render component element', () => {

        screen.getByText('test user');
        screen.getByText('test title');
    });

    test('on click hide call handler', () => {
        fireEvent.click(screen.getByText('hide'));
        expect(props.onHide).toHaveBeenCalled();
    })
});
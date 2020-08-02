import React from 'react';
import { render, screen } from '@testing-library/react';
import LineChart from '../LineChart';
const props = {
    data: [{ story_id: 1, points: 3 }, { story_id: 4, points: 5 },]
};

describe('LineChart', () => {
    test('should have both axis label', () => {
        const component = render(<LineChart {...props} />);
        expect(screen.queryByText('VOTES')).toBeTruthy();
        expect(screen.queryByText('ID')).toBeTruthy();
    });
});
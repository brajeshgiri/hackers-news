import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';
import { MemoryRouter } from 'react-router-dom';
const props = {
    page: 1
};

describe('NewsDetails', () => {
    beforeEach(() => {
        const { container, getByText } = render(<Pagination {...props} />, { wrapper: MemoryRouter });
    })
    test('should have next and previous button', () => {
        expect(screen.getByText('Next')).toBeTruthy();
        expect(screen.getByText('Previous')).toBeTruthy();
    });

    test('should have routing url on next and previous button click', () => {
        const previousBtn = screen.getByTestId('previous');
        expect(previousBtn).toBeTruthy();
        expect(previousBtn.attributes.getNamedItem('href').value).toBe('/0')

        const nextBtn = screen.getByTestId('next');
        expect(nextBtn).toBeTruthy();
        expect(nextBtn.attributes.getNamedItem('href').value).toBe('/2')
    });


});
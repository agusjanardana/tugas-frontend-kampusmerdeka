import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';

jest.mock('axios');

describe('Search', () => {
    test('test case one, failed get API', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error('Something Wrong With The Server')));

        render(<Search />);

        await act(async () => {
            await userEvent.click(screen.getByRole('button'));
        });

        const temporaryMessage = await screen.findByText(/Ada yang error .../);

        expect(temporaryMessage).toBeInTheDocument();
    });

    test('test case two, success get all data', async () => {
        const stories = [
            { UID: '1', title: 'Naruto With Sasuke', page: '50' },
            { UID: '2', title: 'Gta V', page: '40' },
        ];

        axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

        render(<Search />);

        await act(async () => {
            await userEvent.click(screen.getByRole('button'));
        });

        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2);
    });
});

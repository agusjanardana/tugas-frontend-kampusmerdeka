import FormCoding from './FormCoding';

import { render, fireEvent, screen } from '@testing-library/react';

describe('FormCoding', () => {
    test('test case one, rendering components', () => {
        render(<FormCoding />);
        expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    });

    test('test case two, valid input for name, email, and handphone number', () => {
        render(<FormCoding />);
        fireEvent.input(screen.getByRole('textbox', { name: /Nama Lengkap/i }), {
            target: { value: 'I Gde Bagus Janardana Abasan' },
        });
        fireEvent.input(screen.getByRole('textbox', { name: /Email/i }), {
            target: { value: 'bagus@gmail.com' },
        });
        fireEvent.input(screen.getByRole('spinbutton', { name: /No Handphone/i }), {
            target: { value: 87232312333 },
        });

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue('I Gde Bagus Janardana Abasan');
        expect(screen.getByLabelText(/Email/)).toHaveValue('bagus@gmail.com');
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(87232312333);
    });

    test('test case three, invalid input for name,email, and handphone', () => {
        render(<FormCoding />);
        fireEvent.input(screen.getByRole('textbox', { name: /Nama Lengkap/i }), {
            target: { value: 'test123' },
        });
        fireEvent.input(screen.getByRole('textbox', { name: /Email/i }), {
            target: { value: 'bagus' },
        });
        fireEvent.input(screen.getByRole('spinbutton', { name: /No Handphone/i }), {
            target: { value: 123 },
        });

        expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
        expect(screen.getByText('No Handphone Tidak Sesuai')).toBeInTheDocument();

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue('test123');
        expect(screen.getByLabelText(/Email/)).toHaveValue('bagus');
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123);
    });

    test('test case four, show alert for invalid input', () => {
        render(<FormCoding />);
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        fireEvent.input(screen.getByRole('textbox', { name: /Nama Lengkap/i }), {
            target: { value: 'test123' },
        });
        fireEvent.input(screen.getByRole('textbox', { name: /Email/i }), {
            target: { value: 'bagus' },
        });
        fireEvent.input(screen.getByRole('spinbutton', { name: /No Handphone/i }), {
            target: { value: 123 },
        });
        fireEvent.submit(screen.getByText('Submit'));
        expect(window.alert).toBeCalledWith('Data Pendaftar Tidak Sesuai');
        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue('test123');
        expect(screen.getByLabelText(/Email/)).toHaveValue('bagus');
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123);
    });

    test('test case five, show alert for success input', () => {
        render(<FormCoding />);
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        fireEvent.input(screen.getByRole('textbox', { name: /Nama Lengkap/i }), {
            target: { value: 'AgusJanardana' },
        });
        fireEvent.input(screen.getByRole('textbox', { name: /Email/i }), {
            target: { value: 'bagus@gmail.com' },
        });
        fireEvent.input(screen.getByRole('spinbutton', { name: /No Handphone/i }), {
            target: { value: 1233423123 },
        });
        fireEvent.submit(screen.getByText('Submit'));
        expect(window.alert).toBeCalledWith(`Data Pendaftar "AgusJanardana" Berhasil Diterima`);
        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue('AgusJanardana');
        expect(screen.getByLabelText(/Email/)).toHaveValue('bagus@gmail.com');
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(1233423123);
    });
});

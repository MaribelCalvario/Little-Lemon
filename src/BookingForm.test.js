import { render, screen, fireEvent } from "@testing-library/react"; 
import BookingForm from './BookingForm';

describe('BookingForm JavaScript Validation Function States', () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    const defaultProps = {
        availableTimes: ['17:00', '18:00'],
        dispatch: mockDispatch,
        bookingData: [],
        submitForm: mockSubmitForm
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Renders static text labels inside BookingForm', () => {
        render(<BookingForm {...defaultProps} />);
        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    test('Applies correct HTML5 validation attributes to inputs', () => {
        render(<BookingForm {...defaultProps} />);
        
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);

        expect(dateInput).toBeRequired();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(timeSelect).toBeRequired();
        expect(guestsInput).toBeRequired();
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(occasionSelect).toBeRequired();
    });

  
    test('Submit button should be disabled when form is empty or invalid', () => {
        render(<BookingForm {...defaultProps} />);
        const submitButton = screen.getByRole('button', { name: /on click/i });
        expect(submitButton).toBeDisabled();
    });

    test('JavaScript validation should fail (button disabled) when guest count is below 1', () => {
        render(<BookingForm {...defaultProps} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const submitButton = screen.getByRole('button', { name: /on click/i });

        fireEvent.change(dateInput, { target: { value: '2026-12-25' } });
        fireEvent.change(guestsInput, { target: { value: '0' } }); 

        expect(submitButton).toBeDisabled();
    });

    test('JavaScript validation should fail (button disabled) when guest count is above 10', () => {
        render(<BookingForm {...defaultProps} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const submitButton = screen.getByRole('button', { name: /on click/i });

        fireEvent.change(dateInput, { target: { value: '2026-12-25' } });
        fireEvent.change(guestsInput, { target: { value: '11' } }); 

        expect(submitButton).toBeDisabled();
    });

    test('Form submission calls submitForm prop only when user data is valid', () => {
        render(<BookingForm {...defaultProps} />);
        
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const submitButton = screen.getByRole('button', { name: /on click/i });

        fireEvent.change(dateInput, { target: { value: '2026-12-25' } });
        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });

        expect(submitButton).not.toBeDisabled();

        fireEvent.click(submitButton);
        expect(mockSubmitForm).toHaveBeenCalledTimes(1); 
        expect(mockSubmitForm).toHaveBeenCalledWith({
            date: '2026-12-25',
            time: '17:00',
            guests: 4,
            occasion: 'Birthday'
        });
    });
});
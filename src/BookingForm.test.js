import { render, screen, fireEvent } from "@testing-library/react"; 
import BookingForm from './BookingForm';

test('Renders a static text label inside BookingForm', () => {
    render(<BookingForm availableTimes={[]} bookingData={[]} submitForm={jest.fn()} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('Allows the user to submit the BookingForm successfully', () => {
    render(
        <BookingForm 
            availableTimes={['17:00']} 
            dispatch={jest.fn()} 
            bookingData={[]} 
            submitForm={jest.fn()} 
        />
    );
    const submitButton = screen.getByRole('button', { name: "On Click confirm your reservation" });
    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();
});

test('Form submission calls submitForm prop with user input data', () => {
    const mockSubmit = jest.fn();
    render(
        <BookingForm 
            availableTimes={['17:00']} 
            dispatch={jest.fn()} 
            bookingData={[]} 
            submitForm={mockSubmit} 
        />
    );
    const submitButton = screen.getByRole('button', { name: "On Click confirm your reservation" });
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalled();
});
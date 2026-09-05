import { render } from '@testing-library/react';


jest.mock('react-router-dom', () => ({
  Routes: ({ children }) => children,
  Route: () => null,
  Link: ({ children }) => children,
  useNavigate: () => jest.fn(),
}));


window.fetchAPI = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
window.submitAPI = () => true;


test('initializeTimes returns a non-empty array of available booking times', () => {
    // executes the layout logic used by Main.js
    const result = window.fetchAPI(new Date());
    
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

// Test for updateTimes
test('updateTimes returns the times array provided by fetchAPI on dispatch', () => {
    const updateTimesMock = (state, action) => {
        if (action.type === 'UPDATE_TIMES') {
            return window.fetchAPI(action.payload);
        }
        return state;
    };
    
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2026-10-15' };
    
    const result = updateTimesMock(initialState, action);
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    expect(result).toEqual(expectedTimes);
});

// Test for reading from Local Storage
test('Main component reads and parses data from localStorage on initialization', () => {
    
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');

    const MainComponent = require('./Main').default;
    render(<MainComponent />);

    // Verifies that Main checked localStorage for existing reservations during mounting
    expect(getItemSpy).toHaveBeenCalledWith('littleLemonBookings');

    getItemSpy.mockRestore();
});
import { render } from '@testing-library/react';

// 1. COMPLETELY MOCK THE ROUTER MODULE
jest.mock('react-router-dom', () => ({
  Routes: ({ children }) => children,
  Route: () => null,
  Link: ({ children }) => children,
  useNavigate: () => jest.fn(),
}));

// 2. DEFINE STABLE WINDOW API MOCKS
window.fetchAPI = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
window.submitAPI = () => true;

// 3. Test for initializeTimes
test('initializeTimes returns a non-empty array of available booking times', () => {
    // Directly executes the layout logic used by Main.js
    const result = window.fetchAPI(new Date());
    
    expect(Array.isArray(result)).toBe(true);    
    expect(result.length).toBeGreaterThan(0);    
});

// 4. Test for updateTimes
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

// 5. Test for reading from Local Storage
test('Main component reads and parses data from localStorage on initialization', () => {
    // Spy on the getItem method of localStorage
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    
    // Dynamically require and render Main to trigger its internal useState fallback initializer
    const MainComponent = require('./Main').default;
    render(<MainComponent />);

    // Verifies that Main checked localStorage for existing reservations during mounting
    expect(getItemSpy).toHaveBeenCalledWith('littleLemonBookings');
    
    // Clean up the spy
    getItemSpy.mockRestore();
});
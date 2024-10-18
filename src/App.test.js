import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import App from './App';

test ('Renders the Header heading', () => {
render(<BrowserRouter><App /></BrowserRouter>);
const headingElement = screen.getByText(/Reserve a table/i);
expect(heading).toBeInTheDocument();

const reserveButton = screen.getByRole('button', {name: /Reserve a table/i});
expect(headingElement).toBeInTheDocument();
})

test( 'Initialize/Update Times', () => {
render(<BrowserRouter><App /></BrowserRouter>);
const reserveButton = screen.getByRole('button');
fireEvent.click(reserveButton);

const testTime= []
// userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name:testTime}))
// expect(screen.getByRole('option', { name: testTime }).selected).toBe(true)

})
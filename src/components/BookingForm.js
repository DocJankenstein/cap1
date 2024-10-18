import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
const [occasion, setOccasion] = useState('');
const [guests, setGuests] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
props.submitForm(e);
};

const handleChange = (e) => {
setDate(e);
props.dispatch(e);
}

return (
<header>
<section>
<form onSubmit={handleSubmit}>
<fieldset className='formField'>
<div>
<lable htmlFor="book-date">Date</lable>
<input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
</div>
<div>
<label htmlFor="book-time">Time</label>
<select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
<option value="">Select a time</option>
{props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
</select>
</div>
<div>
<label htmlFor="book-guests">Number of guests</label>
<input id="book-guests" value={guests} onChange={(e) => setGuests(e.target.value)} type="number" min="1" required/>
</div>
<div>
<label htmlFor="book-occasion">Occasion</label>
<select id="book-occasion" key={occasion}value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
<option value="">Select an occasion</option>
<option>Birthday</option>
<option>Annivesary</option>
</select>
</div>
<div className="btnReceive">
<input aria-label='On Click' type={'submit'} value={'Reserve a table'}></input>
</div>
</fieldset>
</form>
</section>
</header>
);
};

export default BookingForm;
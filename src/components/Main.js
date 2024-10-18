import React, { useReducer } from'react';
import Booking from './Booking';
import Header from './Header';

const Main = () => {

const seededRandom = function (seed) {
var m = 2**35-31;
var a = 185852;
var s = seed % m;
return function() {
return (s * s * a % m) / m;
};
}

const fetchAPI = function(date) {
let result = [];
let random = seededRandom(date.getDate());

for(let i = 17; i <= 23; i++) {
if(random() > 0.5) {
result.push(i+':00');
}
if(random() > 0.5) {
result.push(i+':30');
}
}
return result;
};

const submitAPI = function(formData) {
return true;
}

const initialState = {availableTimes: fetchAPI(new Date())}
const [state, dispatch] = useReducer(reducer, initialState);

function updateTimes(state, date) {
return { availableTimes: fetchAPI(new Date(date))};
}
const navigate= useNavigate();
function submitForm(formData) {
if(submitAPI(formData)) {
navigate('/confirmation');
}
}

return (
<main className="main">
<Routes>
<Route path="/" exact element={<Header />} />

<Route path="/booking" element={<Booking availableTimes={state.availableTimes} onSubmit={submitForm} />} />

<Route path="/confirmation" element={<h1>Thank you for booking!</h1>} />
</Routes>
</main>

)
}

export default Main;
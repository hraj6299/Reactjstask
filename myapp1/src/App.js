
import { useState } from 'react';
import './App.css';
import Display from './Display';

function App() {

  let current = new Date();
  let currentYear = current.getFullYear();
  let currentDate = current.getDate();
  let currentMonth = current.getMonth() + 1;

  const [dob, setDob] = useState();
  const [ageText, setAgeText] = useState("");



  function handleChange(event)
  {

    let k = event.target.value;
    let m = new Date(k);

    setDob(m);
  }

  function handleClick()
  {
      // console.log(dob.getFullYear());

      let dobYear = dob.getFullYear();
      let dobDate = dob.getDate();
      let dobMonth = dob.getMonth() + 1;



      const age = {};
      let result = ageText;

      let yearAge = currentYear - dobYear;

      let monthAge = '';

      // get months
      if (currentMonth >= dobMonth) {
        monthAge = currentMonth - dobMonth;
      } else {
        yearAge--;
        monthAge = 12 + currentMonth - dobMonth;
      }

      let dateAge = '';

      // get Days
      if (currentDate >= dobDate) {
        // get days when current date is greater than or equal to birth date
        dateAge = currentDate - dobDate;
      } else {
        monthAge--;
        dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
          monthAge = 11;
          yearAge--;
        }
      }

      age.years = yearAge;
      age.months = monthAge;
      age.days = dateAge;

      if (age.years > 0 && age.months > 0 && age.days > 0) {
        result = `${age.years} years ${age.months} months, and ${age.days} days old.`;
      } else if (age.years === 0 && age.months === 0 && age.days > 0) {
        // when year and month is same
        result = `Only ${age.days} days old!`;
      } else if (age.years > 0 && age.months === 0 && age.days === 0) {
        // when month and day are same
        result = `${age.years} years old. Happy Birthday!!! 🎂🎉🥳`;
      } else if (age.years > 0 && age.months > 0 && age.days === 0) {
        // when date is same
        result = `${age.years} years and ${age.months} months old.`;
      } else if (age.years === 0 && age.months > 0 && age.days > 0) {
        // when year is same
        result = `${age.months} months and ${age.days} days old.`;
      } else if (age.years > 0 && age.months === 0 && age.days > 0) {
        // when months is same
        result = `${age.years} years, and ${age.days} days old.`;
      } else if (age.years === 0 && age.months > 0 && age.days === 0) {
        // when year and date is same
        result = `${age.months} months old.`;
      } else {
        result = 'Invalid Date!!!';
      }
      setAgeText(result);

  }


  return (
    <div >

      <div className='header'>
        <h1>AGE CALCULATOR</h1>
      </div>

      <div>

        <div className='formbox'>

          <label style={{'fontWeight':'bold', 'marginRight':'10px'}}  >Select your Birthdate:</label>

          <input type="date" onChange={handleChange} ></input>

          <button type='submit' style={{"marginTop" : "20px"}} onClick={handleClick} >SUBMIT</button>

        </div>
      </div>
      <Display disp={ageText} ></Display>
    </div>
    
  );
}

export default App;

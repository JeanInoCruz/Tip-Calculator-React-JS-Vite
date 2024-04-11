import React from 'react'

export const PeopleInput = ({ people, setPeople }) => {
    return (
        <>

        <label htmlFor="input-people" className="label-mod">
          <h2>Number of People</h2>
          <span id="cantBe"></span>
        </label>
        <input
          id="input-people"
          className="input-people"
          type="number"
          value={people}
          min="1"
          placeholder="Enter a Number"
          onChange={(e) => setPeople(e.target.value)}
        />

      </>
    );
  }
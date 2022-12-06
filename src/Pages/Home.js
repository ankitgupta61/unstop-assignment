import React from "react";
import "./Home.css";

const arr = new Array(80).fill(1);

const Home = () => {
  console.log(arr);
  return (
    <div className="home">
      <header>
        <h1>Welcome to Railway Ticket Booking Counter</h1>
      </header>
      <main>
        <div className="coach-chart">
          {arr.map((element, index) => (
            <div class="grid-item" key={index}>
              {index + 1}
            </div>
          ))}
        </div>
        <div className="userInputBox">
          <div>
            <select className="select">
              <option
                style={{ overflow: "hidden", "max-width": "100%" }}
                selected
              >
                Select number of seats to be booked
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>
          <button className="btn">Submit</button>
          <div className="displayResult"></div>
        </div>
      </main>
      <footer>
        <button className="contactUs">Contact Us</button>
      </footer>
    </div>
  );
};

export default Home;

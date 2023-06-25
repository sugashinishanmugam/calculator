import React, { useState, useEffect } from "react";

const Calculator = ({ dateValue }) => {
  const Months = {
    0: "January",
    1: "Febraury",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const year = dateValue.split("-")[0];
  const month = dateValue.split("-")[1];
  const day = dateValue.split("-")[2];
  const MonthInWords = Months[new Date(dateValue).getMonth()]; // JAN - 0; FEB - 1 .... DEC - 11
  const TotalDaysInMonth = new Date(year, month, 0).getDate();
  const DayInWhichMonthStarts = new Date(`${year}-${month}-01`).getDay(); // MON - 0; TUE - 1 .... SUN - 1
  let daysList = [];
  const showDates = () => {
    let counter = 1;
    for (let dayValue = 1; dayValue <= TotalDaysInMonth; ) {
      const objDate = {};
      for (let d = 0; d < 7 && dayValue <= TotalDaysInMonth; d++) {
        if (counter === 1 && d < DayInWhichMonthStarts) {
          objDate[d] = "";
        } else {
          objDate[d] = dayValue;
          counter++;
          dayValue++;
        }
      }
      daysList.push(objDate);
    }
  };
  showDates();

  return (
    <div className="my-4 flex flex-col mx-[25%] max-w-[75%]">
      <div className="font-bold">{`${MonthInWords} ${year}`}</div>
      <table>
        <thead>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
            {
                daysList.map((item, key) => {
                    return (<tr key={key}>
                    {Object.keys(item).map((x, i )=> {
                        return (
                            <td className={item[x] == day ? "bg-indigo-700 rounded-3xl" : ""} key={key + i}>{item[x]}</td>
                        );
                    })}
                    </tr>);
                })
            }
        </tbody>
      </table>
      
    </div>
  );
};

export default Calculator;

import { useState } from "react";

const useTools = () => {
  const [isClick, setIsClick] = useState(false);

  /* Time and Date */
  let date = new Date();
  const week = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const timeNow = date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const today =
    week[date.getDay()] +
    ", " +
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  const todayTimeDate = `${timeNow}, ${today}`;
  const currentMonth = monthNames[date.getMonth()];
  const nextMonth = monthNames[date.getMonth() + 1];
  const currentYear = date.getFullYear();
  const nextYear = date.getFullYear() + 1;
  /* Close */
  const buttonRefresh = () => {
    setIsClick(true);
    setTimeout(function () {
      setIsClick(false);
    }, 5000);
  };

  return {
    isClick,
    setIsClick,
    buttonRefresh,
    today,
    timeNow,
    todayTimeDate,
    currentMonth,
    nextMonth,
    currentYear,
    nextYear,
  };
};

export default useTools;

// Base Url
const base_url =
  "https://api.rawg.io/api/games?key=bcb1088d661e4b04afa15036d4b0055a";

//   "https://api.rawg.io/api/platforms?key=bcb1088d661e4b04afa15036d4b0055a";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page-size=10`;

console.log(currentDate);
console.log(lastYear);
console.log(nextYear);
console.log(popular_games);

const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());
const base_url = 'https://api.rawg.io/api/'
const apiKey = '9fbc5c77ffc64d2b929f59f51fe8a316'

const getCurrentMonth = () => {
    const month = new Date().getMonth();
    if(month < 10){
        return `0${month}`;
    } else {
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
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
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

export const gameDetailsURL = (gameID) => `${base_url}games/${gameID}?key=${apiKey}`;

export const gameScreenshotsURL = (gameID) => `${base_url}games/${gameID}/screenshots?key=${apiKey}`;

export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9?key=${apiKey}`;


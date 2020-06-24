// если с локализацией
// const daysPositon = navigator.language === "ru-RU" ? [6,0,1,2,3,4,5] : [0,1,2,3,4,5,6];
const daysPositon = [6,0,1,2,3,4,5];

export const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate()
export const getDayPosition = (day, month, year) => {
  const date = new Date(year + "-" + month + "-" + day).getDay()
  return  daysPositon[date]
}

export const getDayWithOffset = (month, year, day, position) => {
  const date = new Date(+new Date(year, month-1, day ) + 1000*60*60*24*position)
  return date.getDate()
};
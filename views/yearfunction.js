function getCurrentYear(){
    const currentDate = new Date();
    return currentDate.getFullYear();
};
const currentYearElement = document.getElementById('curyear');
currentYearElement.textContent = getCurrentYear();

const searchBtn = document.querySelector(".search-btn");
const answer = document.querySelector(".answer-text")
const checkboxes = document.querySelectorAll('input[type=checkbox]');

let mealList = [];
//fetch()為非同步語法，以下為fetch()的固定用法，
fetch("./mealList.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        mealList = data;
        console.log(mealList);
    })
    .catch(function (error) {
        console.error('匯入 JSON 檔案發生錯誤', error);
    });


searchBtn.addEventListener("click", () => {
    const selectedCategories = [];
    const resultArr = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    });
    console.log(selectedCategories);
    mealList.forEach(function (meal) {
        // selectedCategories.forEach(function (category) {
        //     if (meal.category.includes(category)) {
        //         resultArr.push(meal);
        //     }
        // });
        // some() 類似contain 確認有沒有包含()內的值
        if (selectedCategories.some(category => meal.category.includes(category))) {
            resultArr.push(meal);
        }
    });


    console.log(resultArr);
    let random = 0;
    let result = "";
    if (resultArr.length == 0) {
        random = Math.floor(Math.random() * mealList.length);
        result = mealList[random].name;
    } else {
        random = Math.floor(Math.random() * resultArr.length);
        result = resultArr[random].name;
    }

    answer.textContent = "今天吃..." + result;

})



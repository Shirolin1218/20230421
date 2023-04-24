const mealList = [
    {
        "name": "食在一方",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "日十",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "鹽行站",
        "category": ["buffet", "rice"],
        "filter": false
    },
    {
        "name": "鍋燒麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "小飯糰大飯糰",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "後校門滷肉飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "魚耶",
        "category": ["brunch", "rice", "noodle"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    }
]
const searchBtn = document.querySelector(".search-btn");
const answer = document.querySelector(".answer-text")
const checkboxes = document.querySelectorAll('input[type=checkbox]');




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



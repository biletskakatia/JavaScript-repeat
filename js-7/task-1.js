const categoryList = document.querySelectorAll(" #categories .item");
console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryItems = category.querySelectorAll("ul li");
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems.length}`);
});
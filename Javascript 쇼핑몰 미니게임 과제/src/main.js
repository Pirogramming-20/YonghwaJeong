//브라우저 API(fetch)를 이용해 JSON파일 참조
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
  // response의 body를 json으로 변경 / json에서 원하는 부분만 다시 return
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);

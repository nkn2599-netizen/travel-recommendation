function searchPlace() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let results = document.getElementById("results");

  let data = {
    beach: [
      { name: "Maldives Beach", img: "https://source.unsplash.com/400x300/?beach" },
      { name: "Bali Beach", img: "https://source.unsplash.com/400x300/?bali,beach" }
    ],
    temple: [
      { name: "Kedarnath Temple", img: "https://source.unsplash.com/400x300/?temple,india" },
      { name: "Golden Temple", img: "https://source.unsplash.com/400x300/?golden-temple" }
    ],
    country: [
      { name: "Japan", img: "https://source.unsplash.com/400x300/?japan" },
      { name: "UAE", img: "https://source.unsplash.com/400x300/?dubai" }
    ]
  };

  results.innerHTML = "";

  if (data[input]) {
    data[input].forEach(item => {
      results.innerHTML += `
        <div class="card">
          <h3>${item.name}</h3>
          <img src="${item.img}" width="300">
        </div>
      `;
    });
  } else {
    results.innerHTML = "<p>No results found</p>";
  }
}

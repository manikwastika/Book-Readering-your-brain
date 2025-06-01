function getdatabukukomik() {
  const data = new Request(
    "https://www.googleapis.com/books/v1/volumes?q=subject:comics&maxResults=40",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const datapi = fetch(data);

  datapi
    .then(function (data) {
      if (data.status !== 200 && data.status !== 201) {
        console.info(`error pada data API yang diambil ${data.status}`);
      } else {
        return data.json();
      }
    })
    .then(function (data) {
      const gambarkmkeks = document.getElementById("komikeks");
      const gambarkmkeks2 = document.getElementById("komikeks2");
      const gambarkmkeks3 = document.getElementById("komikeks3");
      const gambarkmkeks4 = document.getElementById("komikeks4");
      gambarkmkeks.src = data.items[15].volumeInfo.imageLinks.thumbnail;
      gambarkmkeks2.src = data.items[7].volumeInfo.imageLinks.thumbnail;
      gambarkmkeks3.src = data.items[5].volumeInfo.imageLinks.thumbnail;
      gambarkmkeks4.src = data.items[32].volumeInfo.imageLinks.thumbnail;
    });
}

function getdatabukusastra() {
  const data = new Request(
    "https://www.googleapis.com/books/v1/volumes?q=subject:literary+collections&maxResults=40",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const datapi = fetch(data);

  datapi
    .then(function (data) {
      if (data.status !== 200 && data.status !== 201) {
        console.info(`data gagal diambile kerena error ${data.status}`);
      } else {
        return data.json();
      }
    })
    .then(function (data) {
      const gambarbkbaru = document.getElementById("bkbaru");
      const gambarbkbaru2 = document.getElementById("bkbaru2");
      const gambarbkbaru4 = document.getElementById("bkbaru4");
      const gambarbkbaru3 = document.getElementById("bkbaru3");
      const gambarbkdskn = document.getElementById("diskon");
      const gambarbkdskn2 = document.getElementById("diskon2");
      const gambarbkdskn3 = document.getElementById("diskon3");
      const gambarbkdskn4 = document.getElementById("diskon4");
      gambarbkbaru.src = data.items[5].volumeInfo.imageLinks.thumbnail;
      gambarbkbaru2.src = data.items[2].volumeInfo.imageLinks.thumbnail;
      gambarbkbaru3.src = data.items[4].volumeInfo.imageLinks.thumbnail;
      gambarbkbaru4.src = data.items[6].volumeInfo.imageLinks.thumbnail;
      gambarbkdskn.src = data.items[3].volumeInfo.imageLinks.thumbnail;
      gambarbkdskn2.src = data.items[7].volumeInfo.imageLinks.thumbnail;
      gambarbkdskn3.src = data.items[8].volumeInfo.imageLinks.thumbnail;
      gambarbkdskn4.src = data.items[9].volumeInfo.imageLinks.thumbnail;
    });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .querySelectorAll(".book")
      .forEach((img) => img.classList.add("show"));
  }, 1300);
});

getdatabukusastra();

getdatabukukomik();

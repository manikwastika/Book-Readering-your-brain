function getdatabukukomik() {
  const data = new Request(
    "https://www.googleapis.com/books/v1/volumes?q=subject:graphic%20novel&maxResults=40",
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
      gambarkmkeks.src = data.items[1].volumeInfo.imageLinks.thumbnail;
      gambarkmkeks2.src = data.items[7].volumeInfo.imageLinks.thumbnail;
      gambarkmkeks3.src = data.items[5].volumeInfo.imageLinks.thumbnail;
      gambarkmkeks4.src = data.items[32].volumeInfo.imageLinks.thumbnail;

      const semuagambarkomik = [];

      for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];

        if (
          item &&
          item.volumeInfo &&
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.thumbnail
        ) {
          const datanya = item.volumeInfo.imageLinks.thumbnail;
          semuagambarkomik.push(datanya);
        }
      }

      const semuajudulbukukomik = [];

      for (let j = 0; j < data.items.length; j++) {
        const data_titles = data.items[j];

        if (
          data_titles &&
          data_titles.volumeInfo &&
          data_titles.volumeInfo.title
        ) {
          const data_title = data_titles.volumeInfo.title;
          semuajudulbukukomik.push(data_title);
        }
      }

      const elemen_judul = document.querySelectorAll(".judul_comic");
      const elemen_gambar = document.querySelectorAll(".produk_comic");

      elemen_gambar.forEach((img, index) => {
        if (semuagambarkomik[index]) {
          img.src = semuagambarkomik[index];
        }
      });
      elemen_judul.forEach((h5, index) => {
        if (semuajudulbukukomik[index + 1]) {
          h5.textContent = semuajudulbukukomik[index + 1];
        }
      });
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

      const semuagambarbukusastra = [];

      for (i = 1; i < data.items.length; i++) {
        const item = data.items[i];

        if (
          item &&
          item.volumeInfo &&
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.thumbnail
        ) {
          const gambarnya = item.volumeInfo.imageLinks.thumbnail;
          semuagambarbukusastra.push(gambarnya);
        }
      }

      const semuajudulbukusastra = [];

      for (j = 1; j < data.items.length; j++) {
        const judul_item = data.items[j];

        if (
          judul_item &&
          judul_item.volumeInfo &&
          judul_item.volumeInfo.title
        ) {
          const semuajudul = judul_item.volumeInfo.title;
          semuajudulbukusastra.push(semuajudul);
        }
      }

      const elemen_sastra = document.querySelectorAll(".produk_sastra");
      const judul_elemen = document.querySelectorAll(".judul_sastra");

      elemen_sastra.forEach((img, index) => {
        if (semuagambarbukusastra[index]) {
          img.src = semuagambarbukusastra[index];
        }
      });

      judul_elemen.forEach((h5, index) => {
        if (semuajudulbukusastra[index]) {
          h5.textContent = semuajudulbukusastra[index];
        }
      });
    });
}

function getdatabukuTeknologi() {
  const data = new Request(
    "https://www.googleapis.com/books/v1/volumes?q=subject:technology&maxResults=40",
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
        console.info(`error ${data.status}, data tidak bisa diambil`);
      } else {
        return data.json();
      }
    })
    .then(function (data) {
      const semuagambarbukuteknologi = [];

      for (i = 1; i < data.items.length; i++) {
        const item = data.items[i];

        if (
          item &&
          item.volumeInfo &&
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.thumbnail
        ) {
          const semuagambar = item.volumeInfo.imageLinks.thumbnail;
          semuagambarbukuteknologi.push(semuagambar);
        }
      }

      const semuajudulbukuteknologi = [];

      for (j = 1; j < data.items.length; j++) {
        const datanya = data.items[j];

        if (datanya && datanya.volumeInfo && datanya.volumeInfo.title) {
          const semuajudul = datanya.volumeInfo.title;
          semuajudulbukuteknologi.push(semuajudul);
        }
      }

      const elemen_gambar = document.querySelectorAll(".produk_teknologi");
      const elemen_judul = document.querySelectorAll(".judul_teknologi");

      elemen_gambar.forEach((img, index) => {
        if (semuagambarbukuteknologi[index]) {
          img.src = semuagambarbukuteknologi[index];
        }
      });

      elemen_judul.forEach((h5, index) => {
        if (semuajudulbukuteknologi[index]) {
          h5.textContent = semuajudulbukuteknologi[index];
        }
      });
    });
}

function getdatabukuPsikologi() {
  const data = new Request(
    "https://www.googleapis.com/books/v1/volumes?q=subject:psychology&maxResults=40",
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
        console.info(`tidak bisa mengambil data. error ${data.status}`);
      } else {
        return data.json();
      }
    })
    .then(function (data) {
      const semuagambarbukupsikologi = [];

      for (i = 1; i < data.items.length; i++) {
        const item = data.items[i];

        if (
          item &&
          item.volumeInfo &&
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.thumbnail
        ) {
          const semuagambar = item.volumeInfo.imageLinks.thumbnail;
          semuagambarbukupsikologi.push(semuagambar);
        }
      }

      const semuajudulbukupsikologi = [];

      for (j = 1; j < data.items.length; j++) {
        const datanya = data.items[j];

        if (datanya && datanya.volumeInfo && datanya.volumeInfo.title) {
          const semuajudul = datanya.volumeInfo.title;
          semuajudulbukupsikologi.push(semuajudul);
        }
      }

      const elemen_gambar = document.querySelectorAll(".produk_psikolog");
      const elemen_judul = document.querySelectorAll(".judul_psikolog");

      elemen_gambar.forEach((img, index) => {
        if (semuagambarbukupsikologi[index]) {
          img.src = semuagambarbukupsikologi[index];
        }
      });

      elemen_judul.forEach((h5, index) => {
        if (semuajudulbukupsikologi[index]) {
          h5.textContent = semuajudulbukupsikologi[index];
        }
      });
    });
}

function getdatabukuFiksi() {
  const data = new Request(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40",
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
        console.info(`tidak bisa mengambil data karena error ${data.status}`);
      } else {
        return data.json();
      }
    })
    .then(function (data) {
      const semuagambarbukufiksi = [];

      for (i = 1; i < data.items.length; i++) {
        const item = data.items[i];

        if (
          item &&
          item.volumeInfo &&
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.thumbnail
        ) {
          const semuagambar = item.volumeInfo.imageLinks.thumbnail;
          semuagambarbukufiksi.push(semuagambar);
        }
      }

      const semuajudulbukufiksi = [];

      for (j = 1; j < data.items.length; j++) {
        const datanya = data.items[j];

        if (datanya && datanya.volumeInfo && datanya.volumeInfo.title) {
          const semuajudul = datanya.volumeInfo.title;
          semuajudulbukufiksi.push(semuajudul);
        }
      }

      const elemen_gambar = document.querySelectorAll(".produk_fiksi");
      const elemen_judul = document.querySelectorAll(".judul_fiksi");

      elemen_gambar.forEach((img, index) => {
        if (semuagambarbukufiksi[index]) {
          img.src = semuagambarbukufiksi[index];
        }
      });

      elemen_judul.forEach((h5, index) => {
        if (semuajudulbukufiksi[index]) {
          h5.textContent = semuajudulbukufiksi[index];
        }
      });
    });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .querySelectorAll(".book")
      .forEach((img) => img.classList.add("show"));
  }, 1300);
});

// PELAJARI LAGI TENTANG LAGUU INI CHATGPTKWOKWOKWOKW
let isUserInteracted = false;
let isAudioPlayed = false;

const audio = document.getElementById("myAudio");
const kaset = document.querySelector(".kaset_lagu");

// Deteksi klik awal (untuk izinkan audio autoplay di browser)
document.addEventListener("click", () => {
  if (!isUserInteracted) {
    isUserInteracted = true;
    console.log("User sudah klik, izin play unlocked");
  }
});

// Deteksi scroll pertama dan mulai musik
window.addEventListener("scroll", () => {
  if (isUserInteracted && !isAudioPlayed) {
    audio.volume = 0.5;
    audio.loop = true;

    audio
      .play()
      .then(() => {
        isAudioPlayed = true;
        kaset.classList.add("berputar");
        console.log("Musik diputar dan looping terus!");
      })
      .catch((err) => {
        console.log("Gagal play audio:", err);
      });
  }
});

// Play/pause manual jika gambar kaset diklik
kaset.addEventListener("click", () => {
  if (!isAudioPlayed) return; // kalau belum mulai dari scroll, jangan bisa play/pause

  if (audio.paused) {
    audio.play();
    kaset.classList.add("berputar");
    console.log("Musik diputar lagi.");
  } else {
    audio.pause();
    kaset.classList.remove("berputar");
    console.log("Musik dijeda.");
  }
});

// Jika musik dijeda/berakhir manual (untuk sync animasi)
audio.addEventListener("pause", () => {
  kaset.classList.remove("berputar");
});

audio.addEventListener("ended", () => {
  kaset.classList.remove("berputar");
});

// FORM POPUP SweetAlert2
document.getElementById("pesan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  console.info(e);

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          title: "PESAN BERHASIL DIKIRIM!",
          icon: "success",
          html: `Terimakasih ${form.nama.value} atas pesan yang anda kirimkan. semoga ini bisa memberikan dampak baik kedepanya`,
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Terjadi kesalahan. Coba lagi.",
          icon: "error",
        });
      }
    })
    .catch(() => {
      Swal.fire({
        title: "Oops!",
        text: "Gagal mengirim. Coba lagi.",
        icon: "error",
      });
    });
});

const tombolmenu = document.getElementById("burgir-icon");
const navlist = document.getElementById("nav-list");

tombolmenu.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

getdatabukuFiksi();

getdatabukuPsikologi();

getdatabukuTeknologi();

getdatabukusastra();

getdatabukukomik();

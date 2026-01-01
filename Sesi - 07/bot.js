const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Hallo Aku Nara Bot Selamat datang, Siapa Nama Kamu? ",
    `Hallo ${data?.nama}, berapa usia kamu?`,
    `Oooh ${data?.usia}, alamat kamu dimana?`,
    `Oooh dari ${data?.alamat}, Masukan Email Untuk melanjutkan`,
    `Email sudah tersimpan ${data?.email}`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init == 1) {
    botDelay({ nama: jawaban.value });
  } else if (init == 2) {
    botDelay({ usia: jawaban.value });
  } else if (init == 3) {
    botDelay({ alamat: jawaban.value });
  } else if (init == 4) {
    botDelay({ email: jawaban.value });
  } else if (init == 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1250]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `terimakasih ya ${userData[0]} sudah mampir ke Nara Bot`;
  jawaban.value = "";
}

function botEnd() {
  window.location.reload();
}

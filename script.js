// ===============================
// DATA SOAL MATEMATIKA
// ===============================

const mathQuestions = [
    // MATRiks
    {
        type: "matrix",
        question: "Hitung hasil penjumlahan matriks:\n[2 3] + [1 4]",
        answer: "3 7"
    },
    {
        type: "matrix",
        question: "Hitung hasil dari matriks:\n[5 2] - [3 1]",
        answer: "2 1"
    },

    // BUNGA TUNGGAL
    {
        type: "bunga_tunggal",
        question: "Jika modal Rp1.000.000 bunga 10% per tahun, berapa bunga tunggal dalam 2 tahun?",
        answer: "200000"
    },

    // BUNGA MAJEMUK
    {
        type: "bunga_majemuk",
        question: "Modal 1.000.000 dengan bunga majemuk 10% selama 2 tahun. Berapa jumlah akhirnya?",
        answer: "1210000"
    },

    // ANUITAS
    {
        type: "anuitas",
        question: "Cicilan tetap Rp500.000 per bulan selama 12 bulan. Total pembayaran adalah?",
        answer: "6000000"
    },

    // BARISAN & DERET
    {
        type: "barisan",
        question: "Barisan aritmatika: 2, 5, 8, 11. Suku ke-5 adalah?",
        answer: "14"
    },
    {
        type: "deret",
        question: "Deret aritmatika: 2 + 5 + 8 + 11. Jumlah 4 suku pertama adalah?",
        answer: "26"
    }
];

// ===============================
// GAME MATEMATIKA
// ===============================

let mathScore = 0;

function loadMathQuestion() {
    const q = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];

    document.getElementById("math-question").innerText = q.question;
    document.getElementById("math-question").setAttribute("data-answer", q.answer);
    document.getElementById("math-answer").value = "";
    document.getElementById("math-result").innerHTML = "";
}

function checkMath() {
    const user = document.getElementById("math-answer").value.trim().toLowerCase();
    const benar = document.getElementById("math-question").getAttribute("data-answer").toLowerCase();

    if (user === benar) {
        mathScore++;
        document.getElementById("math-result").innerHTML =
            "<span style='color:green;font-weight:bold;'>Benar!</span>";
    } else {
        document.getElementById("math-result").innerHTML =
            "<span style='color:red;font-weight:bold;'>Salah! Jawaban: " + benar + "</span>";
    }

    document.getElementById("math-score").innerText = mathScore;

    setTimeout(loadMathQuestion, 1500);
}

loadMathQuestion();




// ===============================
// GAME BAHASA INGGRIS (Tetap)
// ===============================

const englishQuestions = [
    { question: "Apa arti 'dog' ?", answer: "anjing" },
    { question: "Apa arti 'cat' ?", answer: "kucing" },
    { question: "Apa arti 'apple' ?", answer: "apel" },
    { question: "Apa arti 'book' ?", answer: "buku" },
    { question: "Apa arti 'table' ?", answer: "meja" }
];

let engScore = 0;

function loadEnglish() {
    const q = englishQuestions[Math.floor(Math.random() * englishQuestions.length)];
    document.getElementById("eng-question").innerText = q.question;
    document.getElementById("eng-question").setAttribute("data-answer", q.answer);
    document.getElementById("eng-answer").value = "";
    document.getElementById("eng-result").innerHTML = "";
}

function checkEnglish() {
    const user = document.getElementById("eng-answer").value.trim().toLowerCase();
    const benar = document.getElementById("eng-question").getAttribute("data-answer");

    if (user === benar) {
        engScore++;
        document.getElementById("eng-result").innerHTML =
            "<span style='color:green;font-weight:bold;'>Benar!</span>";
    } else {
        document.getElementById("eng-result").innerHTML =
            "<span style='color:red;font-weight:bold;'>Salah! Jawaban: " + benar + "</span>";
    }

    document.getElementById("eng-score").innerText = engScore;

    setTimeout(loadEnglish, 1500);
}

loadEnglish();

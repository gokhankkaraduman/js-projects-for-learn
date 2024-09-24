let number; // Rastgele sayı
let yourGuess; // Kullanıcının tahmin sayısı
const messageElement = document.getElementById('message');
const submitButton = document.getElementById('sendButton');
const resetButton = document.getElementById('resetButton');
const guessInput = document.getElementById("number");
const trueGuessContent = document.getElementById("soruText");

function startGame() {
    number = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arası rastgele sayı
    yourGuess = 0; // Tahmin sayısını sıfırla
    messageElement.textContent = ""; // Mesajı temizle
    guessInput.value = ""; // Giriş alanını temizle
    submitButton.disabled = false; // Butonu etkinleştir
    messageElement.style.backgroundColor = ""; // Arka plan rengini sıfırla
    messageElement.style.borderRadius = ""; // Kenar yuvarlamasını sıfırla
    trueGuessContent.textContent = "?"; // Doğru tahmin mesajını sıfırla
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    let guessText = Number(guessInput.value);
    yourGuess++; // Her tahminde artır

    // 10 tahmin hakkı kontrolü
    if (yourGuess === 10) {
        messageElement.textContent = "Game Over!";
        messageElement.style.backgroundColor = "red";
        messageElement.style.borderRadius = "20px";
        submitButton.disabled = true; // Oyun bitince butonu devre dışı bırak
        return;
    }

    // Tahmin kontrolleri
    if (guessText > number) {
        messageElement.textContent = "Your guess is too high! Try a lower number.";
        messageElement.style.backgroundColor = "red";
        messageElement.style.borderRadius = "3px";
    } else if (guessText < number) {
        messageElement.textContent = "Your guess is too low! Try a higher number.";
        messageElement.style.backgroundColor = "red";
        messageElement.style.borderRadius = "3px";
    } else {
        messageElement.textContent = `Congratulations, you won! You guessed correctly on your ${yourGuess}th try.`;
        messageElement.style.backgroundColor = "green";
        messageElement.style.borderRadius = "20px";
        trueGuessContent.textContent = number; // Doğru tahmini göster
        submitButton.disabled = true; // Doğru tahmin sonrası butonu devre dışı bırak
    }

    // Tahmin yanlışsa input alanını sıfırla
    if (guessText !== number) {
        guessInput.value = ""; // Giriş alanını temizle
    }
});

resetButton.addEventListener('click', function() {
    startGame(); // Oyun sıfırlama butonuna basıldığında oyunu başlat
    messageElement.textContent = "Game has been reset!"; // Kullanıcıya bilgi mesajı
    messageElement.style.backgroundColor = ""; // Arka plan rengini sıfırla
    messageElement.style.borderRadius = ""; // Kenar yuvarlamasını sıfıla
});

startGame(); // Sayfa yüklendiğinde oyunu başlat


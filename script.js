function silnia(n) { //definiujesz funkcję o nazwie silnia, która przyjmuje argument n.


let wynik = 1; //tworzysz zmienną wynik i ustawiasz ją na 1. To będzie wynik końcowy (silnia zaczyna się od 1).


for (let i = 1; i <= n; i++) { //pętla, która zaczyna od 1 i idzie do n włącznie.



wynik *= i;

}

return wynik; // zwracasz wynik (czyli silnię liczby n).



}

function sprawdzSilnie() { // definiujesz funkcję, która nie ma argumentów.


const wynikSilni = silnia(5); // wywołujesz funkcję silnia z argumentem 5 i zapisujesz wynik w wynikSilni.

console.log("5! =", wynikSilni); //wypisujesz w konsoli tekst "5! =" oraz wynik silni z 5.


document.getElementById("wynik").textContent = "5! = " + wynikSilni; //zmieniasz zawartość tekstową elementu HTML o id wynik na "5! = wynik" (np. "5! = 120")

}
function fibonacci(n) { //funkcja przyjmuje liczbę n.
    if (n < 0) return null; //jeśli n jest ujemne, funkcja zwraca null (brak sensu).


    if (n === 0) return 0; //jeśli n jest 0, zwraca 0 (0-ty wyraz ciągu).

    if (n === 1) return 1; //jeśli n jest 1, zwraca 1 (1-szy wyraz ciągu).

    return fibonacci(n - 1) + fibonacci (n - 2); // w przeciwnym razie wywołuje siebie rekurencyjnie i zwraca sumę dwóch poprzednich wyrazów.

}
function dziesietnyNaBinarny(liczba) { //funkcja przyjmuje liczbę dziesiętną.


    return liczba.toString(2); //zamienia liczbę na ciąg znaków w systemie binarnym (podstawa 2).

}
function binarnyNaDziesietny(binarny) { //unkcja przyjmuje parametr binarny, który jest tekstem reprezentującym liczbę w systemie binarnym.


    return parseInt(binarny.toString(), 2) // parseInt konwertuje tekst na liczbę całkowitą, a drugi argument 2 mówi, że tekst jest w systemie dwójkowym.

}
 console.log("13 w systemie binarnym:", dziesietnyNaBinarny(13)); //wyświetla w konsoli tekst "13 w systemie binarnym:" oraz wynik konwersji 13 na system binarny (powinno być "1101").
console.log("1101 w systemie dziesietnym:", binarnyNaDziesietny("1101"));//wyświetla tekst "1101 w systemie dziesietnym:" oraz wynik konwersji tekstu "1101" na liczbę dziesiętną (powinno być 13).

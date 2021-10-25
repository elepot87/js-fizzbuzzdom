// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (vedi grafica allegata).

// Da 1 a 100 box nel DOM

// Seleziono il contenitore degli square
const row = document.querySelector("div.row");

// Generare gli square

for (let i = 1; i <= 100; i++) {
  // inserisci nuovo square con inner HTML
  //   row.innerHTML += `<div class=square>${i}</div>`;

  //   Inserisco square con append
  let div = document.createElement("div");

  div.append(`${i}`);

  row.append(div);

  //   Inserisco le mie condizioni, a seconda se sono vere o false appendo una classe diversa all'elemento div

  if (i % 3 == 0 && i % 5 == 0) {
    div.classList.add("square", "fizzbuzz");
  } else if (i % 3 == 0) {
    div.classList.add("square", "fizz");
  } else if (i % 5 == 0) {
    div.classList.add("square", "buzz");
  } else {
    div.classList.add("square", "classic");
  }
}

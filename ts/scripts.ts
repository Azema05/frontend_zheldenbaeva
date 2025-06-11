//Модуль 2, задание 3

// function showCard(card) {
//   let infCards = document.getElementById("information-cards");

//   if (!infCards) {
//     console.error("Элемент #information-cards не найден!");
//     return;
//   }

//   const newCard = `
//     <div class="card">
//       <p class="card_text">${card.body}</p>
//       <div class="card_footer">
//         <img class="card_avatar" src="/img/image 9.png" alt="avatar">
//         <p class="card_person">
//           <span class="card_person-name">${card.name}</span>
//           <small class="card_person-type">User</small>
//         </p>
//       </div>
//     </div>
//   `;
//   infCards.innerHTML += newCard;
// }

// function showAllCards(cards) {
//   for (let i = 0; i < cards.length; i++) {
//     showCard(cards[i]);
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
//     .then(response => response.json())
//     .then(data => {
//       console.log('Полученные данные:', data);
//       showAllCards(data);
//     })
//     .catch(error => console.error('Ошибка при получении данных:', error));
// });



// Модуль 2, задание 5
interface Card {
  name: string;
  body: string;
}

function showCard(card: Card): void {
  const infCards = document.getElementById("information-cards");
  if (!infCards) {
    console.error("Элемент #information-cards не найден!");
    return;
  }

  const newCard = `
    <div class="card">
      <p class="card_text">${card.body}</p>
      <div class="card_footer">
        <img class="card_avatar" src="/img/image 9.png" alt="avatar">
        <p class="card_person">
          <span class="card_person-name">${card.name}</span>
          <small class="card_person-type">User</small>
        </p>
      </div>
    </div>
  `;

  infCards.innerHTML += newCard;
}

function showAllCards(cards: Card[]): void {
  for (const card of cards) {
    showCard(card);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
    .then(response => response.json())
    .then((data: Card[]) => {
      console.log('Полученные данные:', data);
      showAllCards(data);
    })
    .catch(error => console.error('Ошибка при получении данных:', error));
});

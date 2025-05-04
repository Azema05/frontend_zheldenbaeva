// const cards = {
//     card_1: {
//       card_text: "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
//       card_avatar: "/img/image 9.png",
//       card_person_name: "Andrew Huang",
//       card_person_type: "Artist"
//     },
//     card_2: {
//       card_text: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
//       card_avatar: "/img/image 9_1.png",
//       card_person_name: "KSHMR",
//       card_person_type: "Artist"
//     },
//     card_3: {
//       card_text: "It's been fun to dive into Splice's creator community and explore tools that support my own creative process.",
//       card_avatar: "/img/image 9_2.png",
//       name: "Kesha Lee",
//       card_person_type: "Artist"
//     },
//     card_4: {
//       card_text: "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
//       card_avatar: "/img/image 9.png",
//       card_person_name: "Andrew Huang",
//       card_person_type: "Artist"
//     }
//   };

//   function showCard(card) {
//     let infCards = document.getElementById("information-cards");
//     console.log(infCards);
//     let newCard = `
//     <div class="card">
//         <p class="card_text">${card.card_text}</p>
//         <div class="card_footer">
//           <img class="card_avatar" src="${card.card_avatar}" alt="avatar">
//           <p class="card_person">
//             <span class="card_person-name">${card.card_person_name}</span>
//             <small class="card_person-type">${card.card_person_type}</small>
//           </p>
//         </div>
//       </div>
//     `;
//     infCards.innerHTML += newCard;
//   }

//   function showAllCards(cards) {
//     const cardArray = Object.values(cards);
//     for (let i = 0; i < cardArray.length; i++) {
//       showCard(cardArray[i]);
//     }
//   }
//   showAllCards(cards)




  // const cards = {
//     card_1: {
//       card_text: "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
//       card_avatar: "/img/image 9.png",
//       card_person_name: "Andrew Huang",
//       card_person_type: "Artist"
//     },
//     card_2: {
//       card_text: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
//       card_avatar: "/img/image 9_1.png",
//       card_person_name: "KSHMR",
//       card_person_type: "Artist"
//     },
//     card_3: {
//       card_text: "It's been fun to dive into Splice's creator community and explore tools that support my own creative process.",
//       card_avatar: "/img/image 9_2.png",
//       card_person_name: "Kesha Lee",
//       card_person_type: "Artist"
//     },
//     card_4: {
//       card_text: "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
//       card_avatar: "/img/image 9.png",
//       card_person_name: "Andrew Huang",
//       card_person_type: "Artist"
//     }
//   };
  
//   function createCard(card) {
//     return `
//       <div class="card">
//         <p class="card_text">${card.card_text}</p>
//         <div class="card_footer">
//           <img class="card_avatar" src="${card.card_avatar}" alt="avatar">
//           <p class="card_person">
//             <span class="card_person-name">${card.card_person_name}</span>
//             <small class="card_person-type">${card.card_person_type}</small>
//           </p>
//         </div>
//       </div>
//     `;
//   }
  
//   function showCard(containerSelector, card) {
//     const container = document.querySelector(containerSelector);
  
//     if (!container) {
//       console.error("Контейнер не найден!");
//       return;
//     }
  
//     const newCard = createCard(card);
//     container.insertAdjacentHTML("beforeend", newCard);
//   }
  
//   function showAllCards(cards, containerSelector) {
//     const cardArray = Object.values(cards); // Преобразуем объект в массив значений
  
//     cardArray.forEach(card => {
//       showCard(containerSelector, card);
//     });
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const cardsData = Object.values(cards); // Преобразуем объект в массив значений
  
//     // Разделяем карточки на две группы
//     const firstGroup = cardsData.slice(0, 2); // Первые две карточки
//     const secondGroup = cardsData.slice(2);  // Остальные карточки
  
//     // Вставляем карточки в соответствующие контейнеры
//     showAllCards(Object.fromEntries(firstGroup.map((card, index) => [`card_${index + 1}`, card])), ".img1_msg_sec6");
//     showAllCards(Object.fromEntries(secondGroup.map((card, index) => [`card_${index + 3}`, card])), ".img2_msg_sec6");
//   });
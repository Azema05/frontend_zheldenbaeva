const cards = {
    card_1: {
      card_text: "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
      card_avatar: "/img/image 9.png",
      card_person_name: "Andrew Huang",
      card_person_type: "Artist"
    },
    card_2: {
      card_text: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
      card_avatar: "/img/image 9_1.png",
      card_person_name: "KSHMR",
      card_person_type: "Artist"
    },
    card_3: {
      card_text: "It's been fun to dive into Splice's creator community and explore tools that support my own creative process.",
      card_avatar: "/img/image 9_2.png",
      name: "Kesha Lee",
      card_person_type: "Artist"
    },
    card_4: {
      card_text: "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
      card_avatar: "/img/image 9.png",
      card_person_name: "Andrew Huang",
      card_person_type: "Artist"
    }
  };

  function showCard(card) {
    let infCards = document.getElementById("information-cards");
    console.log(infCards);
    let newCard = `
    <div class="card">
        <p class="card_text">${card.card_text}</p>
        <div class="card_footer">
          <img class="card_avatar" src="${card.card_avatar}" alt="avatar">
          <p class="card_person">
            <span class="card_person-name">${card.card_person_name}</span>
            <small class="card_person-type">${card.card_person_type}</small>
          </p>
        </div>
      </div>
    `;
    infCards.innerHTML += newCard;
  }

  function showAllCards(cards) {
    const cardArray = Object.values(cards);
    for (let i = 0; i < cardArray.length; i++) {
      showCard(cardArray[i]);
    }
  }
  showAllCards(cards)

// document.addEventListener('DOMContentLoaded', function () {
//   new Swiper('.mySwiper', {
//       loop: true,

//       pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//       },

//       navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//       },

//       autoplay: {
//           delay: 3000,
//       },
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      speed: 1000,
  });
});
import { addToCart, updateCartBadge } from '../scripts/cartbadge.js';

export const btnMore = document.querySelector(".more");
  btnMore.addEventListener("click", () => {
    const startIndex = document.querySelectorAll("#books li").length;
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:Business&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const books = data.items.map((item) => {
          const book = {
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            thumbnail: item.volumeInfo.imageLinks.thumbnail,
            previewLink: item.volumeInfo.previewLink,
            averageRating: item.volumeInfo.averageRating,
            ratingsCount: item.volumeInfo.ratingsCount,
            description: item.volumeInfo.description,
            price: item.saleInfo && item.saleInfo.retailPrice,
          };
          return book;
        });
        const bookList = document.querySelector("#books");
    books.forEach((book) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const a = document.createElement("a");
      const div = document.createElement("div");
      const autorText = document.createElement("p");
      const titleText = document.createElement("p");
      const text = document.createElement("p");
      const rating = document.createElement("span");
      const view = document.createElement("span");
      const btn = document.createElement("button");
      const autor = document.createTextNode(book.authors);
      const title = document.createTextNode(book.title);
      const ratingText = book.averageRating
        ? document.createTextNode(book.averageRating)
        : document.createTextNode("");
      const viewText = book.ratingsCount
        ? document.createTextNode(book.ratingsCount)
        : document.createTextNode("");
      const textContent = book.description
        ? document.createTextNode(book.description)
        : document.createTextNode("");
      const priceText =
        book.saleInfo && book.saleInfo.retailPrice
          ? document.createTextNode(
              book.price && `${book.price.amount} ${book.price.currencyCode}`
            )
          : document.createTextNode("");
      const priceElem = document.createElement("span");
      const textBtn = document.createTextNode("buy now");
      (img.src = book.thumbnail), (img.className = "books__img");
      div.className = "books__info";
      autorText.className = "books__autor";
      titleText.className = "books__title";
      text.className = "books__text";
      rating.className = "books__rating";
      view.className = "books__views";
      (priceElem.className = "books__price"), priceElem.appendChild(priceText);
      btn.className = "books__btn";
      btn.onclick = addToCart;
      btn.addEventListener('click', () => {
        if (btn.textContent === "buy now") {
          btn.textContent = "in the card";
        } else {
          btn.textContent = "buy now";
        }
        btn.classList.toggle('books__btn_2');
      });
      (a.href = book.previewLink), (a.target = "_blank");
      a.appendChild(img);
      autorText.appendChild(autor);
      titleText.appendChild(title);
      rating.appendChild(ratingText);
      view.appendChild(viewText);
      text.appendChild(textContent);
      btn.appendChild(textBtn);
      div.appendChild(autorText);
      div.appendChild(titleText);
      div.appendChild(rating);
      div.appendChild(view);
      div.appendChild(text);
      div.appendChild(priceElem);
      div.appendChild(btn);
      li.appendChild(a);
      li.appendChild(div);
      li.appendChild(document.createElement("br"));
      bookList.appendChild(li);
    });
})
  })
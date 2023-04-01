const header = document.querySelector('.header');
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
const tabs = document.getElementById("categories__list");
const tabsEl = document.querySelectorAll(".categories__item");
const btnMore = document.querySelector(".more");
import './style/freestyle.css'
import './style/style.scss'
import './assets/banner1.png'
import './assets/banner2.png'
import './assets/banner3.png'
import './assets/promo1.png'
import './assets/promo2.png'
import './assets/search.svg'
import './assets/shop-bag.svg'
import './assets/user.svg'

let index = 0;
const intervalTime = 5000; 
let slideInterval;

function handleScroll() {
  if (window.pageYOffset > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

window.addEventListener('scroll', handleScroll);
const activeSlide = (s) => {
  for (let i = 0; i < slides.length; i++) {
    if (i === s) {
      slides[i].classList.add("active");
    } else {
      slides[i].classList.remove("active");
    }
  }
};

const activeDot = (s) => {
  for (let i = 0; i < dots.length; i++) {
    if (i === s) {
      dots[i].classList.add("dot_active");
    } else {
      dots[i].classList.remove("dot_active");
    }
  }
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  });
});

slideInterval = setInterval(nextSlide, intervalTime);
const changeClass = (el) => {
  for (let n = 0; n < tabs.children.length; n++) {
    tabs.children[n].classList.remove("categories__item_active");
  }
  el.classList.add("categories__item_active");
};
for (let b = 0; b < tabsEl.length; b++) {
  tabsEl[b].addEventListener("click", (e) => {
    changeClass(e.target);
  });
}
let cartCount = 0;

const updateCartBadge = () => {
  const badge = document.querySelector('.cart-badge');
  if (cartCount > 0) {
    badge.classList.add('cart-badge_active');
    badge.textContent = cartCount;
  } else {
    badge.classList.remove('cart-badge_active');
  }
};

const addToCart = () => {
  const btn = event.target;
  if (btn.textContent === "buy now") {
    cartCount++;
    updateCartBadge();
  }else if(btn.textContent === "in the card") {
    cartCount--;
    updateCartBadge();
  }
};
const fetchMoreBooks = () => {
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
    .catch((error) => console.error(error));
};

btnMore.addEventListener("click", fetchMoreBooks);

const url =
  "https://www.googleapis.com/books/v1/volumes?q=subject:Business&printType=books&startIndex=0&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw";
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
  .catch((error) => console.error(error));

tabs
  .querySelectorAll(".categories__item")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const category = event.currentTarget.textContent.trim();
      const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&printType=books&startIndex=0&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const bookList = document.querySelector("#books");
          bookList.innerHTML = "";
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
            const btn = document.createElement("a");
            const autor = document.createTextNode(book.authors);
            const title = document.createTextNode(book.title);
            const ratingText = document.createTextNode(book.averageRating);
            const viewText = document.createTextNode(book.ratingsCount);
            const textContent = document.createTextNode(book.description);
            const textBtn = document.createTextNode("buy now");
            if (book.price) {
              const price = document.createElement("span");
              price.className = "books__price";
              const priceText =
              book.saleInfo && book.saleInfo.retailPrice
                ? document.createTextNode(
                    book.price && `${book.price.amount} ${book.price.currencyCode}`
                  )
                  : document.createTextNode("");
              const priceElem = document.createElement("span");
              div.appendChild(price);
            }
            img.src = book.thumbnail;
            img.className = "books__img";
            div.className = "books__info";
            autorText.className = "books__autor";
            titleText.className = "books__title";
            text.className = "books__text";
            rating.className = "books__rating";
            view.className = "books__views";
            (btn.className = "books__btn");
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
            div.appendChild(btn);
            li.appendChild(a);
            li.appendChild(div);
            li.appendChild(document.createElement("br"));
            bookList.appendChild(li);
          });
        });
    });
  })
  .catch((error) => console.error(error));

tabs
  .querySelectorAll(".categories__item")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const category = event.currentTarget.textContent.trim();
      const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&printType=books&startIndex=0&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const bookList = document.querySelector("#books");
          bookList.innerHTML = "";
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
            const btn = document.createElement("a");
            const autor = document.createTextNode(book.authors);
            const title = document.createTextNode(book.title);
            const ratingText = document.createTextNode(book.averageRating);
            const viewText = document.createTextNode(book.ratingsCount);
            const textContent = document.createTextNode(book.description);
            const textBtn = document.createTextNode("buy now");
            if (book.price) {
              const price = document.createElement("span");
              price.className = "books__price";
              const priceText =
              book.saleInfo && book.saleInfo.retailPrice
                ? document.createTextNode(
                    book.price && `${book.price.amount} ${book.price.currencyCode}`
                  )
                  : document.createTextNode("");
              const priceElem = document.createElement("span");
              div.appendChild(price);
            }
            img.src = book.thumbnail;
            img.className = "books__img";
            div.className = "books__info";
            autorText.className = "books__autor";
            titleText.className = "books__title";
            text.className = "books__text";
            rating.className = "books__rating";
            view.className = "books__views";
            (btn.className = "books__btn");
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
            div.appendChild(btn);
            li.appendChild(a);
            li.appendChild(div);
            li.appendChild(document.createElement("br"));
            bookList.appendChild(li);
          });
        });
    });
  })
  .catch((error) => console.error(error));


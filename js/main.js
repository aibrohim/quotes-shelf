function makeStr(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Atomic Habits",
          description: "Helps to start consistent habits",
          img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          onSale: false,
        },
        {
          id: 2,
          title: "Ar-Rohiq ul-Mahtum",
          description: "Syra of Rasululloh sollallohu alayhi vasallam",
          img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          onSale: true,
        },
      ],
    };
  },
  methods: {
    handleRandomBookClick() {
      this.books = [
        {
          id: Math.floor(Math.random() * 1000),
          title: makeStr(Math.floor(Math.random() * 100)),
          description: makeStr(Math.floor(Math.random() * 100)),
        },
        ...this.books,
      ];
    },
    handleDeleteBookClick(id) {
      console.log(id);
      const deletingBookIndex = this.books.findIndex((book) => book.id === id);

      this.books = [
        ...this.books.slice(0, deletingBookIndex),
        ...this.books.slice(deletingBookIndex + 1),
      ];
    },
  },
});

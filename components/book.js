app.component("book-item", {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDeleteBookClick(bookId) {
      this.$emit("onDeleteClick", bookId);
    },
  },
  template:
    /* html */
    `
      <li>
        <h1>{{ book.title }}</h1>
        <p>{{ book.description }}</p>
        <button
          @click="handleDeleteBookClick(book.id)"
          :disabled="!book.onSale"
          class="hello"
          :class="{ disable: !book.onSale, enable: book.onSale }"
        >
          DELETE
        </button>
        <a :href="img" target="_blank">
          <img :src="book.img" :alt="book.description" />
        </a>
        <p v-if="book.onSale">This book is on sale</p>
        <p v-else="book.onSale">This book is not on sale</p>
      </li>
    `,
});

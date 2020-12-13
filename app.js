Vue.createApp({
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
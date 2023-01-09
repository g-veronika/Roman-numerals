<template>
  <main>
    <h1>Roman numerals</h1>
    <p>Enter an integer number from 0 to 100</p>
    <form @submit.prevent="">
      <input
        v-model="userInput"
        ref="inputElement"
        type="number"
        name="number-form"
        required
        min="0"
        max="100"
      />
      <button @click="submitForm" type="submit">Convert</button>
    </form>
    <div class="container-result">
      <div v-if="result !== ''" class="show-result">
        {{ result }}
      </div>
      <div v-if="zero" class="error">Roman numerals do not include the number 0 🤔</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const userInput = ref();

// Final result is a String containing a roman numeral
let result = ref("");

// inputElement is used to autofocus the input
const inputElement = ref();
const zero = ref(false);

const submitForm = async () => {
  // Before converting we make sure to clear the result which we had before
  result.value = "";
  // Converting userInput from String to a Number
  const latinNumber = Number(userInput.value);

  // Double verification: user input can't be negative, undefined or >100 number
  if (latinNumber < 0 || latinNumber > 100 || userInput.value === undefined) {
    return;
  }

  // Error message displayed when user input is 0
  if (userInput.value === 0) {
    zero.value = true;
  } else {
    zero.value = false;

    // If user input is correct we open connection to the API using SSE communication
    const eventSource = new EventSource(`http://localhost:3000/api/convert/${latinNumber}`);

    // We listen to server messages
    eventSource.onmessage = (message) => {
      result.value = message.data;
      // We close the connection with the server once we've got the result
      eventSource.close();
    };
  }
};

// Autofocus
onMounted(() => {
  inputElement.value.focus();
});
</script>

<style lang="scss">
html {
  font-family: effra;
  background-color: #f8f5f1;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  h1 {
    margin-top: 3rem;
  }

  p {
    font-size: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 1rem;
      font-size: 1.5rem;
      padding: 1rem;
      cursor: pointer;
      box-sizing: border-box;
      font-size: 16px !important;
      font-weight: 700;
      color: #000 !important;
      text-transform: uppercase;
      cursor: pointer;
      background-color: transparent;
      border: 1px #000 solid;
      border-radius: 2px;
      transition: all 0.2s ease-out;

      &:hover {
        font-weight: 700;
        color: #fff !important;
        text-transform: uppercase;
        cursor: pointer;
        background-color: #000;
        border: 1px #000 solid;
        border-radius: 2px;
        transition: all 0.2s ease-out;
      }
    }

    input {
      border-radius: 2px;
      padding: 0.5rem 1rem;
      font-size: 16px;
      text-align: center;
    }
  }
  .container-result {
    height: 200px;

    .show-result {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 700;
      width: 200px;
      background: white;
      text-align: center;
      padding: 1rem;
      border-radius: 2px;
    }

    .error {
      font-size: 19px;
      margin-top: 1rem;
      color: #ff3b30;
    }
  }
}
</style>

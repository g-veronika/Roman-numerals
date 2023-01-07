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
import { inject, onMounted, ref } from "vue";

const $http: any = inject("$http");
const userInput = ref();
let result = ref("");
const inputElement = ref();
const zero = ref(false);

const submitForm = async () => {
  result.value = "";
  const latinNumber = Number(userInput.value);

  if (latinNumber < 0 || latinNumber > 100) {
    return;
  }
  if (userInput.value === 0) {
    zero.value = true;
  } else {
    zero.value = false;

    // await fetch(`http://localhost:3000/api/convert/${userInput.value}`)
    //   .then((res) => res.json())
    //   .then((data) => (result.value = data.msg))
    //   .catch((error) => console.log(error));

    // Ajax request
    try {
      const { data } = await $http.get(`http://localhost:3000/api/convert/${latinNumber}`);
      result.value = data.msg;
    } catch (error) {
      console.log(error);
    }
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

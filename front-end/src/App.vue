<template>
  <main>
    <h1>Roman numerals</h1>
    <p>Enter an integer number from 0 to 100</p>
    <form @submit.prevent="">
      <input v-model="userInput" ref="inputElement" type="number" name="number-form" required min="0" max="100" />
      <button @click="submitForm" type="submit">Convert</button>
      <div class="container-result">
        <div>
          {{ result }}
        </div>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';

const userInput = ref()
let result = ref('');
const inputElement = ref()


const convertToRoman = (userNumber: number) => {

  const arabicToRoman = {
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    }


  for (const arabic in arabicToRoman) {
      while (userNumber >= arabicToRoman[arabic]) {
          result.value += arabic;
          userNumber -= arabicToRoman[arabic];
      }
  }

  return result;
}

const submitForm = () => {
  result.value = ''

  convertToRoman(userInput.value)
}

  // Autofocus
  onMounted(() => {
    inputElement.value.focus()
  })

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
  }

}

</style>

<template>
  <main>
    <h1>Roman numerals</h1>
    <p>Enter an integer number from 0 to 100</p>
    <form>
      <input type="number" name="number-form" required min="0" max="100" />
      <button type="submit">Convert</button>
      <div class="container-result">
        <div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts"></script>

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

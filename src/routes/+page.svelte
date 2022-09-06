<script>
  let text = 'Homepage';
</script>

<main>
  <div class="container">
    <h1>{text}</h1>
    <input bind:value={text}>
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
  }

  .container > * {
    width: 100%;
    max-width: 700px;
  }
</style>
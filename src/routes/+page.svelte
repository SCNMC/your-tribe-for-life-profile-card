<script>
  import * as prismicH from '@prismicio/helpers';
  export let data;

  const {  document }  = data
</script>

<main>
  <div class="header container" style="background-image: url('{document.data.image.url}')">	 
    <h1>
      {document.data.title}
    </h1>
  </div>
  <div class="container">
    <div class="text">
      {@html prismicH.asHTML(document.data.content)}
    </div>
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
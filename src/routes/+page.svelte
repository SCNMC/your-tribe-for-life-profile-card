<script>
  import * as prismicH from '@prismicio/helpers';
  export let data;

  const {  document }  = data
</script>

<!-- <main>
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
</main> -->

<main>
  <section id="container">
      <div class="card">      
        <div class="front side">
          <p class="text"> {@html prismicH.asHTML(document.data.basic_pokemon)}</p>
          <h1> {document.data.title}</h1>
          
          <!-- <h1 class="logo">Shauri Maigua</h1>
          <ul class="card_info">
            <li> Nickname:</li>
            <li> Surname: </li>
            <li> Github:</li>
            <li> Bio:</li>
            <li> Url:</li> 
          </ul>
          <ul class="info_text">
            <li id="nickName"></li>
            <li id="surName"></li>
            <li id="githubHandle"></li>
            <li id="bio"></li>
            <li id="url"></li>
            </ul> -->
        </div>
        
        <section class="back side">
        
          <p>1702199812345<p>
          </section>
        </div>
    </section>
    </main>
  


<style>
 
 h1{
  color: black;
  padding-left: 1em;
  margin-top: -.5em;
 }
 p{
  padding-left: 1.5em;
 }
#container {
  /* Styling */  
  perspective: 800px;
  font-family: 'Kalam';
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;


  /* Center it */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  /* Styling */
  width: 30.8em;
  height:45em;
  /* background: linear-gradient(to bottom, black 60%, #4096ee 10%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);   */
  /* Card flipping effects */
  background-image: url('http://img06.deviantart.net/0614/i/2012/106/a/e/classic_pkmn_tcg_texture_pack_by_flamingclaw-d4wcj31.png');
  background-size: 115%;
  background-position: center;
  transform-style: preserve-3d;
  transition: 0.6s; 
  border: 20px solid gold;
  border-radius: 1em;
}
.side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  /* Fix Chrome rendering bug */
  transform: rotate(0deg) translateZ(1px);
}

/* Flip the card on hover */
#container:hover .card,
.back {
  transform: rotateY(-180deg) translateZ(1px);
}

/* Front styling */
.card_info{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-weight: bold;
  color: #000000;
}
/* Back styling */
.back {
  background: #4096ee;
}
</style>
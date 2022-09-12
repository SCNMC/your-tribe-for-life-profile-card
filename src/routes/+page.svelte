<script>
  import * as prismicH from '@prismicio/helpers';
  export let data;
  const {  document }  = data
</script>

<main>
  <section id="container">
      <div class="card">      
        
        <div class="front side">

       <header>
          <p class="text"> {@html prismicH.asHTML(document.data.basic_pokemon)}</p>
          <h1> {document.data.title}</h1>
          <p class="hp"> {@html prismicH.asText(document.data.hp)}</p>
          <img src={document.data.watericon.url} alt="water-icon">
        </header>

        <section class="hero">
          <img src={document.data.image.url} alt="my profile photo">
          <p class="short-info"> {@html prismicH.asText(document.data.shortinfo)}</p>
        </section>

        <section class="main-info">
          <img src={document.data.watericon.url} alt="water-icon">
          <p class="bio-info"> {@html prismicH.asText(document.data.bioinfo)}</p>
          <p class="damage"> {@html prismicH.asText(document.data.damage)}</p>
        </section>

      <section class="stats">
        <p>weakness</p>
        <p>resistance</p>
        <p>retreat cost</p>
        <img src={document.data.fire.url} alt="fire-icon">
      </section>

      <footer>
        <p>its newly grown legs prevents it from running. <br> it appears to prefer swimming over trying to stand. Lv 100 #60</p>
        <div>
          <p>illus. Shauri Maigua</p>
          <p>© Shauri Maigua, 1998</p>
          <p>1/1</p>
        </div>
      </footer>
      
        </div> 
        
        <section class="back side">
          <img src="/assets/images/pokemonback.png" alt="">

        </section>

      </div>
    </section>


    </main>
  


<style>
 
header{
display: flex;
flex-direction: row;
}
 h1 {
  position: absolute;
  color: black;
  padding: .5em;
  padding-left: .9em;
  font-weight: bold;
 }
 
 .text{
  margin-top: .3em;
  padding-left: 1.7em;
  font-size: 13px;
 }

 .hp{
  padding-top: .2em;
  padding-left: 5.4em;
  font-size: 24px;
  color: #e00000;
 }

 img{
  height: 28px;
 }

 header > img{
  margin-top: 1.7em;
 }

 .hero{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 1.8em; */
  padding-top: 1.5em;
  margin-top: -4.8em;
 }

 .hero p{
 font-size: 10px;
 padding: .6em;
 padding-left: 3.8em;
width: 36em;
height: 2.3em;
background: linear-gradient(to right, #d1b000 0%, #d1b000 1%, #ad9200 1%, gold 49%, #ad9200 99%, #d1b000 99%, #d1b000 100%);
 }

 .hero img{
  width: 90%;
  height: 19em;
  border: 10px solid transparent;
  -webkit-border-image: linear-gradient(to bottom right, #9e8500 0%, #ebc600 25%, #9e8500 50%, #ebc600 75%, #9e8500 100%);
  -moz-border-image: linear-gradient(to bottom right, #9e8500 0%, #ebc600 25%, #9e8500 50%, #ebc600 75%, #9e8500 100%);
   border-image: linear-gradient(to bottom right, #9e8500 0%, #ebc600 25%, #9e8500 50%, #ebc600 75%, #9e8500 100%);
   border-image-slice: 1;
   box-shadow: 3px 3px 25px 0 black;
   margin-top: 2em;
 }

 .main-info{
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 1em;
 width: 95%;
 border-bottom: solid 3px #000000;
 }
 .main-info{
  margin: 0 auto;
 }

 .bio-info{
  font-size: 16px;
 }
 .damage{
  font-size: 25px;
 }

 .main-info img{
margin-top: .3em;
padding-right: 1em;
 }

 .stats{
  display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    width: 95%;
    padding-left: 1.5em;
    margin-top: -.4em;
 }

 .stats img{
  position: absolute;
  margin:1.5em;
 }

 .stats p{
  font-size: 10px;
  font-weight: bold;
 }

 footer > p{

    width:60em;
    border: 3px solid transparent;
    padding: .5em;
    line-height: 7px;
    font-size: 7px;
    font-weight: bold;
    font-style: italic;
    -webkit-border-image: linear-gradient(to bottom right, #998100 0%, gold 100%);
    border-image: linear-gradient(to bottom right, #998100 0%, gold 100%);
    border-image-slice: 1;
 }
 footer{
  padding:1em;
 }

 footer > div{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  font-size: 7.5px;

margin-top: -1.5em;
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
  background-image: url('/assets/images/waterpokemonbg.png');
  background-size: 115%;
  background-position: center;
  transform-style: preserve-3d;
  transition: 0.6s; 
  border: 20px solid gold;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  z-index: 1;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.back img{
width: 31em;
height: 45em;
}

@media (max-width:700px) {
  .card { 
    transform: scale(.5); 
}
  #container:hover .card { 
      transform: scale(.5) rotateY(-180deg) translateZ(1px); 
    }

  
  }
</style>
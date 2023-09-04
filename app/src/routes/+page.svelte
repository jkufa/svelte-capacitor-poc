<script>
  import { Geolocation } from '@capacitor/geolocation';

  /**
   * @type {{ coords: { latitude: any; longitude: any; }; } | null}
   */
  let loc = null;
  async function getCurrentPosition(){
      const res = await Geolocation.getCurrentPosition()
      loc = res
  }
</script>

<main>
  <h1>Geolocation</h1>
  <p>Your location is:</p>
  <p>Latitude: {loc?.coords.latitude}</p>
  <p>Longitude: {loc?.coords.longitude}</p>
  
  <button on:click={getCurrentPosition}>
      Get Current Location
  </button>
</main>

<style>
  main {
      padding-top: 50px;
  }
</style>
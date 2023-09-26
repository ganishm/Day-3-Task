


const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl)
  .then((response) => {

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }
 
    return response.json();
  })
  .then((countries) => {

     countries.forEach((country) => {
        //console.log(country);
      const countryName = country.name.common;
      const Population = country.population;
      const Region = country.region;
      const SubRegion = country.subregion;

      console.log(`Country: ${countryName}`);

      console.log(`Region: ${Region}`);
      console.log(`SubRegion: ${SubRegion}`);
      console.log(`Populaion: ${Population}`);
      console.log("\n" + "=".repeat(30) + "\n");
    });
  })
  .catch((error) => {
    console.error(error);
  });
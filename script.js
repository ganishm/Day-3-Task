
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
      const flag = country.flags.png;

      console.log(`Flag: ${flag}`);
      console.log("\n" + "=".repeat(30) + "\n");
    });
  })
  .catch((error) => {
    console.error(error);
  });
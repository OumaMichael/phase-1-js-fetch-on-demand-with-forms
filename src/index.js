const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      // Prevent the form from refreshing the page
      event.preventDefault();
  
      // Get the input value from the form
      const input = document.querySelector("input#searchByID");
      const movieID = input.value.trim();
  
      // Construct the URL using the input value
      fetch(`http://localhost:3000/movies/${movieID}`)
        .then((response) => {
          if (!response.ok) {
            // Optionally handle 404 or other errors
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          // Select the DOM elements to update
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the DOM with the fetched data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          console.error(error);
          // Optionally update the DOM to show an error message
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = "Movie Not Found";
          summary.innerText = "";
        });
    });
  };
  
  // Make sure the code runs after the DOM loads
  document.addEventListener("DOMContentLoaded", init);
  
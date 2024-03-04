fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
    .then(response => response.json())
    .then(response => {
        const movies = response.results; // assuming the response has a 'results' property which is an array of movies
        const movieContainer = document.querySelector('.cards'); // select the container to hold the movie cards

        // Clear the container
        movieContainer.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = document.createElement('a');
            movieCard.href = `book.html?${movie.title}`; // assuming the movie object has a 'title' property
            movieCard.classList.add('card');

            const movieImage = document.createElement('img');
            movieImage.src = `../Poster/${movie.poster_path}`; // assuming the movie object has a 'poster_path' property
            movieImage.alt = movie.title;

            movieCard.appendChild(movieImage);
            movieContainer.appendChild(movieCard);
        });
    })
    .catch(err => console.error(err));
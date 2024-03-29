$(() => {

    // Submit a form
    $('#search-form').submit((e) => {
        e.preventDefault();
        const searchTerm = $('#search-input').val();
        getRequest(searchTerm);
    });

    function getRequest(input) {
        const url = 'http://www.omdbapi.com/?';
        const parameters = {
            apikey: '69c74a14',
            s: input,
            r: 'json'
        };

        $.getJSON(url, parameters, (response) => {
            showResults(response.Search);
        });
    }

    function showResults(movies) {

        /*
        for(let i = 0; i < movies.length; i++) {
            console.log(movies[i]);
        }
        */
        $.each(movies, (i, value) => {
        $('#results').append(`<h3>${value.Title}</h3> <img src="${value.Poster}"><a href="https://www.imdb.com/title/${value.imdbID}">Read More</a>`);
        });

    }
});
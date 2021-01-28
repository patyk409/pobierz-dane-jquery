$(document).ready(function () {
    const btn = $('.get-data');

    $(btn).click(function () {
        // $.get()
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                $('body').append(`<p>user ID: ${data.userId}</p>`);
                $('body').append(`<p>ID: ${data.id}</p>`);
                $('body').append(`<p>title: ${data.title}</p>`);
                $('body').append(`<p>body: ${data.body}</p>`);
                $('body').append(`<hr></hr>`);
            })

            .fail(error => {
                console.error(error);
            });

        // $.getJSON()
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                $('body').append(`<p>user ID: ${data.userId}</p>`);
                $('body').append(`<p>ID: ${data.id}</p>`);
                $('body').append(`<p>title: ${data.title}</p>`);
                $('body').append(`<p>body: ${data.body}</p>`);
                $('body').append(`<hr></hr>`);
            })

            .fail(function (error) {
                console.error(error);
            });
    });
});
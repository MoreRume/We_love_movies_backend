CREATE TABLE movies_theaters(
    movie_id INTEGER REFERENCES movies(movie_id),
    theater_id INTEGER REFERENCES theaters(theater_id),
    is_showing BOOLEAN
)
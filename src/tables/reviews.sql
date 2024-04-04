CREATE TABLE reviews(
    review_id INTEGER PRIMARY KEY generated by default AS identity,
    content varchar(250),
    score INTEGER,
    critic_id INTEGER REFERENCES critics(critic_id),
    movie_id INTEGER REFERENCES movies(movie_id),
    timestamps TRUE TRUE
)
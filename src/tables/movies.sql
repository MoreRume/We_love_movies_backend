CREATE TABLE movies(
    movie_id INTEGER PRIMARY KEY generated by default AS identity,
    title varchar(100) NOT NULL,
    runtime_in_minutes INTEGER NOT NULL,
    rating varchar(6) NOT NULL,
    description varchar(250),
    timestamps TRUE TRUE
)
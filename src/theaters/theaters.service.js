const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");
const reduceProperties = require("../utils/reduce-properties");

const addCategory = mapProperties({
  title: "movie.movie_id",
  runtime_in_minutes: "movie.runtime_in_minutes",
  surname: "critic.surname",
  rating: "movie.rating",
  
});
const reduceTheaterAndMovies= reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  m_created_at: ["movies", null, "created_at"],
  m_updated_at: ["movies", null, "updated_at"],
  is_showing: ["movies", null, "is_showing"],
  mt_theater_id: ["movies", null, "theater_id"],
})

function list() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id" )
    .distinct()
    .select(
       "t.*",
      "m.movie_id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url",
      "m.created_at as m_created_at",
      "m.updated_at as m_updated_at",
      "mt.is_showing",
      "mt.theater_id as mt_theater_id",
       )
    
    .then(theaters => reduceTheaterAndMovies(theaters))
  
}

module.exports = {
     list,
};

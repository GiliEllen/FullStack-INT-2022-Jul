// SELECT * FROM blockbuster.movies as m;

// SELECT * FROM blockbuster.movies as m
// WHERE m.year > 1940 AND m.title LIKE "%s_";

// SELECT * FROM blockbuster.movies as m
// WHERE m.year > 1990 AND (m.title LIKE "s%" OR m.title LIKE "a%");

// SELECT * FROM blockbuster.movies as m
// WHERE NOT m.title = 'Scarface';

// SELECT max(year) as minYear
// FROM movies;

// INSERT INTO `blockbuster`.`movies` (`title`, `year`, `runtime`, `director`, `actors`, `plot`, `posterUrl`) VALUES ('gili', 1990, '120', 'gili mena', 'gili, gili and gili', 'abcdefg', 'hello');

// UPDATE `blockbuster`.`movies` SET `title` = 'gili' WHERE (`movie_id` = '9');

// DELETE FROM `blockbuster`.`movies` WHERE (`movie_id` = '81');

// SELECT m.title, m.year
// FROM blockbuster.movies as m
// ORDER BY m.year asc;

// SELECT m.title, m.year, m.runtime
// FROM blockbuster.movies as m
// ORDER BY m.runtime desc;

// SELECT count(m.movie_id) 
// FROM blockbuster.movies as m;

// SELECT avg(m.runtime) 
// FROM blockbuster.movies as m;

// SELECT sum(m.runtime) 
// FROM blockbuster.movies as m;

// SELECT * FROM blockbuster.movies as m
// WHERE m.year IN (1994,1984,2006);

// SELECT * FROM blockbuster.movies
// WHERE title LIKE "%a%"
// LIMIT 5;


// SELECT * FROM blockbuster.movies as m
// WHERE title LIKE "%a%"
// ORDER BY m.movie_id desc
// LIMIT 5;

// SELECT * FROM blockbuster.movies as m;
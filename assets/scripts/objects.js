const addMoviesBtn = document.getElementById('add-movie-btn'); // 1
const searchBtn = document.getElementById('search-btn');

const movies = [];

// console.log(movies);

const renderMovies = (filter = '') => {
  // 4
  const listMovies = document.getElementById('movie-list');

  if (movies.length === 0) {
    listMovies.classList.remove('visible');
    return;
  } else {
    listMovies.classList.add('visible');
  }
  listMovies.innerHTML = ''; //  مسح كلشي موجود قبل والسطر يلي بعدو بيرجع بأنشأ كلشي موجود بالمصفوفة من اول وجديد شوفها بال ديباغ

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherproperty } = movie;
    console.log(otherproperty);

    const { title } = info;
    let text = title;
    for (const key in info) {
      if (key !== 'title') {
        text = text + ' - ' + `${key} : ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    listMovies.append(movieEl);
  });
  //     for (const movie of movies){
  //     const movieEl = document.createElement('li');
  //     let text = movie.info.title
  //     for (const key in movie.info){
  //         if (key !== 'title') {
  //             text = text + ' - ' + `${key}: ${movie.info[key]}`;
  //         }
  //     }
  //     movieEl.textContent = text;
  //     listMovies.append(movieEl);
  //    }
};

const addMoviesHandler = () => {
  // 3
  const titleFavoriteMovie = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    titleFavoriteMovie.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const favMovies = {
    info: {
      title: titleFavoriteMovie,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(favMovies);
  console.log(movies);
  renderMovies();
};

const searchHandler = () => {
  const filterTitle = document.getElementById('filter-title').value;
  renderMovies(filterTitle);
};

addMoviesBtn.addEventListener('click', addMoviesHandler); // 2
searchBtn.addEventListener('click', searchHandler);

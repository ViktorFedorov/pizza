const apiBase = 'https://6472f426d784bccb4a3c22ab.mockapi.io'
const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject()
}

/*
запрашиваем с бэка список товаров с учетом категорий и сортировки,
если категория 0, то все товары
*/
const getPizzaList = (category, sortBy, searchQuery, page, limit) => {
  let url = ''

  category && sortBy
    ? (url = `${apiBase}/pizza-list?category=${category}&sortBy=${sortBy}&title=${searchQuery}&page=${page}&limit=${limit}`)
    : (url = `${apiBase}/pizza-list?sortBy=${sortBy}&title=${searchQuery}&page=${page}&limit=${limit}`)

  return fetch(url).then(checkResponse)
}

export { getPizzaList }

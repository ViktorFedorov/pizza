const apiBase = 'https://6472f426d784bccb4a3c22ab.mockapi.io'
const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject()
}

/*
запрашиваем с бэка список товаров с учетом категорий,
если категория 0, то все товары
*/
const getPizzaList = (category) => {
  let url = ''

  category
    ? (url = `${apiBase}/pizza-list?category=${category}`)
    : (url = `${apiBase}/pizza-list`)

  return fetch(url).then(checkResponse)
}

export { getPizzaList }

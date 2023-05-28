const apiBase = 'https://6472f426d784bccb4a3c22ab.mockapi.io'
const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject()
}

const getPizzaList = async () => {
  return fetch(`${apiBase}/pizza-list`).then(checkResponse)
}

export { getPizzaList }

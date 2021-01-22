const apiUrl = 'http://localhost:3000/graphql'

export const getHeaders = (options = {}) => {
  if (!options.headers) {
    Object.assign(options, {
      headers: new Headers({
        'Content-type': 'application/json',
        Accept: 'application/json',
      }),
    })
  }
  const token = sessionStorage.getItem('token')
  options.headers.set('Authorization', `Bearer ${token}`)
  return options
}

export default {
  getList: (resource, params) => {},
  getOne: (resource, params) => {
    fetch(`${apiUrl}/${resource}/${params.id}`).then(data => data.json())
  },
  getMany: (resource, params) => {},
  getManyReference: (resource, params) => {},
  update: (resource, params) => {
    fetch(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(data => data.json())
  },
  updateMany: (resource, params) => {},
  create: (resource, params) => {
    fetch(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(data => data.json())
  },
  delete: (resource, params) => {
    fetch(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(data => data.json())
  },
  deleteMany: (resource, params) => {},
}

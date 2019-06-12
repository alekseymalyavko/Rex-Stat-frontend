import axios from 'axios'

const url = process.env.REACT_APP_API || 'http://localhost:3001';

export const HTTP = axios.create({
  baseURL: url,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export const HTTP_1 = axios.create({
  baseURL: url,
})
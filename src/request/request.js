import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
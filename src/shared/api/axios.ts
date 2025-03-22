import { useSessionStore } from '@/entities/user/model/store/session'
import axios from 'axios'

const BASE_URL = 'http://localhost:4200/api'

export const api = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(config => {
	const token = useSessionStore.getState().accessToken
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

api.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			try {
				const refreshToken = useSessionStore.getState().refreshToken
				if (refreshToken) {
					const response = await api.post('/auth/tokens', { refreshToken })
					const { accessToken, refreshToken: newRefreshToken } = response.data

					useSessionStore.getState().setTokens(accessToken, newRefreshToken)
					originalRequest.headers.Authorization = `Bearer ${accessToken}`

					return api(originalRequest)
				}
			} catch (refreshError) {
				useSessionStore.getState().setUnauthenticated()
				if (typeof window !== 'undefined') {
					window.location.href = '/login'
				}
				return Promise.reject(refreshError)
			}
		}
		return Promise.reject(error)
	}
)

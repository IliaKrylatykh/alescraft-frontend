import { api } from '@/shared/api/axios'
import { Profile, Session } from '../model/types'
import { useSessionStore } from '../model/store/session'

export class AuthService {
	static async login(email: string, password: string) {
		try {
			const { setLoading, setTokens, setProfile } = useSessionStore.getState()

			setLoading()
			const response = await api.post<Session>('/auth/login', {
				email,
				password,
			})
			const { accessToken, refreshToken, profile } = response.data

			setTokens(accessToken, refreshToken)
			setProfile(profile)
		} catch (error) {
			console.error('Login failed:', error)
			useSessionStore.getState().setUnauthenticated()
			throw error
		}
	}

	static async register(email: string, password: string) {
		try {
			const { setLoading, setTokens, setProfile } = useSessionStore.getState()

			setLoading()
			const response = await api.post<Session>('/auth/register', {
				email,
				password,
			})
			const { accessToken, refreshToken, profile } = response.data

			setTokens(accessToken, refreshToken)
			setProfile(profile)
		} catch (error) {
			console.error('Registration failed:', error)
			useSessionStore.getState().setUnauthenticated()
			throw error
		}
	}

	static logout() {
		useSessionStore.getState().clearSession()
	}

	static async getProfile() {
		try {
			const { setLoading, setProfile } = useSessionStore.getState()

			setLoading()
			const response = await api.get<Profile>('/profile')
			setProfile(response.data)
		} catch (error) {
			console.error('Failed to fetch profile:', error)
			useSessionStore.getState().setUnauthenticated()
			throw error
		}
	}
}

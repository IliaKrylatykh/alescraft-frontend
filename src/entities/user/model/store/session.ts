import { create } from 'zustand'
import Cookies from 'js-cookie'
import { Profile } from '../types'

interface SessionState {
	profile: Profile | null
	isAuthenticated: boolean
	isLoading: boolean
	accessToken: string | null
	refreshToken: string | null

	setProfile: (profile: Profile) => void
	setTokens: (accessToken: string, refreshToken: string) => void
	setLoading: () => void
	setUnauthenticated: () => void
	clearSession: () => void
}

export const useSessionStore = create<SessionState>(set => ({
	profile: null,
	isAuthenticated: false,
	isLoading: false,
	accessToken:
		typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null,
	refreshToken:
		typeof window !== 'undefined' ? Cookies.get('refreshToken') || null : null,

	setProfile: profile =>
		set({ profile, isAuthenticated: true, isLoading: false }),

	setTokens: (accessToken, refreshToken) => {
		localStorage.setItem('accessToken', accessToken)
		Cookies.set('refreshToken', refreshToken, {
			path: '/',
			secure: true,
			sameSite: 'strict',
		})
		set({ accessToken, refreshToken, isAuthenticated: true })
	},

	setLoading: () => set({ isLoading: true }),

	setUnauthenticated: () => {
		localStorage.removeItem('accessToken')
		Cookies.remove('refreshToken', { path: '/' })
		set({
			profile: null,
			isAuthenticated: false,
			accessToken: null,
			refreshToken: null,
		})
	},

	clearSession: () => {
		localStorage.removeItem('accessToken')
		Cookies.remove('refreshToken', { path: '/' })
		set({
			profile: null,
			isAuthenticated: false,
			accessToken: null,
			refreshToken: null,
		})
	},
}))

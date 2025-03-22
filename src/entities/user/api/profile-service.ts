import { api } from '@/shared/api/axios'
import { Profile, UpdateProfile } from '../model/types'
import { useSessionStore } from '../model/store/session'

const PROFILE = '/users/profile'

export class ProfileService {
	static async getProfile() {
		try {
			const { setLoading, setProfile } = useSessionStore.getState()
			setLoading()
			const response = await api.get<Profile>(PROFILE)
			const profile = response.data
			setProfile(profile)
			return profile
		} catch (error) {
			console.error('Failed to fetch profile:', error)
			useSessionStore.getState().setUnauthenticated()
			throw error
		}
	}

	static async updateProfile(updatedData: UpdateProfile) {
		try {
			const { setLoading, setProfile } = useSessionStore.getState()
			setLoading()
			const { data: updatedProfile } = await api.put<Profile>(
				PROFILE,
				updatedData
			)
			setProfile(updatedProfile)
			return updatedProfile
		} catch (error) {
			console.error('Failed to update profile:', error)
			throw error
		}
	}
}

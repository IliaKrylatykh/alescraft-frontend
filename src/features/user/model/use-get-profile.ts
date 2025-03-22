import { ProfileService } from '@/entities/user'
import { useSessionStore } from '@/entities/user/model/store/session'
import { useQuery } from '@tanstack/react-query'

export function useGetProfile() {
	const { profile, setProfile } = useSessionStore()

	const getProfileQuery = useQuery({
		queryKey: ['profile'],
		queryFn: async () => {
			if (!profile) {
				const fetchedProfile = await ProfileService.getProfile()
				setProfile(fetchedProfile)
				return fetchedProfile
			}
			return profile
		},
		refetchOnWindowFocus: false,
	})

	return {
		profile: getProfileQuery.data,
		isPending: getProfileQuery.isPending,
	}
}

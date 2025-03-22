import { Profile } from '../model/types'

export const getProfileDisplayName = (profile: Profile) => {
	return profile.firstName ? profile.firstName : profile.email
}

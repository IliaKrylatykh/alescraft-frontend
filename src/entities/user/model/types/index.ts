import { z } from 'zod'

export const Roles = ['ADMIN', 'MODERATOR', 'USER'] as const
export type Role = (typeof Roles)[number]

export const profileZod = z.object({
	id: z.number(),
	email: z.string().email(),
	createdAt: z.date(),
	updatedAt: z.date(),
	shops: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			logo: z.string().nullable(),
			rating: z.number(),
		})
	),

	// editable
	role: z.enum(Roles),
	avatar: z.string().nullable().optional(),
	firstName: z.string().min(1).max(12),
	lastName: z.string().max(12).optional(),
	description: z.string().max(300).optional(),
	phone: z.string().max(12).optional(),
	youtube: z.string().url().optional().or(z.literal('')),
	facebook: z.string().url().optional().or(z.literal('')),
	instagram: z.string().url().optional().or(z.literal('')),
	telegram: z.string().url().optional().or(z.literal('')),
	whatsapp: z.string().url().optional().or(z.literal('')),
	viber: z.string().url().optional().or(z.literal('')),
})

export type Profile = z.infer<typeof profileZod>

export const updateProfileZod = profileZod.omit({
	id: true,
	email: true,
	createdAt: true,
	updatedAt: true,
	shops: true,
})

export type UpdateProfile = z.infer<typeof updateProfileZod>

export interface Session {
	accessToken: string
	refreshToken: string
	profile: Profile
}

export type User = {
	id: number
	email: string
	// role: Role;
	name: string
	avatar?: string | null

	createdAt: Date
	updatedAt: Date
}

'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Skeleton,
} from '@/shared/ui'
import { LogOut, User } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { LoginButton, useLogout } from '@/features/auth'
import { ProfileAvatar } from '@/entities/user'
import { useSessionStore } from '@/entities/user/model/store/session'

export const Profile = () => {
	const { logout, isPending: isLoadingLogout } = useLogout()

	const { profile, isAuthenticated, isLoading, setUnauthenticated } =
		useSessionStore()

	if (isLoading) {
		return <Skeleton className='w-8 h-8 rounded-full' />
	}

	if (!isAuthenticated) {
		return <LoginButton />
	}

	const handleLogout = () => {
		setUnauthenticated()
		logout()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='p-px rounded-full self-center h-8 w-8'
				>
					<ProfileAvatar profile={profile ?? undefined} className='w-8 h-8' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 mr-2 '>
				<DropdownMenuLabel>
					<p>My account</p>
					<p className='text-xs text-muted-foreground overflow-hidden text-ellipsis'>
						KK
					</p>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={'/profile'}>
							<User className='mr-2 h-4 w-4' />
							<span>Profile</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem disabled={isLoadingLogout} onClick={handleLogout}>
						<LogOut className='mr-2 h-4 w-4' />
						<span>Exit</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

'use client'

import { ProfileInfo } from '@/entities/user'
import { useGetProfile } from '@/features/user'
import { Button, Card, Dialog, DialogTrigger, Spinner } from '@/shared/ui'
import { cn } from '@/shared/ui/utils'
import { Edit } from 'lucide-react'
import { EditProfileDialog } from './edit-profile-dialog'
import { useState } from 'react'

export function ProfileInfoCard({ className }: { className?: string }) {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const { profile, isPending } = useGetProfile()

	if (isPending) {
		return <Spinner />
	}

	if (!profile) {
		return <div>no profile</div>
	}

	return (
		<Card className={cn('border rounded-md bg-blue-50 relative', className)}>
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<Button
						className={cn('p-2 flex absolute top-2 right-2 rounded-xl')}
						variant={'secondary'}
					>
						<Edit />
					</Button>
				</DialogTrigger>
				<EditProfileDialog
					profile={profile}
					onProfileUpdated={() => setIsDialogOpen(false)}
				/>
			</Dialog>
			<div className={cn('h-40 bg-green-200')} />
			<ProfileInfo className={cn('-mt-16')} profile={profile} />
		</Card>
	)
}

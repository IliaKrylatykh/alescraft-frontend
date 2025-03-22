import { Profile } from '@/entities/user'
import { UpdateProfileForm } from '@/features/user'
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	ScrollArea,
} from '@/shared/ui'
import { cn } from '@/shared/ui/utils'

export function EditProfileDialog({
	className,
	profile,
	onProfileUpdated,
}: {
	className?: string
	profile: Profile
	onProfileUpdated: () => void
}) {
	return (
		<DialogContent className={cn('', className)}>
			<DialogHeader>
				<DialogTitle>Edit profile</DialogTitle>
				<DialogDescription>
					Make changes to your profile here. Click save when you are done.
				</DialogDescription>
			</DialogHeader>
			<ScrollArea className='h-[80vh]'>
				<UpdateProfileForm profile={profile} onSuccess={onProfileUpdated} />
			</ScrollArea>
		</DialogContent>
	)
}

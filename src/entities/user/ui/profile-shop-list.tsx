import { Card } from '@/shared/ui'
import { cn } from '@/shared/ui/utils'

const ProfileShopListItem = () => {
	return <Card className={cn('')}>Profile Shop</Card>
}

export const ProfileShopList = ({ className }: { className?: string }) => {
	return (
		<div className={cn('flex flex-col relative px-6', className)}>
			<ProfileShopListItem />
			<ProfileShopListItem />
			<ProfileShopListItem />
		</div>
	)
}

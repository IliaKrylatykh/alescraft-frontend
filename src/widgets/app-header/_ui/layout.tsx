import { Container } from '@/shared/ui'

export function Layout({
	logo,
	nav,
	profile,
	actions,
}: {
	logo?: React.ReactNode
	nav?: React.ReactNode
	profile?: React.ReactNode
	actions?: React.ReactNode
}) {
	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<Container className='flex h-14 items-center px-4'>
				<div className='hidden md:flex mr-4'>{logo}</div>
				<div className='items-center flex-1 flex'>
					<div className='hidden md:flex'>{nav}</div>
					<div className='flex flex-1 items-center justify-end space-x-3 '>
						{actions}
						{profile}
					</div>
				</div>
			</Container>
		</header>
	)
}

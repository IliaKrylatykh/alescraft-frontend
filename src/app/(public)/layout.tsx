import { AppHeader } from '@/widgets/app-header'

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex min-h-screen flex-col'>
			<AppHeader variant='public' />
			<main className='flex flex-grow'>{children}</main>
			<footer className='bg-slate-600'>footer</footer>
		</div>
	)
}

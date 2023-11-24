import React from 'react'
import { Alert } from 'react-bootstrap'
import { useToasts } from 'react-toast-notifications'
import useUser from '../../lib/user'
import { authAxios } from '../../utils/axiosKits'
import Header from './header'
import SideNav from './side-nav'

const MainHeader = ({ children }: { children: any }) => {
	const { user, isConfirmed } = useUser()
	const userData = user?.data
	return (
		<>
			<div data-container="1">
				<SideNav data={userData} />
				<Header />
				<div className="lg:ml-24 xl:ml-80 mt-16 xl:mt-20" data-bucket="1">
					<div className="py-10 px-4 md:!px-8 relative">
						{!isConfirmed && user?.data && <EmailAlert />}
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

function EmailAlert() {
	const { addToast } = useToasts()
	const [loading, setLoading] = React.useState(false)
	// reset confirm email function
	const resendEmail = async () => {
		setLoading(true)
		try {
			await authAxios({
				method: 'POST',
				url: `/users/resend-email`,
			}).then((res) => {
				if (res.status === 200 || res.status === 201) {
					addToast(res.data.message, {
						appearance: 'success',
						autoDismiss: true,
					})
					setLoading(false)
				}
			})
		} catch (error: any) {
			if (error.response?.data) {
				addToast(error.response.data.message, {
					appearance: 'error',
					autoDismiss: true,
				})
			} else {
				addToast(error.message, {
					appearance: 'error',
					autoDismiss: true,
				})
			}
			setLoading(false)
		}
	}
	return (
		<Alert variant="danger" className="notification-wrapper mb-4">
			<div className="flex gap-3 justify-between items-center">
				<div>
					<Alert.Heading as={'h3'} className="text-xxs mb-2 font-medium">
						Email Verification Required
					</Alert.Heading>
					<p>
						{
							"Please verify your email address by clicking the link in the email we sent you. Please check your spam folder if you dont see the email. If you still don't see the email, please contact us."
						}
					</p>
				</div>
				<div>
					<button
						type="button"
						onClick={resendEmail}
						className="text-xs flex gap-3 items-center whitespace-nowrap text-red-700 duration-300 ease-in-out border-2 border-red-700 px-4 py-2 rounded-lg hover:text-white hover:bg-themePrimary hover:border-themePrimary">
						{loading ? 'Sending...' : 'Resend Email'}
						{loading && <div className="spinner-grow w-5 h-5" role="status" />}
					</button>
				</div>
			</div>
		</Alert>
	)
}

export default MainHeader
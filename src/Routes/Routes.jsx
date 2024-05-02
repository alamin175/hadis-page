import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Pages/HomePage/Home'
import MiddleSection from '../Pages/HomePage/MiddleSection'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/bukhari',
				element: <MiddleSection />,
			},
		],
	},
])

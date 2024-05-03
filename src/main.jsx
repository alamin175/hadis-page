import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import GetDataContext from './Context/GetDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GetDataContext>
			<div className="max-w-screen-2xl mx-auto">
				<RouterProvider router={router} />
			</div>
		</GetDataContext>
	</React.StrictMode>
)

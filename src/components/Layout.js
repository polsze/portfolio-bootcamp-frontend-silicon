import React from 'react'

const Layout = ({ children, className = '' }) => {
	return (
		<div className={`w-full h-full inline-block z-0 xl:p-1${className}`}>
			{children}
		</div>
	)
}

export default Layout
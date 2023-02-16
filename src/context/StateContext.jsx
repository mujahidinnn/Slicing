import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
	// tulis state atau function disini
	const [emailModal, setEmailModal] = useState(false)
	const [projectModal, setProjectModal] = useState(false)

	const showEmailModal = () => {
		setProjectModal(false)
		setEmailModal(true)
	}
	return (
		<Context.Provider
			value={{
				// export disini
				emailModal,
				setEmailModal,
				projectModal,
				setProjectModal,
				showEmailModal,
			}}>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

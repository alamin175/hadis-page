import { createContext, useEffect, useState } from 'react'

export const DataContext = createContext(null)

const GetDataContext = ({ children }) => {
	const [book, setBook] = useState([])
	const [chapter, setChapter] = useState([])
	const [hadis, setHadis] = useState([])
	const [section, setSection] = useState([])

	useEffect(() => {
		/* Load Books Data */
		fetch('books.json')
			.then(res => res.json())
			.then(data => setBook(data))

		/* Load Chapter Data */
		fetch('chapter.json')
			.then(res => res.json())
			.then(data => setChapter(data))

		/* Load Hadis Data */
		fetch('hadis.json')
			.then(res => res.json())
			.then(data => setHadis(data))

		/* Load Hadis Data */
		fetch('section.json')
			.then(res => res.json())
			.then(data => setSection(data))
	}, [])

	const allData = {
		book,
		chapter,
		hadis,
		section,
	}
	return (
		<DataContext.Provider value={allData}>{children}</DataContext.Provider>
	)
}

export default GetDataContext

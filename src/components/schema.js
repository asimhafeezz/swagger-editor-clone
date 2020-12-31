import { useState } from 'react'
import styled from 'styled-components'
import SchemaContent from './schemaContent'
//root
const Root = styled.div`
	margin: 2rem 0;
	h2 {
		color: rgb(91, 157, 255);
	}
`

const SchemaHeader = styled.section`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	padding: 1rem 0.3rem;
	:hover {
		background-color: #494949;
	}
`
const Icon = styled.i`
	margin-top: 0.7rem;
`

const Schema = ({ data }) => {
	const { components } = data
	const { schemas } = components

	//local state
	const [open, setOpen] = useState(false)

	const setOpenOnClickHandler = () => {
		setOpen(!open)
	}

	return (
		<Root>
			<SchemaHeader onClick={setOpenOnClickHandler}>
				<h2>Schemas</h2>
				<Icon className={open ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} />
			</SchemaHeader>
			<hr />
			{open &&
				Object.entries(schemas).map((firstItem, i) => {
					console.log(firstItem[1].properties)
					return <SchemaContent key={i} firstItem={firstItem} />
				})}
		</Root>
	)
}

export default Schema

import { useState } from 'react'
import styled from 'styled-components'
import SchemaContent from './schemaContent'
//root
const Root = styled.div`
	margin: 1rem 0;
`

const HeaderContainer = styled.section`
	.contentHeading {
		background-color: #a5a5a5;
		padding: 0.8rem 0.4rem;
		margin: 0.6rem 0;
		color: #1d1d1d;
		border-radius: 3px;
	}

	.format {
		color: #e7e7e7;
		font-size: 500;
		margin-left: 0.3rem;
	}

	.types {
		color: rgb(91, 157, 255);
	}
`

const Schema = ({ data }) => {
	const { components } = data
	const { schemas } = components

	//local state
	// let [open, setOpen] = useState(false)

	// let setOpenOnClickHandler = () => {
	// 	setOpen(!open)
	// }
	// console.log({ schemas })

	return (
		<Root>
			<HeaderContainer>
				{Object.entries(schemas).map((firstItem, i) => {
					console.log(firstItem[1].properties)
					return (
						<div key={i}>
							<h3 className='contentHeading'>{firstItem[0]}</h3>
							<SchemaContent firstItem={firstItem} />
						</div>
					)
				})}
			</HeaderContainer>
		</Root>
	)
}

export default Schema

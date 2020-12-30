import { useState } from 'react'
import styled from 'styled-components'
import Path from './path'

//data
import data from '../data/data.json'

//css
const Root = styled.div`
	margin: 0.5rem 0;
`

const BarSectionRoot = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.8rem 0.3rem;
	border-bottom: 1px solid black;
	cursor: pointer;
	:hover {
		background-color: #494949;
	}
`
const BarSection = styled.section`
	display: flex;
	gap: 0.6rem;
`

const ATag = styled.a`
	margin-top: 0.6rem;
`

const Icon = styled.i`
	margin-top: 0.8rem;
`

const Tag = props => {
	const { name, description, externalDocs } = props

	//operations
	const newData = Object.entries(data.paths)

	const [open, setOpen] = useState(false)

	const onArrowClickHandler = () => {
		setOpen(!open)
	}

	return (
		<Root>
			{/* bar Section */}
			<BarSectionRoot onClick={onArrowClickHandler}>
				<BarSection>
					<h2>{name}</h2>
					<p>{description}</p>
				</BarSection>
				<BarSection>
					<p>{`${externalDocs?.description || ''}`}</p>
					<ATag href={`${externalDocs?.url || ''}`} target='blank'>
						{externalDocs?.url || ''}
					</ATag>
					<Icon
						className={open ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}
					/>
				</BarSection>
			</BarSectionRoot>

			{/* bar Content Section */}

			{open && externalDocs && (
				<div>
					{Object.entries(newData).map(firstItem =>
						Object.values(firstItem[1][1]).map((secondItem, i) => {
							return (
								secondItem.tags[0] === name && (
									<Path
										key={i}
										secondItem={secondItem}
										heading={Object.keys(firstItem[1][1])[i]}
										routeName={firstItem[1][0]}
									/>
								)
							)
						})
					)}
				</div>
			)}
		</Root>
	)
}

export default Tag

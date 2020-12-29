import { useState } from 'react'
import styled from 'styled-components'

//styled components
const Root = styled.div``
const HeaderContainer = styled.div`
	padding: 0.5rem;
	background-color: #b18431;
	margin: 0.5rem 0;
	max-width: 700px;
	border-radius: 5px;
	cursor: pointer;
`
const Header = styled.div`
	display: flex;
	gap: 1rem;
	section {
		font-size: 1.2rem;
		font-weight: 500;
		padding: 0.2rem;
		padding: 0.2rem 0.7rem;
		border-radius: 5px;
		border: 0;
		outline: none;
		text-transform: uppercase;
		background-color: #cdcf42;
		text-align: center;
	}
	p {
		padding: 0;
		padding-top: 0.2rem;
	}
`

const Path = props => {
	const { secondItem, buttonName } = props

	const [open, setOpen] = useState(false)

	const onHeaderClickHandler = () => {
		setOpen(!open)
	}

	return (
		<Root>
			<HeaderContainer onClick={onHeaderClickHandler}>
				<Header>
					<section>{buttonName}</section>
					<h3>{secondItem.tags[0]}</h3>
					<p>{secondItem.summary || ''}</p>
				</Header>
			</HeaderContainer>

			{open && (
				<>
					<h3>{buttonName}</h3>
				</>
			)}
		</Root>
	)
}

export default Path

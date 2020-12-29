import { useState } from 'react'
import styled from 'styled-components'

//styled components
const Root = styled.div``
const HeaderContainer = styled.div`
	background-color: ${({ heading }) =>
		heading === 'put'
			? 'rgb(255, 119, 0, 0.2)'
			: heading === 'get'
			? 'rgb(46, 70, 179, 0.2)'
			: heading === 'patch'
			? 'rgb(36, 171, 47, 0.2)'
			: heading === 'delete' && 'rgb(255, 0, 21, 0.2)'};
	border: 1px solid
		${({ heading }) =>
			heading === 'put'
				? 'rgb(255, 119, 0)'
				: heading === 'get'
				? 'rgb(46, 70, 179)'
				: heading === 'patch'
				? 'rgb(36, 171, 47)'
				: heading === 'delete' && 'rgb(255, 0, 21)'};
	margin: 0.5rem 0;
	padding: 0.5rem;
	max-width: 700px;
	border-radius: 5px;
	cursor: pointer;
`
const Header = styled.div`
	display: flex;
	gap: 1rem;
	section {
		background-color: ${({ heading }) =>
			heading === 'put'
				? 'rgb(255, 119, 0, 0.6)'
				: heading === 'get'
				? 'rgb(46, 70, 179, 0.6)'
				: heading === 'patch'
				? 'rgb(36, 171, 47, 0.6)'
				: heading === 'delete' && 'rgb(255, 0, 21, 0.6)'};
		font-size: 1.2rem;
		font-weight: 500;
		padding: 0.2rem;
		padding: 0.2rem 0.7rem;
		border-radius: 3px;
		border: 0;
		outline: none;
		text-transform: uppercase;
		text-align: center;
	}
	p {
		padding: 0;
		padding-top: 0.2rem;
	}
`

const Path = props => {
	const { secondItem, heading, routeName } = props

	const [open, setOpen] = useState(false)

	const onHeaderClickHandler = () => {
		setOpen(!open)
	}

	return (
		<Root>
			<HeaderContainer onClick={onHeaderClickHandler} heading={heading}>
				<Header heading={heading}>
					<section>{heading}</section>
					<h3>{routeName}</h3>
					<p>{secondItem.summary || ''}</p>
				</Header>
			</HeaderContainer>

			{open && (
				<>
					<h3>{heading}</h3>
				</>
			)}
		</Root>
	)
}

export default Path

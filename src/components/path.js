import { useState } from 'react'
import styled, { css } from 'styled-components'

//styled components

const backgroundColorsMixin = css`
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
`

const Root = styled.div``

const HeaderContainer = styled.div`
	${backgroundColorsMixin}
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
		text-transform: uppercase;
		text-align: center;
		h5 {
			margin: 0 auto;
		}
	}
	p {
		padding: 0;
		padding-top: 0.2rem;
	}
`

const Content = styled.div`
	${backgroundColorsMixin}
	max-width: 700px;
	padding: 0.5rem;
	border-radius: 3px;
`

const RequestBodySection = styled.section`
	display: flex;
	justify-content: space-between;
	background-color: #ffff;
	padding: 0.6rem 0.4rem;
	margin: 0.5rem 0%;
	border-radius: 5px;
	p {
		color: red;
		padding: 0;
	}
	select {
		margin-top: 0;
		margin-bottom: 0;
		padding: 0.1rem;
		border: 1px solid black;
		border-radius: 3px;
	}
`

const HeadingSectionOfRequestBodySection = styled.section`
	display: flex;
	gap: 0.5rem;
`

const DescriptionOfRequestBody = styled.section`
	padding: 0.8rem 0;
	padding: 0 0.4rem;
`

const Select = styled.select``

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
					<section>
						<h5>{heading}</h5>
					</section>
					<h3>{routeName}</h3>
					<p>{secondItem?.summary || ''}</p>
				</Header>
			</HeaderContainer>

			{open && (
				<Content heading={heading}>
					<h3>Parameters</h3>
					{secondItem?.requestBody && (
						<>
							<RequestBodySection>
								<HeadingSectionOfRequestBodySection>
									<h3>Request Body</h3>
									<p>
										{secondItem.requestBody.required === true ? 'required' : ''}
									</p>
								</HeadingSectionOfRequestBodySection>
								<Select>
									{Object.keys(secondItem.requestBody.content).map(
										(item, i) => (
											<option key={i}>{item}</option>
										)
									)}
								</Select>
							</RequestBodySection>
							<DescriptionOfRequestBody>
								{secondItem.requestBody.description}
							</DescriptionOfRequestBody>
						</>
					)}
				</Content>
			)}
		</Root>
	)
}

export default Path

import { useState } from 'react'
import styled, { css } from 'styled-components'

//styled components

const backgroundColorsMixin = css`
	background-color: ${({ heading }) =>
		heading === 'put'
			? 'rgb(255, 119, 0, 0.1)'
			: heading === 'get'
			? 'rgb(46, 70, 179, 0.1)'
			: heading === 'patch'
			? 'rgb(36, 171, 47, 0.1)'
			: heading === 'delete' && 'rgb(255, 0, 21, 0.1)'};
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
	margin: 0.6rem 0;
	${({ open }) =>
		open &&
		css`
			margin-bottom: 0;
		`}
	padding: 0.6rem 0.5rem;
	border-radius: ${({ open }) => (!open ? '4px' : '4px 4px 0 0')};
	cursor: pointer;
`
const Header = styled.div`
	display: grid;
	grid-template-columns: 1fr 7fr;
	gap: 0.7rem;
	position: static;
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
		min-width: 80px;
		h5 {
			margin: 0 auto;
		}
	}
	div {
		display: flex;
		gap: 0.7rem;
		p {
			padding: 0;
			padding-top: 0.1rem;
		}
	}
`

const Content = styled.div`
	${backgroundColorsMixin}
	${({ open }) =>
		open &&
		css`
			border-top: 0;
		`}
	padding: 0.5rem;
	border-radius: ${({ open }) => (!open ? '4px' : '0 0 4px 4px')};
	.responseHeading {
		background-color: #c7c6c6;
		padding: 0.8rem 0.4rem;
		border-radius: 3px;
		margin: 0.5rem 0;
		box-shadow: 0 2px 4px rgb(0, 0, 0, 0.2);
		color: #1d1d1d;
	}
`

const RequestBodySection = styled.section`
	display: flex;
	justify-content: space-between;
	background-color: #c7c6c6;
	padding: 0.6rem 0.4rem;
	margin: 0.5rem 0%;
	border-radius: 3px;
	box-shadow: 0 2px 4px rgb(0, 0, 0, 0.2);
	p {
		color: #750202;
		padding: 0;
		font-size: small;
		font-weight: 400;
	}
	select {
		margin-top: 0;
		margin-bottom: 0;
		padding: 0.1rem;
		border: 1px solid azure;
		border-radius: 3px;
	}
`

const HeadingSectionOfRequestBodySection = styled.section`
	display: flex;
	gap: 0.5rem;
	h4 {
		color: #1d1d1d;
	}
`

const ContentPaddingRapper = styled.section`
	padding: 0.8rem 0.4rem;
`

const ResponseSection = styled.div``

const ResponseSectionContent = styled.div`
	display: flex;
	padding: 0.8rem 0.4rem;
	.subContentHeading {
		display: flex;
		flex: 1;
		gap: 1.5rem;
	}
	h4 {
		font-weight: 520;
		margin: 0.4rem 0;
	}
	${({ subContentHeadingValue }) =>
		subContentHeadingValue &&
		css`
			h4 {
				font-weight: 330;
				margin: 0.4rem 0;
			}
		`}
`

const ExtensionSection = styled.div`
	:nth-child(odd) {
		h4 {
			font-weight: 520;
		}
	}
`

const EntensionSubSection = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;
	padding: 0.8rem 0.4rem;
	h4 {
		font-weight: 520;
	}
	h5 {
		font-weight: 320;
		font-size: 1rem;
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
			<HeaderContainer
				onClick={onHeaderClickHandler}
				heading={heading}
				open={open}>
				<Header heading={heading} open={open}>
					<section>
						<h5>{heading}</h5>
					</section>
					<div>
						<h4>{routeName}</h4>
						<p>{secondItem?.summary || ''}</p>
					</div>
				</Header>
			</HeaderContainer>

			{open && (
				<Content heading={heading} open={open}>
					<h4 className='responseHeading'>Parameters</h4>
					<ContentPaddingRapper>No Parameters</ContentPaddingRapper>
					{secondItem?.requestBody && (
						<>
							<RequestBodySection>
								<HeadingSectionOfRequestBodySection>
									<h4>Request Body</h4>
									<p>
										{secondItem.requestBody.required === true ? 'required' : ''}
									</p>
								</HeadingSectionOfRequestBodySection>
								<section>
									<select>
										{Object.keys(secondItem.requestBody.content).map(
											(item, i) => (
												<option key={i}>{item}</option>
											)
										)}
									</select>
								</section>
							</RequestBodySection>
							<ContentPaddingRapper>
								{secondItem.requestBody.description}
							</ContentPaddingRapper>
						</>
					)}
					{secondItem.responses && (
						<ResponseSection>
							<h4 className='responseHeading'>Response</h4>
							<ResponseSectionContent>
								<div className='subContentHeading'>
									<h4>Code</h4>
									<h4>Description</h4>
								</div>
								<h4>Links</h4>
							</ResponseSectionContent>
							<hr />
							<ResponseSectionContent subContentHeadingValue>
								<div className='subContentHeading'>
									<h4>{Object.keys(secondItem.responses)[0]}</h4>
									<h4>
										{Object.entries(secondItem.responses)[0][1].description}
									</h4>
								</div>
								<h4>{secondItem.responses.link || 'No Links'}</h4>
							</ResponseSectionContent>
						</ResponseSection>
					)}
					<ExtensionSection>
						<EntensionSubSection>
							<h4>Field</h4>
							<h4>Value</h4>
						</EntensionSubSection>
						<hr />
						<EntensionSubSection>
							<h5>x-location</h5>
							<h5>4000</h5>
						</EntensionSubSection>
						<EntensionSubSection>
							<h5>x-metrics</h5>
							<h5>{Object.entries(secondItem['x-metrics']) + ':""'}</h5>
						</EntensionSubSection>
					</ExtensionSection>
				</Content>
			)}
		</Root>
	)
}

export default Path

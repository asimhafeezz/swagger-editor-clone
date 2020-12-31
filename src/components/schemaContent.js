import { useState } from 'react'
import styled, { css } from 'styled-components'

//root
const Root = styled.div`
	.contentHeading {
		background-color: #494949;
		padding: 0.9rem 0.4rem;
		margin: 0.6rem 0;
		font-weight: 450;
		border-radius: 4px;
		${({ open }) =>
			open &&
			css`
				border-bottom: 0;
				margin-bottom: 0;
			`}
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
const Content = styled.pre`
	background-color: #494949;
	.brackets {
		margin-left: 0.3rem;
	}
	border-radius: 0 0 4px 4px;
`

const MainSchemaFormate = styled.code`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	margin: 0.2rem 2rem;

	@media (max-width: 600px) {
		width: 100%;
	}
`

const Icon = styled.i`
	margin-left: 0.5rem;
	cursor: pointer;
`

const SchemaContent = ({ firstItem }) => {
	const [open, setOpen] = useState(false)

	const setOpenOnClickHandler = () => {
		setOpen(!open)
	}
	return (
		<Root open={open}>
			<h4 className='contentHeading'>
				{firstItem[0]}
				<Icon
					onClick={setOpenOnClickHandler}
					className={open ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}
				/>
			</h4>
			{open && (
				<Content>
					<p className='brackets'>
						{`${
							firstItem[1].type === 'object'
								? '{'
								: firstItem[1].type === 'array'
								? '['
								: firstItem[1].type === 'string' && firstItem[1].type
						}`}
					</p>
					{Object.entries(firstItem[1].properties).map((secondItem, i) => {
						return (
							<MainSchemaFormate key={i}>
								<p>{secondItem[0]}</p>
								<p className='types'>
									{secondItem[1].type}
									{secondItem[1].format && (
										<span className='format'>{`$(${secondItem[1].format})`}</span>
									)}
									<span>
										{(secondItem[1].default === true
											? 'true'
											: secondItem[1].default === true && 'false') || ''}
									</span>
								</p>
							</MainSchemaFormate>
						)
					})}
					<p className='brackets'>{`${
						firstItem[1].type === 'object'
							? '}'
							: firstItem[1].type === 'array'
							? ']'
							: firstItem[1].type === 'string' && ''
					}`}</p>
				</Content>
			)}
		</Root>
	)
}

export default SchemaContent

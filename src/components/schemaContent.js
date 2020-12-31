import styled from 'styled-components'

//root
const Root = styled.div``
const Content = styled.div`
	.brackets {
		margin-left: 0.3rem;
	}
`

const MainSchemaFormate = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;
	width: 60%;

	@media (max-width: 600px) {
		width: 100%;
	}
`

const SchemaContent = ({ firstItem }) => {
	return (
		<Root>
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
		</Root>
	)
}

export default SchemaContent

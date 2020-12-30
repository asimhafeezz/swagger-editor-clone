import styled from 'styled-components'
//root
const Root = styled.div``

const HeaderContainer = styled.section``

const Schema = ({ data }) => {
	const { components } = data
	const { schemas } = components
	console.log({ schemas })
	return (
		<Root>
			<HeaderContainer></HeaderContainer>
		</Root>
	)
}

export default Schema

import styled from 'styled-components'

//root
//css
const ServerSelect = styled.section`
	margin-top: 4rem;
	margin-bottom: 2rem;
`

const Servers = ({ servers }) => {
	return (
		<ServerSelect>
			<p>Servers</p>
			<select>
				{servers.map(({ url, description }, i) => (
					<option key={i}>{url + ' - ' + description}</option>
				))}
			</select>
		</ServerSelect>
	)
}

export default Servers

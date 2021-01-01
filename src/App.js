import './App.css'

import styled from 'styled-components'

//data
import data from './data/data.json'

//components
import Tag from './components/tag'
import Schema from './components/schema'
import Info from './components/info'

//css
const ServerSelect = styled.section`
	margin-top: 4rem;
	margin-bottom: 2rem;
`

function App() {
	return (
		<div className='App'>
			{/* main upper content */}
			<Info info={data.info} />

			{/* server select */}
			<ServerSelect>
				<p>Server</p>
				<select>
					{data.servers.map(({ url, description }, i) => (
						<option key={i}>{url + ' - ' + description}</option>
					))}
				</select>
			</ServerSelect>

			{/* tags */}
			{data.tags.map((tagItem, i) => {
				return <Tag key={i} tagItems={tagItem} data={data} />
			})}

			{/* components schemas */}
			<Schema data={data} />
		</div>
	)
}

export default App

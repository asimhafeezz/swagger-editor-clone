//data
import data from './data/data.json'

//components
import { Tags, Schema, Servers, Info } from './components'
import { GlobalStyle } from './styles'

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Info info={data.info} />
			<Servers servers={data.servers} />
			<Tags data={data} />
			<Schema data={data} />
		</div>
	)
}

export default App

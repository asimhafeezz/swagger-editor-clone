import './App.css'

//data
import data from './data/data.json'
import Tag from './components/tag'
import Path from './components/path'

function App() {
	return (
		<div className='App'>
			{/* main upper content */}
			<h2>{data.info.title}</h2>
			<p>{data.info.description}</p>
			<ul>
				<li>
					<a href={`${data.info.termsOfService}`} target='blank'>
						Term of services
					</a>
				</li>
				<li>
					<a href={`mailto:${data.info.contact.email}`}>
						Contact the Developer
					</a>
				</li>
				<li>
					<a href={`${data.info.license.url}`} target='blank'>
						{data.info.license.name}
					</a>
				</li>
				<li>
					<a href='http://swagger.io' target='blank'>
						Find out more about Swagger
					</a>
				</li>
			</ul>

			{/* server select */}
			<select>
				{data.servers.map(({ url, description }, i) => (
					<option key={i}>{url + ' - ' + description}</option>
				))}
			</select>

			{/* tags */}
			{data.tags.map((item, i) => {
				return <Tag key={i} {...item} />
			})}
		</div>
	)
}

export default App

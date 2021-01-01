import styled from 'styled-components'

//root
const Root = styled.div``

const Info = ({ info }) => {
	return (
		<Root>
			<h1>{info.title}</h1>
			<p>{info.description}</p>
			<ul>
				<li>
					<a href={`${info.termsOfService}`} target='blank'>
						Term of services
					</a>
				</li>
				<li>
					<a href={`mailto:${info.contact.email}`}>Contact the Developer</a>
				</li>
				<li>
					<a href={`${info.license.url}`} target='blank'>
						{info.license.name}
					</a>
				</li>
				<li>
					<a href='http://swagger.io' target='blank'>
						Find out more about Swagger
					</a>
				</li>
			</ul>
		</Root>
	)
}

export default Info

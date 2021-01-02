import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	outline: none;
}

.App {
	max-width: 1000px;
	margin: 1rem auto;
	text-align: left;
	padding: 0 0.6rem;
}

body {
	background-color: rgb(61, 60, 63);
	color: azure;
}

hr {
	background-color: azure;
}

ul {
	list-style-type: none;
}

p {
	padding: 9px 0;
}

li {
	padding: 3px 0;
}
a {
	text-decoration: none;
	color: rgb(91, 157, 255);
}
a:hover {
	border-bottom: 1px solid rgb(91, 157, 255);
}

h1 {
	color: rgb(91, 157, 255);
	font-size: 3rem;
	margin-bottom: 0.5rem;
	font-weight: 630;
}

select {
	padding: 0.2rem;
	border: 2px solid azure;
	border-radius: 5px;
	font-size: 1rem;
	min-width: 70px;
}


@media (max-width: 450px) {
	select {
		padding: 0rem;
		font-size: 0.7rem;
	}
	p,
	a {
		font-size: 0.8rem;
	}
	h1 {
		font-size: 2.5rem;
	}
}

@media (max-width: 660px) {
	select {
		padding: 0.1rem;
		font-size: 0.8rem;
		width: 100%;
	}
	p,
	a {
		font-size: 0.8rem;
	}
}


`
export default GlobalStyle

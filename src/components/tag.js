import { useState } from 'react'
import Path from './path'

//data
import data from '../data/data.json'

//css
const root = {
	margin: '.5rem 0',
}
const barSectionRoot = {
	maxWidth: '700px',
	display: 'flex',
	justifyContent: 'space-between',
	padding: '.3rem',
	border: '1px solid black',
	borderRadius: '5px',
}
const barSection = {
	display: 'flex',
	gap: '.6rem',
}

const aStyle = {
	marginTop: '.6rem',
}

const iconStyle = {
	fontWeight: 'bolder',
	cursor: 'pointer',
	marginTop: '.8rem',
}

const Tag = props => {
	const { name, description, externalDocs } = props

	//operations
	const newData = Object.entries(data.paths)

	const [open, setOpen] = useState(false)

	const onArrowClickHandler = () => {
		setOpen(!open)
	}

	return (
		<div style={root}>
			{/* bar Section */}
			<div style={barSectionRoot}>
				<section style={barSection}>
					<h1>{name}</h1>
					<p>{description}</p>
				</section>
				<section style={barSection}>
					<p>{`${externalDocs?.description || ''}`}</p>
					<a href={`${externalDocs?.url || ''}`} target='blank' style={aStyle}>
						{externalDocs?.url || ''}
					</a>
					<i
						style={iconStyle}
						onClick={onArrowClickHandler}
						className={open ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}
					/>
				</section>
			</div>

			{/* bar Content Section */}

			{open && externalDocs && (
				<div>
					{Object.entries(newData).map(firstItem =>
						Object.values(firstItem[1][1]).map((secondItem, i) => {
							return (
								secondItem.tags[0] === name && (
									<Path
										key={i}
										secondItem={secondItem}
										heading={Object.keys(firstItem[1][1])[i]}
										routeName={firstItem[1][0]}
									/>
								)
							)
						})
					)}
				</div>
			)}
		</div>
	)
}

export default Tag

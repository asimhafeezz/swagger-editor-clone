import { useState } from 'react'
import styled from 'styled-components'

//root
const RootEnumType = styled.p`
	.enumItems {
		margin-left: 0.8rem;
	}
`

const Icon = styled.i`
	margin-left: 0.8rem;
	cursor: pointer;
`

//different types like array, enum, objects...
export const EnumType = ({ enumItem }) => {
	const [open, setOpen] = useState(false)

	const setOpenOnClickHandler = () => {
		setOpen(!open)
	}
	return (
		<RootEnumType>
			<p>
				{'Enum:'}
				<Icon
					onClick={setOpenOnClickHandler}
					className={open ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}
				/>
				{!open && <span>{' [...] '}</span>}
			</p>
			{open && (
				<>
					{'['}
					{enumItem.map((enumItems, i) => {
						return (
							<p key={i} className='enumItems'>
								{enumItems + ','}
							</p>
						)
					})}
					{']'}
				</>
			)}
		</RootEnumType>
	)
}

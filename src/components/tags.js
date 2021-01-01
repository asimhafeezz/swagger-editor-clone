import Tag from './tag'

const Tags = ({ data }) => {
	const { tags } = data
	return (
		<>
			{tags.map((tagItem, i) => {
				return <Tag key={i} tagItems={tagItem} data={data} />
			})}
		</>
	)
}

export default Tags

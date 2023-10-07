import { Box, Divider, Typography } from "@mui/material"
import ItemZoomSlider from "components/ItemZoomSlider";

export default function ItemsShelf({ selectedItemIndex, setSelectedItemIndex, formik }){
	const itemStyle = { marginRight: `${formik.values.spacing + 4}px`, 
						marginLeft: `${formik.values.spacing + 4}px`, 
						maxHeight: '10em' }
	
	const itemsStyles = [
		{ transform: `scale(${(formik.values.zoom_item1/1000) + 1})`, ...itemStyle },
		{ transform: `scale(${(formik.values.zoom_item2/1000) + 1})`, ...itemStyle },
		{ transform: `scale(${(formik.values.zoom_item3/1000) + 1})`, ...itemStyle },
		{ transform: `scale(${(formik.values.zoom_item4/1000) + 1})`, ...itemStyle }
	];

	const handleItemSelect = (index:number) => {
		setSelectedItemIndex(index);
	};

	return <Box padding={2}>
		<Typography fontSize={14} margin={2}>Manage Rack</Typography>
		<Divider />
		<div style={{padding: '0 4em 0 4em'}}>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				maxHeight: '13em',
				margin: '5.5em auto -5em auto',
				alignItems: 'flex-end'
			}}>
				{itemsStyles.map((style, index) => (
					<div key={index} style={{ position: 'relative' }}>
						<img
							src={`/images/item${index + 1}.png`}
							alt={`Item ${index + 1}`}
							style={selectedItemIndex === index ? { ...style, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.5)' } : style}
							onClick={() => handleItemSelect(index)}
							/>
					</div>
				))}
			</div>

			<img src="/images/shelf.png" 
				alt="shelf"
				style={{zIndex: '-1', width: '100%'}}
				/>

			{selectedItemIndex !== null && (
				<ItemZoomSlider formik={formik} valToChange={`zoom_item${selectedItemIndex + 1}`} />
			)}
		</div>
	</Box>
}
import { Box, Grid, Typography } from "@mui/material"
import { Form, Formik, FormikHelpers, useFormik } from 'formik';
import Divider from '@mui/material/Divider';
import ShelfNavbar from "components/ShelfNavbar";
import ShelfTextInput from "components/ShelfTextInput";
import ShelfSpacingSlider from "components/ShelfSpacingSlider";
import ItemZoomSlider from "components/ItemZoomSlider";
import { useState } from "react";

interface Values {
	name: string,
	shelfVariant: string,
	spacing: number,
	zoom_item1: number,
	zoom_item2: number,
	zoom_item3: number,
	zoom_item4: number
};

export default function Shelf(){
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const formik = useFormik<Values>({
		initialValues: {
		  name: '',
		  shelfVariant: '',
		  spacing: 8,
		  zoom_item1: 100,
		  zoom_item2: 100,
		  zoom_item3: 100,
		  zoom_item4: 100
		},
		onSubmit: (values, { setSubmitting }) => {}
	});

	const handleImageSelect = (index:number) => {
		setSelectedImageIndex(index);
	};

	const itemStyles = [
		{ marginRight: `${formik.values.spacing}px`, marginLeft: `${formik.values.spacing}px`, maxHeight: '100px', minHeight: '100px' },
		{ marginRight: `${formik.values.spacing}px`, marginLeft: `${formik.values.spacing}px`, maxHeight: '100px', minHeight: '100px' },
		{ marginRight: `${formik.values.spacing}px`, marginLeft: `${formik.values.spacing}px`, maxHeight: '100px', minHeight: '100px' },
		{ marginRight: `${formik.values.spacing}px`, marginLeft: `${formik.values.spacing}px`, maxHeight: '100px', minHeight: '100px' }
	];


	return <Formik
		enableReinitialize
		initialValues={formik.values}
		onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
			setTimeout(() => {
			  alert(JSON.stringify(values, null, 2));
			  setSubmitting(false);
			}, 500);
		  }}>
		<Form>
			<Grid container>
				<Grid item xs></Grid>
				<Grid item xs={8}>
					<ShelfNavbar/>
					<Divider />
					<Grid container padding={3} spacing={3}>
						<Grid item xs={6}>
							<ShelfTextInput name="name" label="Name"/>
						</Grid>
						<Grid item xs={6}>
							<ShelfTextInput name="shelfVariant" label="Shelf variant"/>
						</Grid>
						<Grid item xs={6}>
							<Typography fontSize={10}>SPACING</Typography>
							<ShelfSpacingSlider formik={formik}/>
						</Grid>
					</Grid> 
					<Divider />
					<Box padding={2}>
						<Typography fontSize={14} margin={2}>Manage Rack</Typography>
						<Divider />

						<div style={{
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
							margin: '8.5em auto -6em auto',
						 }}>
							{itemStyles.map((style, index) => (
								<div key={index} style={{ position: 'relative' }}>
									<img
										src={`/images/item${index + 1}.png`}
										alt={`Item ${index + 1}`}
										style={selectedImageIndex === index ? { ...style, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.5)' } : style}
										onClick={() => handleImageSelect(index)}
										/>
								</div>
							))}
						</div>

						<img src="/images/shelf.png" 
							alt="shelf"
							style={{zIndex: '-1', width: '100%'}}
							/>

						{selectedImageIndex !== null && (
							<ItemZoomSlider formik={formik} valToChange={`zoom_item${selectedImageIndex + 1}`} />
						)}
					</Box>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</Form>	
	</Formik>
}
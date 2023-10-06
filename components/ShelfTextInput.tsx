import { TextField } from "@mui/material"
import { Field } from 'formik';

export default function ShelfTextInput({ name, label }){
	return <Field name={ name }>
		{({ field }) => (
			<TextField variant="outlined"
				fullWidth
				label={ label }
				{...field} />
		)}
	</Field>
}
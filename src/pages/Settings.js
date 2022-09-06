import { Typography } from '@mui/material';
import SelectField from '../components/SelectField';

export const Settings = () => {
  return (
    <div>
        <Typography variant='h2' fontWeight='bold'>QUIZ APP</Typography>
        <form>
            <SelectField label='Category'/>
            <SelectField label='Difficulty Level'/>
            <SelectField label='Type'/>
        </form>
    </div>
  )
}

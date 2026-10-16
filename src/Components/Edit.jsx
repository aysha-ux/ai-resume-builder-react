import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUserEdit } from 'react-icons/fa';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
 <Button
        style={{ color: '#421c03' }}
        className='btn'
        onClick={handleOpen}
    >
        <FaUserEdit className='me-1' /> Edit CV
    </Button>      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        Edit Resume Details
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {/* Personal Details */}
        <div>
            <h3>Personal Details</h3>
            <div className='row p-3'>
                <TextField id="standard-basic-fullname" label="Full name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant='standard'>
                    <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Job"
                    >
                        <MenuItem value={"job"}>Job</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    </Typography>
</Box>
</Modal>
</div>
)
}

export default Edit
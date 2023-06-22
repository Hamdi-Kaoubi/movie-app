import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const Ratingo = ({setValue}) => {
    
    return (
    <div style={{width:'5px'}}>
        <Typography component="legend" style={{height:'10px'}}>Controlled</Typography>
            <Rating
                name="simple-controlled"
               
                onChange={(event) => 
                    setValue(event.target.value)
                }
 style={{marginLeft:'30px',backgroundColor:'#000000',borderRadius:'5px'}}/>
    </div>
    )
}

export default Ratingo;
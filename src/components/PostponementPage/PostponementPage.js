import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import './PostponementPage.css';
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));



const PostponementPage = () => {
    const [selectedFile, setSelectedFile] = useState({});
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [option, setOption] = useState();
    const handleOption = (event) => {
        setOption(event.target.value)
    }

    const handleSubmission = () => {
        console.log(selectedFile)
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
        	{
        		method: 'POST',
        		body: formData,
        	}
        )
        	.then((response) => response.json())
        	.then((result) => {
        		console.log('Success:', result);
        	})
        	.catch((error) => {
        		console.error('Error:', error);
        	});
    };


    const classes = useStyles()
    return (
        <div className='container'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className='type'>
                        <h4>SELECT TYPE:</h4>
                        <select className='space' value={option} onChange={handleOption} >
                            <option value=''></option>
                            <option value='test'>TEST</option>
                            <option value='ue'>UNIVERSITY EXAMINATION</option>
                            <option value='yos' >YEAR OF STUDY</option>
                        </select>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper className='upload'>
                    <h4>UPLOAD LETTER AND ATTACHMENT:</h4>
                    <input type="file" name="file" onChange={(e) => setSelectedFile(e.target.files[0])} /> <br /> <br />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmission}
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </Paper>
            </Grid>
        </div >
    );
}

export default PostponementPage;

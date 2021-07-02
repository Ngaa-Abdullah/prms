import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Progress.css';




const Progress = () => {

    // const files = [{ attachement: "Mustard" }, { attachement: 'YG' }]
    // let files = []
    // // const  = []

    // useEffect(() => {
    //     console.log('Function 2: ', files)
    // });

    // useEffect(() => {
    //     fetch('http://localhost:4000/fetch')
    //         .then(response => response.json())
    //         .then(data => {
    //             files = data.map(element => element.attachement)
    //             console.log('Function 1: ', files)
    //         })
    //         .catch(err => console.log(err))
    // });


  
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className='approval'>
                        <h4>Stages of Approval</h4>
                        {/* <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>File</th>
                                    {/* <th>Status</th> */}
                                {/* </tr>
                            </thead>
                            <tbody> */}
                                {
                                    // files.map((info, index) => {
                                    //     return (
                                    //         <tr key={index}>
                                    //             <td>{index + 1}</td>
                                    //             <td>{info}</td>
                                    //             {/* <td>Approved by MOD</td> */}
                                    //         </tr>

                                    //     )
                                    // })

                                    'Hey'
                                }
                            {/* </tbody>
                        </table> */}
                   
                    </Paper>
                </Grid>
            </Grid>

        </div>)
}

export default Progress;

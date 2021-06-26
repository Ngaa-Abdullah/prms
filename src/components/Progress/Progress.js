import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Progress.css';




const Progress = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className='approval'>
                        <h4>Stages of Approval</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>File</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>NGAA LETTER</td>
                                    <td>Approved by MOD</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>NGAA LETTER</td>
                                    <td>Approved by HOD</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>NGAA LETTER</td>
                                    <td>Approved by Pricipal</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>NGAA LETTER</td>
                                    <td>Waiting Approval from DVC Academic</td>
                                </tr>
                            </tbody>
                        </table>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}

export default Progress;

import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './RequestApproval.css'

const RequestApproval = () => {
  return (
    <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className="approval">
          <h4>Stages of Approval</h4>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>File</th>
                <th>Approve or Deny</th>
              </tr>
              <tr>
                <td>1</td>
                <td></td>
                <td className = 'status'>
                  <button>Approve</button>
                  <button>Deny</button>
                </td>
              </tr>
            </thead>
          </table>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
};

export default RequestApproval;

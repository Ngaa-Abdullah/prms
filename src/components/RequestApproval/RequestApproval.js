import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./RequestApproval.css";
import Axios from "axios";
import fileDownload from "js-file-download";


const RequestApproval = () => {
  const [new_requests, setNew_requests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/requests")
      .then((response) => response.json())
      .then((results) => {
        setNew_requests(results);
      })
      .catch((error) => console.error(error));
    return () => {};
  }, []);

  const approveRequest = (file) => {
    fetch("http://localhost:4000/app_or_dn", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        request_id: file.request_id,
        status: "AP",
      }),
    })
      .then((response) => response.json())
      .then((results) => {
        // console.log(results);
      })
      .catch((err) => console.error(err));
  };

  const denyRequest = (file) => {
    fetch("http://localhost:4000/app_or_dn", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        request_id: file.request_id,
        status: "DN",
      }),
    })
      .then((response) => response.json())
      .then((results) => {
        // console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const handleDownload = (file) => {
    Axios({
      url: "http://localhost:4000/download",
      method: "POST",
      data: {
        path_name: file.attachement,
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, file.file_name);
    });
  };


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
                  <th>Type</th>
                  <th>Registration_no</th>
                  <th>Approve or Deny</th>
                </tr>
              </thead>

              <tbody>
                {new_requests.length === 0 ? (
                  <tr>{"No Data!"}</tr>
                ) : (
                  new_requests.map((req_data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <button onClick={() => handleDownload(req_data)}>
                          {req_data.file_name}
                          </button>
                        </td>
                        <td>{ req_data.name }</td>
                        <td>{req_data.reg_no}</td>
                        <td className="status">
                          <button onClick={() => approveRequest(req_data)}>
                            Approve
                          </button>
                          <button onClick={() => denyRequest(req_data)}>
                            Deny
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default RequestApproval;

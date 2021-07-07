import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./Progress.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";

// files
import Axios from "axios";
import fileDownload from "js-file-download";

const Progress = ({ info }) => {
  // let res = str.substring(4);

  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/info")
      .then((response) => response.json())
      .then((results) => {
        setInformation(results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDownload = (event) => {
    Axios({
      url: "http://localhost:4000/download",
      method: "POST",
      data: {
        path_name: "attachments\\1625353668641Application Letter CEF.pdf",
      },
      responseType: "blob", // Important
    }).then((response) => {
      fileDownload(response.data, event.target.innerText);
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
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {information.length === 0 ? (
                  <tr>{"No Data!"}</tr>
                ) : (
                  information.map((info, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Button
                            variant="text"
                            color="default"
                            onClick={handleDownload}
                          >
                            {info.file_name}
                          </Button>
                        </td>
                        <td> "Waiting for approval" </td>
                        {/* <td>{info.status}</td> */}
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

export default Progress;

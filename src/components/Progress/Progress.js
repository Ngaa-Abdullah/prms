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
  const [requestInfo, setRequestInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/info")
      .then((response) => response.json())
      .then((results) => {
        setInformation(results);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/requests")
      .then((response) => response.json())
      .then((results) => {
        setRequestInfo(results);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

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
                            onClick={()=>handleDownload(info)}
                          >
                            {info.file_name}
                          </Button>
                        </td>
                        <td>
                          {info.type_id === 1
                            ? info.hod_status === "AP"
                              ? "APPROVED"
                              : info.hod_status === "DN"
                              ? "DENIED"
                              : info.mo_status === "AP"
                              ? "Waiting Approval from Head of Department"
                              : info.mo_status === "DN"
                              ? "Denied by Medical Officer"
                              : "Waiting for Approval from Medical Officer"
                            : info.type_id === 2
                            ? info.cp_status === "AP"
                              ? "APPROVED"
                              : info.cp_status === "DN"
                              ? "DENIED"
                              : info.mo_status === "AP"
                              ? "Waiting Approval from Head of Department"
                              : info.mo_status === "DN"
                              ? "Denied by Medical Officer"
                              :info.hod_status === "AP"
                              ? "Waiting Approval from College Principal"
                              : info.hod_status === "DN"
                              ? "Denied by Head of Department"
                              : "Waiting for Approval from Medical Officer"
                            : info.dvc_status === "AP"
                            ? "APROVED"
                            : info.dvc_status === "DN"
                            ? "DENIED"
                            : info.mo_status === "AP"
                            ? "Waiting for approval from Head of Department"
                            : info.mo_status === "DN"
                            ? "Denied by Medical officer"
                            : info.hod_status === "AP"
                            ? "Waiting Approval from College Principal"
                            : info.cp_status === "AP"
                            ? "Waiting Approval from DVC Academic"
                            : info.cp_status === "DN"
                            ? "Denied by college Principal"
                            : "Waiting Approval from Medical Officer"
                          }
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

export default Progress;

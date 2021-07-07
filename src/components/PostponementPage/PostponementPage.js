import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./PostponementPage.css";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const PostponementPage = ({ updateInfo }) => {
  const [selectedFile, setSelectedFile] = useState({});

  const [option, setOption] = useState();
  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);
    formData.append("type_id", option);

    fetch("http://6381dc4ff902.ngrok.io/upload", {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        updateInfo(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const classes = useStyles();
  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className="type">
            <h4>SELECT TYPE:</h4>
            <select className="space" value={option} onChange={handleOption}>
              <option value=""></option>
              <option value="1">TEST</option>
              <option value="2">UNIVERSITY EXAMINATION</option>
              <option value="3">YEAR OF STUDY</option>
            </select>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className="upload">
          <h4>UPLOAD LETTER AND ATTACHMENT:</h4>
          <input
            type="file"
            name="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />{" "}
          <br /> <br />
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
    </div>
  );
};

export default PostponementPage;

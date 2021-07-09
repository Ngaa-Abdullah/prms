import React from "react";

const HomePage = ({ user }) => {
  return (
    <div>
      <h4>
        Welcome {user.fname} {user.lname}
      </h4>
      <hr />
      <p>
        You have successfully login to the Postponement Request Management
        System(PRMS)
      </p>
      <p>You can access the functionalities by using appropiate side tabs</p>

      {!user.role_id ? (
        <div>
          <h3>Postponement</h3>
          <p>
            This functionality allow you as student to apply or request for
            postponement by selecting the type of postponement and uploading the
            letter and finally hitting the "SUBMIT" button
          </p>
          <h3>View Progress</h3>
          <p>
            This functionality allow you as the student to view progress of your
            postponement request submitted
          </p>
          <hr />
        </div>
      ) : (
        <div>
          <h3>Approve/Deny Request</h3>
          <p>
            This functionality allow you as administrator to approve or deny the
            submitted student's postponement request by viewing the file after
            downloading and clicking approve button if satisfied with the
            content
          </p>
          {/* <h3>Approve/Deny Request</h3>
          <p>
            This functionality allow you as administrator to approve or deny the
            submitted student's postponement request by viewing the file after
            downloading and clicking approve button if satisfied with the
            content
          </p> */}
          <hr />
        </div>
      )}
    </div>
  );
};

export default HomePage;

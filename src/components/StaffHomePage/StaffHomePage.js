import React from "react";

const StaffHomePage = ({ user }) => {
  return (
    <div>
      <h4>Welcome {user.fname}</h4> <hr />
      <p>
        You have successfully login to the Postponement Request Management
        System(PRMS)
      </p>
      <p>
        You can access the functionalities of the PRMS by using appropiate side
        tabs
      </p>
      <h3>Approve/Deny Request</h3>
      <p>
        This functionality allow you as administrator to approve or deny the
        submitted student's postponement request by viewing the file after
        downloading and clicking approve button if satisfied with the content
      </p>
      <hr />
    </div>
  );
};

export default StaffHomePage;

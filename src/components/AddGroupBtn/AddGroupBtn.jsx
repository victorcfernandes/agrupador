import React from "react";
import { Link } from "@reach/router";

import "./styles.scss";

const AddGroupBtn = () => {
  return (
    <Link className="add-group-btn" to="adicionar">
      +
    </Link>
  );
};

export default AddGroupBtn;

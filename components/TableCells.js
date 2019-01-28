// import React from "react";
// import { Alert } from "reactstrap";
// import { Table } from "reactstrap";

export default props => (
  <tr>
    <td className={`color-coded-${props.polarity} table-data`}>
      {props.timestamp}
    </td>
    <td className={`color-coded-${props.polarity} table-data`}>{props.text}</td>
    <td className={`color-coded-${props.polarity} table-data`}>
      {props.retweetCount}
    </td>
    <td className={`color-coded-${props.polarity} table-data`}>
      {props.screenName}
    </td>

    <style jsx>
      {`
        .color-coded-4 {
          background-color: #a0e8af;
        }
        .color-coded-0 {
          background-color: #e8aeb7;
        }
        .color-coded-2 {
          background-color: #edf5fc;
        }
        .table-data {
          border: 1px solid rgba(157, 181, 178, 0.5);
        }
      `}
    </style>
  </tr>
);

// className={`color-coded-${props.polarity} table-data`}

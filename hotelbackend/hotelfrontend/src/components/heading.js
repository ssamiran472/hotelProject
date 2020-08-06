import React from "react";
import Style from "styled-components";

const Head = Style.h1`
    color: rgba(219, 174, 69, 90%)
`;

const Heading = (props) => {
  return (
    <Head className="h1 display-6">
      <u className="">{props.text}</u>
    </Head>
  );
};

export default Heading;

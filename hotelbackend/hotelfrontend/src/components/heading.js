import React from "react";
import Style from "styled-components";

const Head = Style.h1`
  font-size: 5rem;
  color: rgba(173, 145, 69, 90%)
`;

const Heading = (props) => {
  return (
    <Head className="h1 display-6">
      <u className="">{props.text}</u>
    </Head>
  );
};

export default Heading;

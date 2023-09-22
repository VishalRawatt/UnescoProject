// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

export function Section({ value, maxcount }) {
  useEffect(() => {});
  return (
    <div>
      <h1>
        {value}-{maxcount}
      </h1>
    </div>
  );
}

Section.propTypes = {
  value: PropTypes.string,
  maxcount: PropTypes.number,
};

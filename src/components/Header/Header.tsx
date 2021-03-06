import Input from "components/common/Input";
import React from "react";
import useStyles from "./Header.styles";

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src="assets/amongNotes.gif" alt="Notes logo" />
      </div>
      <div className={classes.title}>
        <h1 title="Click to edit">
          <Input
            placeholder="fuesliez notes title"
            defaultValue="fusliez notes"
            className={classes.titleInput}
            id="title-input"
          />
        </h1>
      </div>
      <div className={classes.logo}>
        <img src="assets/amongNotes.gif" alt="Notes logo" />
      </div>
    </div>
  );
}

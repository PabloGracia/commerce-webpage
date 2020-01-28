import React from "react";
import { connect, ConnectedProps } from "react-redux";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { StateType } from "../../redux/root.types";
import { DirectoryStateType } from "../../redux/directory/directory.types";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

interface IProps {}
interface IState {
  sections: IItem[];
}

export interface IItem {
  title: string;
  imageUrl?: string;
  size?: string;
  id?: number;
  linkUrl?: string;
}

const Directory: React.FC<PropsFromRedux> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: StateType): DirectoryStateType => ({
  sections: selectDirectorySections(state)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Directory);

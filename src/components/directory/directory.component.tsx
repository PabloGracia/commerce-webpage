import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

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

export class Directory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "SNEAKERS",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "WOMEN",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4
        },
        {
          title: "MEN",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

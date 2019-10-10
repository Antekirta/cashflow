import React from "react";
import "./TrackCell.scss";
import { styleInterface } from "../../interfaces";

export interface iTrackCellProps extends styleInterface {
  title: string;
  width: number;
  height: number;
  color: string;
}

export class TrackCell extends React.Component<iTrackCellProps> {
  render() {
    return (
      <div
        className="track-cell"
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          backgroundColor: this.props.color,
          ...this.props.style
        }}
      >
        {this.props.title}
      </div>
    );
  }
}

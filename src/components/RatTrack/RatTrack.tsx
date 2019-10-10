import React from "react";
import "./RatTrack.scss";
import { iTrackCellProps, TrackCell } from "../TrackCell/TrackCell";
import { getRandomInt } from "../../utils/getRandomInt";

const cellTypes: Array<Pick<iTrackCellProps, "title" | "color">> = [
  {
    title: "Market",
    color: "#f7ca18"
  },
  {
    title: "Chance",
    color: "#29f1c3"
  },
  {
    title: "Small Deal",
    color: "#19b5fe"
  },
  {
    title: "Big Deal",
    color: "#4d05e8"
  },
  {
    title: "Salary",
    color: "#fde3a7"
  },
  {
    title: "Waste!",
    color: "#cf000f"
  }
];

const cellTypesCount = cellTypes.length;

const cellsCount = 128;

const cellWidth = 100,
  cellHeight = 100;

const w = Math.floor(((window.innerWidth * 9) / 10 / cellWidth) * 2);
const h = (cellsCount - 2 * w) / 2;

const cells: any = [...Array(cellsCount).keys()].map(
  () => cellTypes[getRandomInt(cellTypesCount)]
);

let isFirst: boolean, isLast: boolean;

export const RatTrack: React.FC = () => {
  return (
    <div className="rat-track">
      {cells.slice(0, w).map((cell: iTrackCellProps, index: number) => {
        isFirst = index === 0;
        isLast = index === w - 1;
        return (
          <TrackCell
            key={index}
            title={cell.title}
            color={cell.color}
            width={isFirst || isLast ? cellWidth : cellWidth / 2}
            height={cellHeight}
            style={{
              left: isFirst ? 0 : cellWidth / 2 + (index * cellWidth) / 2,
              writingMode: "vertical-lr"
            }}
          />
        );
      })}

      {cells.slice(w, w + h).map((cell: iTrackCellProps, index: number) => {
        return (
          <TrackCell
            key={index + w}
            title={cell.title}
            color={cell.color}
            width={cellWidth}
            height={cellHeight / 2}
            style={{
              top: cellHeight + (cellHeight / 2) * index,
              left: (cellWidth / 2) * w
            }}
          />
        );
      })}

      {cells
        .slice(w + h, w * 2 + h)
        .map((cell: iTrackCellProps, index: number) => {
          isFirst = index === 0;
          isLast = index === w * 2 + h - (w + h) - 1;
          return (
            <TrackCell
              key={w * 2 + h - index - 1}
              title={cell.title}
              color={cell.color}
              width={isFirst || isLast ? cellWidth : cellWidth / 2}
              height={cellHeight}
              style={{
                top: cellHeight + (h * cellHeight) / 2,
                left: isFirst ? 0 : cellWidth / 2 + (index * cellWidth) / 2,
                writingMode: "vertical-rl"
              }}
            />
          );
        })}

      {cells.slice(w * 2 + h).map((cell: iTrackCellProps, index: number) => {
        return (
          <TrackCell
            key={w * 2 + 2 * h - index - 1}
            title={cell.title}
            color={cell.color}
            width={cellWidth}
            height={cellHeight / 2}
            style={{
              top: cellHeight + (cellHeight / 2) * index,
              left: 0
            }}
          />
        );
      })}
    </div>
  );
};

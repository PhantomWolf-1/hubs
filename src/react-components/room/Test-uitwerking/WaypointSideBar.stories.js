import React from "react";
import { RoomLayout } from "../../layout/RoomLayout";
import { WaypointSideBar, WaypointSideBarItem, NoWaypoints } from "./WaypointSideBar";

export default {
  title: "Room/WaypointSideBar",
  parameters: {
    layout: "fullscreen"
  }
};

const waypoints = [
  {
    id: "1",
    name: "1-duck",
    wpLink: "#Way-Point-test-1"
  },
  {
    id: "2",
    name: "2-ducks",
    wpLink: "#Way-Point-test-2"
  },
  {
    id: "3",
    name: "3-ducks",
    wpLink: "#Way-Point-test-3"
  }
];

export const Base = () => (
  <RoomLayout
    sidebar={
      <WaypointSideBar>
        {waypoints.map(waypoint => <WaypointSideBarItem waypoint={waypoint} key={waypoint.id} />)}
      </WaypointSideBar>
    }
  />
);

export const Empty = () => (
  <RoomLayout
    sidebar={
      <WaypointSideBar >
        <NoWaypoints />
      </WaypointSideBar>
    }
  />
);


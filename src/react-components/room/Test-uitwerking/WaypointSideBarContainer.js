import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { NoWaypoints, WaypointSidebar, WaypointSidebarItem } from "./WaypointSidebar";
import { List } from "../../layout/List";
import { useWaypointList } from "./useWaypointList";

export function WaypointSidebarContainer({ onClose, hubChannel }) {
  const listRef = useRef();
  const { waypoints, selectedWaypoint, selectWaypoint} = useWaypointList();
  const Testwaypoints = [
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
  waypoints === Testwaypoints;
//   const onUnfocusListItem = useCallback(
//     e => {
//       if (e.relatedTarget === listRef.current || !listRef.current.contains(e.relatedTarget)) {
//         unfocusObject();
//       }
//     },
//     [unfocusObject, listRef]
//   );

  return (
    <WaypointSidebar onClose={onClose}>
      {Testwaypoints.length > 0 ? (
        <List ref={listRef}>
          {Testwaypoints.map(waypoint => (
            <WaypointSidebarItem
              selected={selectedWaypoint === waypoint}
              waypoint={waypoint}
              key={waypoint.id}
              //onClick={() => selectWaypoint(waypoint)}
              onClick={() => window.history.replaceState(null, null, window.location.href.split("#")[0] + waypoint.wpLink)}
              onMouseOver={() => console.log("")}
              onFocus={() => console.log("")}
              onMouseOut={() => console.log("")}
              onBlur={() => console.log("")}
            />
          ))}
        </List>
      ) : (
        <NoWaypoints />
      )}
    </WaypointSidebar>
  );
}

WaypointSidebarContainer.propTypes = {
  hubChannel: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

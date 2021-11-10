import React, { useState, useEffect, useContext, createContext, useCallback, Children, cloneElement } from "react";
import PropTypes from "prop-types";

// function getDisplayString(el) {
//   // Having a listed-media component does not guarantee the existence of a media-loader component,
//   // so don't crash if there isn't one.
//   const url = (el.components["media-loader"] && el.components["media-loader"].data.src) || "";
//   const split = url.split("/");
//   const resourceName = split[split.length - 1].split("?")[0];
//   let httpIndex = -1;
//   for (let i = 0; i < split.length; i++) {
//     if (split[i].indexOf("http") !== -1) {
//       httpIndex = i;
//     }
//   }

//   let host = "";
//   let lessHost = "";
//   if (httpIndex !== -1 && split.length > httpIndex + 3) {
//     host = split[httpIndex + 2];
//     const hostSplit = host.split(".");
//     if (hostSplit.length > 1) {
//       lessHost = `${hostSplit[hostSplit.length - 2]}.${hostSplit[hostSplit.length - 1]}`;
//     }
//   }

//   const firstPart =
//     url.indexOf("sketchfab.com") !== -1 ? "Sketchfab" : url.indexOf("youtube.com") !== -1 ? "YouTube" : lessHost;

//   return `${firstPart} ... ${resourceName.substr(0, 4)}`;
// }

const WaypointListContext = createContext({
  waypoints: [],
  selectedObject: null,
});


export function WaypointListProvider({ scene, children }) {
  const [waypoints, setWaypoints] = useState([]);
  const [selectedWaypoint, setSelectedWaypoint] = useState(null); // The object currently selected in the object list

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
  setWaypoints(Testwaypoints);

  const selectWaypoint = useCallback(object => setSelectedWaypoint(object));
  const deselectWaypoint = useCallback(() => selectedWaypoint === null);

  const selectNextWaypoint = useCallback(
    () => {
      const curWPIdx = waypoints.indexOf(selectedWaypoint);

      if (curWPIdx !== -1) {
        const nextWPIdx = (curWPIdx + 1) % waypoints.length;
        selectWaypoint(waypoints[nextWPIdx]);
      }
    },
    [selectWaypoint, waypoints, selectedWaypoint]
  );

  const selectPrevWaypoint = useCallback(
    () => {
      const curWPIdx = waypoints.indexOf(selectedWaypoint);

      if (curWPIdx !== -1) {
        const nextWPIdx = curWPIdx === 0 ? waypoints.length - 1 : curWPIdx - 1;
        selectWaypoint(waypoints[nextWPIdx]);
      }
    },
    [selectWaypoint, waypoints, selectedWaypoint]
  );

  const context = {
    waypoints,
    activeWaypoint: selectedWaypoint,
    selectedWaypoint,
    selectWaypoint,
    deselectWaypoint,
    selectPrevWaypoint,
    selectNextWaypoint
  };

  // Note: If we move ui-root to a functional component and use hooks,
  // we can use the useObjectList hook instead of cloneElement.

  return (
    <WaypointListContext.Provider value={context}>
      {Children.map(children, child => cloneElement(child, { ...context }))}
    </WaypointListContext.Provider>
  );
}

WaypointListProvider.propTypes = {
  scene: PropTypes.object.isRequired,
  children: PropTypes.node
};

export function useWaypointList() {
  return useContext(WaypointListContext);
}

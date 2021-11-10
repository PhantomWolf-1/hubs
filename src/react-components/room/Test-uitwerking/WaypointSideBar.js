import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./WaypointSidebar.scss";
import { Sidebar } from "../../sidebar/Sidebar";
import { CloseButton } from "../../input/CloseButton";
import { ButtonListItem } from "../../layout/List";
import listStyles from "../../layout/List.scss";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function WaypointSidebarItem({ selected, waypoint, ...rest }) {
    const intl = useIntl();
  
    return (
      <ButtonListItem
        {...rest}
        className={classNames(styles.waypoint, { [listStyles.selected]: selected })}
        type="button"
        aria-label={intl.formatMessage(
          { 
            id: "waypoints-sidebar.waypoint-label", 
            defaultMessage: "WP" 
          },
          {
            waypointName: waypoint.name
          }
        )}
      >
        <p>{waypoint.name}</p>
      </ButtonListItem>
    );
}

WaypointSidebarItem.propTypes = {
  selected: PropTypes.bool,
  waypoint: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    wpLink: PropTypes.string.isRequired
  })
};
  
export function NoWaypoints() {
  return (
    <li className={styles.noWaypoints}>
      <p>
        <FormattedMessage id="waypoints-sidebar.no-waypoints" defaultMessage="There are no waypoints." />
      </p>
    </li>
  );
}

export function WaypointSidebar({ children, onClose }) {
  return (
    <Sidebar
      title={
        <FormattedMessage
          id="waypoint-sidebar.title"
          defaultMessage="Waypoints"
        />
      }
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      <ul>{children}</ul>
    </Sidebar>
  );
}

WaypointSidebar.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func
  };
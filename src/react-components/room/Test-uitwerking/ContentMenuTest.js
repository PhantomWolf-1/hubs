import React from "react";
import className from "classnames";
import PropTypes from "prop-types";
import { joinChildren } from "../../misc/joinChildren";
import styles from "./ContentMenuTest.scss";
import { ReactComponent as ObjectsIcon } from "../../icons/Objects.svg";
import { ReactComponent as PeopleIcon } from "../../icons/People.svg";
import { FormattedMessage } from "react-intl";

export function ContentMenuTestButton({ active, children, ...props }) {
  return (
    <button className={className(styles.contentMenuButton, { [styles.active]: active })} {...props}>
      {children}
    </button>
  );
}

ContentMenuTestButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
};

function FormattedMessageFixed(props){
  return <FormattedMessage {...props} />;
} 

export function TeleportButton(props){
  return (
    <button className={className(styles.contentMenuButton, {[styles.active]: props.active})} 
    onClick={props.onClick}>
      <PeopleIcon />
      <span>
        <FormattedMessageFixed id="content-menu.teleport-menu-button" defaultMessage={props.name} />
      </span>
    </button>
  );
}


export function RoomMenuTestButton(props) {
  return (
    <ContentMenuTestButton {...props}>
      <PeopleIcon />
      <span>
        <FormattedMessage id="content-menu.rooms-menu-button" defaultMessage="Rooms" />
      </span>
    </ContentMenuTestButton>
  );
}


export function AngleMenuTestButton(props) {
    return (
      <ContentMenuTestButton {...props}>
        <ObjectsIcon />
        <span>
          <FormattedMessage id="content-menu.Angles-menu-button" defaultMessage="Angles" />
        </span>
      </ContentMenuTestButton>
    );
}
AngleMenuTestButton.propTypes={
  
};


export function ContentMenuTest({ children }) {
  return <div className={styles.contentMenu}>{joinChildren(children, () => <div className={styles.separator} />)}</div>;
}

ContentMenuTest.propTypes = {
  children: PropTypes.node
};

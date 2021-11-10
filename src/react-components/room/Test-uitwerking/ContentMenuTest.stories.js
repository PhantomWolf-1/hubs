/* eslint-disable @calm/react-intl/missing-formatted-message */
import React from "react";
import { RoomLayout } from "../layout/RoomLayout";
import { ContentMenuTest, RoomMenuTestButton, AngleMenuTestButton } from "./ContentMenuTest";

export default {
  title: "Room/ContentMenuTest",
  parameters: {
    layout: "fullscreen"
  }
};

export const Base = () => (
  <RoomLayout
    viewport={
      <ContentMenuTest>
        <RoomMenuTestButton />
        <AngleMenuTestButton />
      </ContentMenuTest>
    }
  />
);

export const Active = () => (
  <RoomLayout
    viewport={
      <ContentMenuTest>
        <RoomMenuTestButton active />
        <AngleMenuTestButton />
      </ContentMenuTest>
    }
  />
);

export const OnlyPeople = () => (
  <RoomLayout
    viewport={
      <ContentMenuTest>
        <AngleMenuTestButton />
      </ContentMenuTest>
    }
  />
);

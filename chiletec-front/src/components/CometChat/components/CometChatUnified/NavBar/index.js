import React from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import CometChatUserList from "../../CometChatUserList";
import CometChatGroupList from "../../CometChatGroupList";
import CometChatConversationList from "../../CometChatConversationList";
import CometChatUserInfoScreen from "../../CometChatUserInfoScreen";
import { Popover, Tooltip } from 'antd';

import {
  footerStyle,
  navbarStyle,
  itemStyle,
  itemLinkStyle
} from "./style";

import chatGreyIcon from "./resources/chat-grey-icon.svg";
import chatBlueIcon from "./resources/chat-blue-icon.svg";
import contactGreyIcon from "./resources/people-grey-icon.svg";
import contactBlueIcon from "./resources/people-blue-icon.svg";
import groupGreyIcon from "./resources/group-chat-grey-icon.svg";
import groupBlueIcon from "./resources/group-chat-blue-icon.svg";
import moreGreyIcon from "./resources/more-grey-icon.svg";
import moreBlueIcon from "./resources/more-blue-icon.svg";


const navbar = (props) => {

  const switchComponent = () => {

    switch (props.tab) {
      case "contacts":
        return <CometChatUserList 
        theme={props.theme}
        item={props.item}
        actionGenerated={props.actionGenerated}
        enableCloseMenu={props.enableCloseMenu}
        onItemClick={(item, type) => props.actionGenerated("itemClicked", type, item)}></CometChatUserList>;
      case "calls":
        return "calls";
      case "conversations":
        return <CometChatConversationList
        theme={props.theme}
        item={props.item}
        groupToUpdate={props.groupToUpdate}
        actionGenerated={props.actionGenerated}
        enableCloseMenu={props.enableCloseMenu}
        onItemClick={(item, type) => props.actionGenerated("itemClicked", type, item)}></CometChatConversationList>;
      case "groups":
        return <CometChatGroupList 
        theme={props.theme}
        groupToLeave={props.groupToLeave}
        groupToDelete={props.groupToDelete}
        groupToUpdate={props.groupToUpdate}
        actionGenerated={props.actionGenerated}
        enableCloseMenu={props.enableCloseMenu}
        onItemClick={(item, type) => props.actionGenerated("itemClicked", type, item)}></CometChatGroupList>;
      case "info":
        return <CometChatUserInfoScreen
        theme={props.theme}
        onItemClick={(item, type) => props.actionGenerated("itemClicked", type, item)}></CometChatUserInfoScreen>;
      default:
        return null;
    }

  }

  const chatsTabActive = (props.tab === "conversations") ? true : false;
  const userTabActive = (props.tab === "contacts") ? true : false;
  const groupsTabActive = (props.tab === "groups") ? true : false;
  const moreTabActive = (props.tab === "info") ? true : false;

  return (
    <React.Fragment>
      {switchComponent()}
      <div css={footerStyle()}>
        <div css={navbarStyle()}>
          <div css={itemStyle()} onClick={() => props.actionGenerated('tabChanged', 'conversations')}>
            <Popover title="Conversaciones" content={"Aqu?? puedes ver las conversaciones pendiente y activas"} placement="topLeft" arrowPointAtCenter><span css={itemLinkStyle(chatGreyIcon, chatBlueIcon, chatsTabActive)}></span></Popover>
          </div>
          <div css={itemStyle()} onClick={() => props.actionGenerated('tabChanged', 'contacts')}>
            <Popover title="Lista de participantes" content={"Puedes hablar con quien quieras con solo hacer click en el nombre"} placement="topRight" arrowPointAtCenter><span css={itemLinkStyle(contactGreyIcon, contactBlueIcon, userTabActive)}></span></Popover>
          </div>
          <div css={itemStyle()} onClick={() => props.actionGenerated('tabChanged', 'groups')}>
            <Popover title="Grupos disponibles" content={"Puedes crear un grupo en el icono en la barra superior o unirte a uno con solo hacer click"} trigger="hover" placement="topRight" arrowPointAtCenter><span css={itemLinkStyle(groupGreyIcon, groupBlueIcon, groupsTabActive)}></span></Popover>
          </div>
          {/* <div css={itemStyle()} onClick={() => props.actionGenerated('tabChanged', 'info')}>
            <span css={itemLinkStyle(moreGreyIcon, moreBlueIcon, moreTabActive)}></span>
          </div>  */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(navbar);
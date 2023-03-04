import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ListItem } from "@rneui/base";
import tw from "twrnc";
import { Context } from "../context";

const PlayerItem = ({ playerName }) => {
  let { deletePlayer } = useContext(Context);
  return (
    <ListItem
      bottomDivider
      containerStyle={tw`my-1 text-white bg-red-500`}
      onLongPress={() => {
        deletePlayer(playerName);
      }}
    >
      <ListItem.Chevron />
      <ListItem.Content>
        <ListItem.Title style={tw`text-white`}>{playerName}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default PlayerItem;

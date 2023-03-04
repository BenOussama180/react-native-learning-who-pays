import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@rneui/base";
import tw from "twrnc";
import PlayerItem from "./PlayerItem";

const stage_one = () => {
  const {
    addPlayer,
    pickLoser,
    state: { players },
  } = useContext(Context);
  return (
    <>
      <Formik
        initialValues={{ player: "" }}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("The player name is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          addPlayer(values.player);
          resetForm();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View>
            <Text className="flex mx-auto text-3xl font-semibold text-red-500">
              Who pays the bill
            </Text>
            <Input
              placeholder="player name..."
              leftIcon={{ type: "antdesign", name: "adduser", color: "red" }}
              onChangeText={handleChange("player")}
              onBlur={handleBlur("player")}
              value={values.player}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={tw`mb-5`}
              inputStyle={tw`text-white`}
            />
            <Button
              buttonStyle={tw`py-3 bg-red-500 rounded-lg`}
              title="Add Player"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>

      <View className="mt-16">
        {players.map((playerName, index) => (
          <PlayerItem key={index} playerName={playerName} />
        ))}

        {players.length >= 2 && (
          <Button
            buttonStyle={tw`py-3 mt-10 bg-red-500 rounded-lg`}
            title="Pick The Loser"
            onPress={() => pickLoser()}
          />
        )}
      </View>
    </>
  );
};

export default stage_one;

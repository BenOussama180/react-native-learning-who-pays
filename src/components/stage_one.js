import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "@rneui/base";

const stage_one = () => {
    const context = useContext(Context);
    return (
        <Formik
            initialValues={{ player: "" }}
            validationSchema={Yup.object({
                player: Yup.string()
                    .min(3, "Must be 3 characters or more")
                    .max(15, "Must be 15 characters or less")
                    .required("The player name is required"),
            })}
            onSubmit={(values, { resetForm }) => {
                alert(values.player);
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
                    <Text className="flex text-xl font-semibold mx-auto">
                        Who pays the bill
                    </Text>
                    <Input
                        placeholder="player name.."
                        leftIcon={{ type: "antdesign", name: "adduser" }}
                        onChangeText={handleChange("player")}
                        onBlur={handleBlur("player")}
                        value={values.player}
                        renderErrorMessage={errors.player && touched.player}
                        errorMessage={errors.player}
                    />
                    <Button title="Add Player" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

export default stage_one;

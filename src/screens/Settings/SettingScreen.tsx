import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./SettingScreen.styles";
import { images } from "../../Assests/Images/map";
import scale, { verticalScale } from "../../Globals/scale";
import { colors } from "../../Globals/color";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={images.back_arrow}
            resizeMode="contain"
            style={styles.back_arrow}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Settings</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View
          style={{ marginTop: verticalScale(32), marginHorizontal: scale(24) }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.nameHeading}>Name</Text>
            <TouchableOpacity>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>John Smith</Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.gray,
              marginTop: verticalScale(20),
            }}
          />
        </View>
        <View
          style={{ marginTop: verticalScale(20), marginHorizontal: scale(24) }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.nameHeading}>Email</Text>
            <TouchableOpacity>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>john@smith.com</Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.gray,
              marginTop: verticalScale(20),
            }}
          />
        </View>

        <View
          style={{ marginTop: verticalScale(32), marginHorizontal: scale(24) }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.nameHeading}>Password</Text>
            <TouchableOpacity>
              <Text style={styles.edit}>Change</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.gray,
              marginTop: verticalScale(20),
            }}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

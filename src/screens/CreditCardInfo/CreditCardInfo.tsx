import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./CreditCardInfo.styles";
import { images } from "../../Assests/Images/map";
import scale, { verticalScale } from "../../Globals/scale";
import { colors } from "../../Globals/color";

const CreditCardInfo = () => {
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
        <Text style={styles.heading}>Credit Card Info</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <View
            style={{
              flexDirection: "row",
              marginTop: verticalScale(16),
              marginHorizontal: scale(16),
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.cardInfo}>Credit Card Info</Text>
            <TouchableOpacity>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardNo}>**** 5778</Text>
        </View>
      </View>
    </View>
  );
};

export default CreditCardInfo;

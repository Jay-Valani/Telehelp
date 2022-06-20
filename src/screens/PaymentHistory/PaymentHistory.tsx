import { TouchableOpacity, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./PaymentHistory.styles";
import { images } from "../../Assests/Images/map";
import scale, { verticalScale } from "../../Globals/scale";
import { DummyData } from "./DummyData";
import { colors } from "../../Globals/color";

const PaymentHistory = () => {
  const _renderPaymentHistory = ({ item, index }) => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: verticalScale(20),
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.orderId}>{item.orderId}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.gray,
            marginTop: verticalScale(20),
          }}
        />
      </View>
    );
  };
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
        <Text style={styles.heading}>Payment History</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View
          style={{ marginTop: verticalScale(12), marginHorizontal: scale(24) }}
        >
          <FlatList
            data={DummyData}
            renderItem={(item) => _renderPaymentHistory(item)}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentHistory;

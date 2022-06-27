import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import Modal from 'react-native-modal';
import {styles} from './AddDocuments.styles';
import AssignmentBenefits from '../assignment-of-benefits/AssignmentBenefits';

const AddDocuments = (props: any) => {
  const [isAssignmentBenefits, setIsAssignmentBenefits] = useState(false);
  const [isAssignmentBenefitsDone, setIsAssignmentBenefitsDone] =
    useState(false);

  const onConfirm = () => {
    setIsAssignmentBenefitsDone(!isAssignmentBenefitsDone);
  };

  const onSubmit = () => {
    isAssignmentBenefitsDone == false
      ? null
      : 
      props.navigation.navigate('session_book');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: scale(23),
          justifyContent: 'space-between',
          marginTop: verticalScale(60),
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            source={images.back_arrow}
            resizeMode="contain"
            style={styles.back_arrow}
          />
        </TouchableOpacity>
        <Image
          source={images.unchecked}
          resizeMode="contain"
          style={styles.circle}
        />
      </View>
      <Text style={styles.heading}>Add documents</Text>

      <TouchableOpacity
        onPress={() => {
          setIsAssignmentBenefits(!isAssignmentBenefits);
        }}>
        <View
          style={[
            styles.card,
            {
              marginTop: verticalScale(40),
              borderColor:
                isAssignmentBenefitsDone == false
                  ? colors.gray
                  : colors.appThemeColor,
              borderWidth: isAssignmentBenefitsDone == false ? 0.2 : 0.8,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: verticalScale(16),
              marginHorizontal: scale(20),
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.info}>Assignment of Benefits</Text>
            </View>
            {isAssignmentBenefitsDone == false ? (
              <Image
                source={images.plus}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            ) : (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View
          style={[
            styles.card,
            {
              marginTop: verticalScale(12),
              borderColor: colors.gray,
              borderWidth: 0.2,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: verticalScale(16),
              marginHorizontal: scale(20),
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.info}>
                Online Therapy{'\n'}
                Consent Form
              </Text>
            </View>
            {/* {isInsuranceCardDone == false ? ( */}
            <Image
              source={images.plus}
              resizeMode="contain"
              style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
            />
            {/* ) : (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            )} */}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={[
            styles.card,
            {
              marginTop: verticalScale(12),
              borderWidth: 0.2,
              borderColor: colors.gray,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: verticalScale(16),
              marginHorizontal: scale(20),
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.info}>
                HIPAA Privacy {'\n'}
                Authorization Form
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={images.plus}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.addForm}>
          + Add another HIPAA Privacy Authorization Form
        </Text>
      </TouchableOpacity>

      {/* button */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        {/* <TouchableOpacity onPress={() => {props.navigation.navigate("session_book")}}> */}
        <TouchableOpacity onPress={() => {onSubmit()}}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  isAssignmentBenefitsDone == false
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  isAssignmentBenefitsDone == false
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Save documents</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={isAssignmentBenefits}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.2}
        // backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setIsAssignmentBenefits(!isAssignmentBenefits);
        }}>
        <View
          style={{
            marginTop: verticalScale(50),
            backgroundColor: 'transparent',
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            overflow: 'hidden',
          }}>
          <AssignmentBenefits
            isAssignmentBenefitsDone={isAssignmentBenefitsDone}
            isAssignmentBenefits={isAssignmentBenefits}
            setIsAssignmentBenefits={setIsAssignmentBenefits}
            onConfirm={onConfirm}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AddDocuments;

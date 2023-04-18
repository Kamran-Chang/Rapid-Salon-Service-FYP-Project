import * as React from "react";
import { Image, StyleSheet, Text, View, StatusBar } from "react-native";
import { Color, FontFamily, Border, FontSize, Margin } from "../GlobalStyles";
import { SearchBar } from 'react-native-elements';

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <View style={[styles.user, styles.userPosition]}>
        <Image
          style={[styles.userChild, styles.userIconLayout, styles.userLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
        <Image
          style={[styles.userItem, styles.userIconLayout, styles.userLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector38.png")}
        />
        <Text style={[styles.komalShaikh, styles.komalShaikhClr]}>
          KOMAL SHAIKH
        </Text>
        <Text
          style={[
            styles.sukkurIbaUniversity,
            styles.selectTypesTypo1,
            styles.komalShaikhClr,
          ]}
        >
          65200, Sukkur IBA University
        </Text>
        <Image
          style={styles.beautifulWomanWearingSunglaIcon}
          resizeMode="cover"
          source={require("../assets/beautifulwomanwearingsunglassesavatarcharactericonfreevector-1.png")}
        />
      </View>
      <View style={styles.SearchBarLayout}>
      
        <SearchBar 
          placeholder=" Search location or salon"
          //lightTheme
          //round
          
          //value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        </View>
      <Text
        style={[
          styles.exclusiveOffers,
          styles.viewAllTypo,
          styles.selectTypesTypo,
        ]}
      >
        Exclusive Offers
      </Text>
      <Text
        style={[
          styles.upcomingAppointments,
          styles.womenTypo,
          styles.selectTypesTypo1,
        ]}
      >
        Upcoming Appointments
      </Text>
      <Text style={[styles.viewAll, styles.viewAllTypo]}>view all</Text>
      <Text
        style={[
          styles.selectTypes,
          styles.selectTypesTypo,
          styles.selectTypesTypo1,
        ]}
      >
        Select Types
      </Text>
      <Text
        style={[
          styles.exploreByServices,
          styles.selectTypesTypo,
          styles.selectTypesTypo1,
        ]}
      >
        Explore by Services
      </Text>
      <StatusBar barStyle="default" />
      <View style={styles.rectangleGroup}>
        <View
          style={[
            styles.groupItem,
            styles.groupChildShadowBox,
            styles.groupLayout,
          ]}
        />
        <Image
          style={styles.imageRemovebgPreview1Icon}
          resizeMode="cover"
          source={require("../assets/imageremovebgpreview-1.png")}
        />
        <View style={styles.groupInner} />
        <Text style={[styles.ext22BeaContainer, styles.ellipseParentLayout]}>
          <Text style={styles.ext22Bea}>
            <Text style={styles.ext22Typo}>EXT 22% BEA</Text>
          </Text>
          <Text style={styles.raOffOnRd}>
            <Text style={styles.ext22Typo}>{`RA `}</Text>
            <Text>OFF ON</Text>
            <Text> RD</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.useCodeCom201,
            styles.ext22Typo,
            styles.useCodeCom201Typo,
          ]}
        >
          Use code: COM201
        </Text>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox1]} />
        <Text style={[styles.maneSat16Container, styles.maneTypo]}>
          <Text style={styles.ext22Bea}>
            <Text style={styles.ext22Typo}>Mane</Text>
          </Text>
          <Text style={styles.raOffOnRd}>
            <Text style={styles.sat161}>Sat 16,</Text>
          </Text>
        </Text>
        <Image
          style={[styles.download12, styles.downloadLayout]}
          resizeMode="cover"
          source={require("../assets/download-1-2.png")}
        />
      </View>
      <View style={[styles.groupView, styles.userPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildShadowBox1,
            styles.groupChildLayout,
          ]}
        />
        <Image
          style={[styles.download11, styles.downloadLayout]}
          resizeMode="cover"
          source={require("../assets/download-1-1.png")}
        />
        <Text
          style={[
            styles.maneBeautylocks,
            styles.maneBeautylocksPosition,
            styles.maneTypo,
            styles.ext22Typo,
          ]}
        >
          Mane Beautylocks
        </Text>
        <Text
          style={[styles.sat16thuContainer, styles.maneBeautylocksPosition]}
        >
          <Text
            style={[styles.sat16thu, styles.maneTypo]}
          >{`Sat 16,thu  `}</Text>
          <Text style={styles.text}>
            <Text style={styles.ext22Typo}>.</Text>
          </Text>
          <Text style={styles.sat161}>
            <Text>{` `}</Text>
            <Text style={styles.maneTypo}> 5:00 pm</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
        <View
          style={[
            styles.groupChild2,
            styles.groupChildShadowBox,
            styles.groupLayout,
            styles.groupChildLayout,
          ]}
        />
        <Text style={[styles.women, styles.ext22Typo, styles.womenTypo]}>
          WOMEN
        </Text>
        <Image
          style={[styles.women1Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/women-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <View
          style={[
            styles.groupChild3,
            styles.groupChildShadowBox,
            styles.groupChildLayout,
          ]}
        />
        <Text style={styles.men}>MEN</Text>
        <Image
          style={[styles.men1Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/men-1.png")}
        />
      </View>
      <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.userIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={[styles.hairCut, styles.beardTypo]}>Hair cut</Text>
        <Image
          style={[styles.image1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={styles.ellipseGroup}>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={styles.ellipseContainer}>
        <Image
          style={[styles.groupChild5, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.beard, styles.beardTypo]}>Beard</Text>
        <Image
          style={[styles.image2Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <View style={[styles.ellipseParent1, styles.ellipseParentPosition]}>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.image6Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <View style={styles.ellipseParent2}>
        <Image
          style={[styles.groupChild7, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text style={[styles.facial, styles.facialTypo]}>Facial</Text>
        <Image
          style={[
            styles.image3Icon,
            styles.iconParentLayout,
            styles.iconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </View>
      <View style={[styles.ellipseParent3, styles.iconParentLayout]}>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[
            styles.image7Icon,
            styles.iconParentLayout,
            styles.iconLayout2,
          ]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </View>
      <View style={styles.ellipseParent4}>
        <Image
          style={[styles.groupChild9, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.hairColor, styles.facialTypo]}>Hair color</Text>
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
      <View
        style={[
          styles.ellipseParent5,
          styles.iconParentLayout,
          styles.ellipseParentPosition,
        ]}
      >
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userPosition: {
    left: "2.57%",
    position: "absolute",
  },
  SearchBarLayout:{
    top:100,
    height: 20,
    width: 310,
    left: 20,
    borderRadius: 50,
  },
  userIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  userLayout: {
    bottom: "25.32%",
    top: "17.05%",
    width: "11.25%",
    height: "57.63%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIconLayout: {
    bottom: "41.47%",
    top: "22.77%",
    width: "6.11%",
    height: "35.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  komalShaikhClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  selectTypesTypo1: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.mistyrose,
    borderRadius: Border.br_sm,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChildLayout: {
    width: "100%",
    right: "0%",
  },
  useCodeCom201Typo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    position: "absolute",
  },
  viewAllTypo: {
    fontFamily: FontFamily.iBMPlexSansKRSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  selectTypesTypo: {
    fontSize: FontSize.size_4xl,
    color: Color.black,
  },
  womenTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderRadius: Border.br_md,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.mistyrose,
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: "100%",
    borderRadius: Border.br_md,
    top: "0%",
  },
  ellipseParentLayout: {
    height: 81,
    position: "absolute",
  },
  ext22Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  maneTypo: {
    fontSize: FontSize.size_xl,
    color: Color.black,
  },
  downloadLayout: {
    height:49,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  maneBeautylocksPosition: {
    left: 91,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentPosition: {
    bottom: "26.39%",
    position: "absolute",
  },
  iconLayout3: {
    height: 55,
    borderRadius: Border.br_lg,
    top: 0,
    position: "absolute",
  },
  beardTypo: {
    fontFamily: FontFamily.iBMPlexSansKRRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconLayout1: {
    height: 61,
    width: 66,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  groupChildPosition: {
    left: "-5.25%",
    right: "-5.25%",
    width: "110.49%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseParentPosition: {
    bottom: 20,
    width: "17.81%",
  },
  facialTypo: {
    top: 77,
    fontFamily: FontFamily.iBMPlexSansKRRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconParentLayout: {
    height: 66,
    position: "absolute",
  },
  iconLayout2: {
    width: 66,
    height: 66,
    borderRadius: Border.br_lg,
  },
  iconLayout: {
    height: 63,
    width: 62,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  userChild: {
    right: "-1.02%",
    left: "89.77%",
    maxHeight: "100%",
  },
  vectorIcon: {
    right: "1.43%",
    left: "92.46%",
  },
  userItem: {
    right: "9.59%",
    left: "79.15%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    right: "12.04%",
    left: "81.85%",
  },
  komalShaikh: {
    height: "47.2%",
    width: "44.69%",
    top: "15.62%",
    left: "24.31%",
    fontSize: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  sukkurIbaUniversity: {
    height: "30.43%",
    width: "57.37%",
    top: "63.77%",
    left: "24.39%",
    fontSize: 14,
    textAlign: "left",
  },
  beautifulWomanWearingSunglaIcon: {
    width: "22.45%",
    right: "77.55%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  user: {
    height: "8.28%",
    width: "91.81%",
    top: "4.94%",
    right: "5.62%",
    bottom: "82.78%",
  },
  groupChild: {
    right: "0%",
    left: "0%",
  },
  vectorIcon2: {
    height: "65.8%",
    width: "6.98%",
    top: "13.16%",
    right: "2.51%",
    bottom: "21.05%",
    left: "90.5%",
    maxHeight: "100%",
  },
  searchLocationOr: {
    height: "63.16%",
    width: "62.57%",
    top: "10.42%",
    left: "7.82%",
    color: "rgba(0, 0, 0, 0.63)",
    fontFamily: FontFamily.poppinsRegular,
  },
  rectangleParent: {
    height: "4.5%",
    width: "91.79%",
    top: "15.9%",
    right: "3.77%",
    bottom: "75.59%",
    left: "4.44%",
    position: "absolute",
  },
  exclusiveOffers: {
    height: "4.27%",
    width: "58.46%",
    top: "19.98%",
    left: "7.24%",
  },
  upcomingAppointments: {
    height: "3.84%",
    width: "69.47%",
    top: "42.15%",
    left: "4.44%",
  },
  viewAll: {
    height: "4.08%",
    width: "25.64%",
    top: "41.51%",
    left: "77.93%",
    fontSize: 17,
    color: "rgba(0, 0, 0, 0.62)",
  },
  selectTypes: {
    height: "3.55%",
    width: "37.44%",
    top: "56.03%",
    left: "4.44%",
    textAlign: "left",
    position: "absolute",
  },
  exploreByServices: {
    height: "3.6%",
    width: "49.62%",
    top: "69.21%",
    left: "5.37%",
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    width: "95.13%",
    right: "4.87%",
    top: "0%",
  },
  imageRemovebgPreview1Icon: {
    left: 184,
    width: 229,
    height: 129,
    top: -5,
    position: "absolute",
  },
  groupInner: {
    top: 80,
    left: 11,
    borderRadius: 5,
    backgroundColor: "#e14203",
    width: 163,
    height: 25,
    position: "absolute",
  },
  ext22Bea: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  raOffOnRd: {
    margin: Margin.m_md,
  },
  ext22BeaContainer: {
    left: 12,
    fontSize: 26,
    color: "#926842",
    //whiteSpace: "pre-wrap",
    width: 210,
    top: 8,
    textAlign: "left",
  },
  useCodeCom201: {
    top: 80,
    left: 20,
    color: Color.white,
  },
  rectangleGroup: {
    height: "15.76%",
    width: "96.5%",
    top: "25.31%",
    bottom: "53.93%",
    left: "3.5%",
    right: "0%",
    position: "absolute",
  },
  rectangleView: {
    width: "51.8%",
    right: "46.05%",
    left: "2.15%",
      
  },
  sat161: {
    fontFamily: FontFamily.poppinsRegular,
  },
  maneSat16Container: {
    left: 69,
    width: 177,
    top: 11,
    textAlign: "left",
    position: "absolute",
  },
  download12: {
    width: 63,
    left: 0,
    top: 6,
  },
  rectangleContainer: {
    height: "7.2%",
    width: "57.48%",
    top: "47.16%",
    right: "-29.67%",
    bottom: "39.64%",
    left: "72.2%",
    position: "absolute",
  },
  download11: {
    top: 4,
    left: 6,
    width: 71,
  },
  maneBeautylocks: {
    top: 4,
  },
  sat16thu: {
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    fontSize: 0,
    color: Color.orangered_100,
  },
  sat16thuContainer: {
    top: 24,
    width: 150,
    height: 42,
  },
  groupView: {
    height: "7.23%",
    width: "64.87%",
    top: "48.21%",
    right: "32.56%",
    bottom: "40.57%",
  },
  groupChild2: {
    right: "0%",
    top: "0%",
  },
  women: {
    top: 21,
    left: 65,
    width: 91,
  },
  women1Icon: {
    width: 55,
    left: 2,
  },
  rectangleParent1: {
    height: "8.32%",
    width: "38.71%",
    top: "59.98%",
    right: "13%",
    left: "48.83%",
  },
  groupChild3: {
    height: "96.02%",
    top: "3.98%",
    right: "0%",
  },
  men: {
    top: 17,
    left: 78,
    width: 62,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  men1Icon: {
    width: 50,
    left: 5,
  },
  rectangleParent2: {
    height: "8.32%",
    width: "36.39%",
    top: "59.98%",
    right: "59.41%",
    left: "4.21%",
  },
  ellipseIcon: {
    width: "110.42%",
    right: "-5.24%",
    bottom: 8,
    left: "-5.18%",
    height: 73,
  },
  hairCut: {
    top: 58,
    left: 10,
  },
  image1Icon: {
    top: 2,
    left: 0,
  },
  ellipseParent: {
    width: "17.82%",
    right: "78.21%",
    bottom: 93,
    left: "3.97%",
  },
  groupChild4: {
    bottom: -8,
    height: 73,
  },
  image5Icon: {
    top: 1,
    left: 5,
  },
  ellipseGroup: {
    right: "53.92%",
    bottom: 22,
    left: "28.27%",
    height: 65,
    width: "17.81%",
    position: "absolute",
  },
  groupChild5: {
    height: "83.24%",
    bottom: "16.76%",
    top: "0%",
    maxHeight: "100%",
  },
  beard: {
    top: 73,
    left: 17,
  },
  image2Icon: {
    left: 7,
    top: 6,
  },
  ellipseContainer: {
    height: "10.41%",
    top: "74%",
    right: "52.98%",
    bottom: "10.58%",
    left: "29.21%",
    width: "17.81%",
    position: "absolute",
  },
  image6Icon: {
    left: 9,
    top: 0,
  },
  ellipseParent1: {
    right: "29.96%",
    left: "52.23%",
    height: 67,
    position: "absolute",
    
  },
  groupChild7: {
    height: "80%",
    bottom: "20%",
    top: "0%",
    maxHeight: "100%",
  },
  facial: {
    left: 16,
  },
  image3Icon: {
    left: 2,
    top: 11,
  },
  ellipseParent2: {
    height: "10.83%",
    top: "74.12%",
    right: "30.19%",
    bottom: "10.04%",
    left: "52%",
    width: "17.81%",
    position: "absolute",
  },
  image7Icon: {
    left: 4,
    top: 0,
  },
  ellipseParent3: {
    right: "7.42%",
    bottom: 15,
    left: "74.77%",
    width: "17.81%",
  },
  groupChild9: {
    height: "80.42%",
    bottom: "19.58%",
    top: "0%",
    maxHeight: "100%",
  },
  hairColor: {
    left: 5,
  },
  image4Icon: {
    top: 9,
    left: 0,
  },
  ellipseParent4: {
    height: "10.78%",
    top: "74.72%",
    right: "5.55%",
    bottom: "9.5%",
    left: "76.64%",
    width: "17.81%",
    position: "absolute",
  },
  image8Icon: {
    left: 5,
    top: 0,
  },
  ellipseParent5: {
    right: "78.92%",
    left: "3.27%",
  },
  mainScreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default MainScreen;

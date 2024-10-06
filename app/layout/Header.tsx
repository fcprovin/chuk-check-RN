import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Theme } from "../types/type";
import { RootState } from "../redux/store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";



function Header() {

  return (
    <Layout>
      <View><Image source={require("../../assets/icons/logo.png")}/></View>
      <TouchableOpacity><Image source={require("../../assets/icons/user.png")}/></TouchableOpacity>
    </Layout>
  );
}

export default Header;


const Layout = styled.View`
  width: 85%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`
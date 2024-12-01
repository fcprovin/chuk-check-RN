import React from "react";
import { useAppDispatch } from "../redux/store";
import pageSlice from "../redux/slices/page";
import styled from "styled-components/native";
import { Theme } from "../types/type";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";
import { Platform, ScrollView, View } from "react-native";



function Left(){
    const dispatch = useAppDispatch();
    const getPage = useSelector((state:RootState) => state.page);

    return(
        <View >

        </View>
    )
}

export default Left;


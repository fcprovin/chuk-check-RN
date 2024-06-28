import { Image, Modal, Text, View } from "react-native";
import styled from "styled-components/native";

function RemoconModal(){

    return(
        <ViewModal 
            animationType="fade"
            transparent={true}
            visible={false}>
                <RemoconLayout>
                    <RemoconCon>
                        {/* 왼쪽 */}
                        <View>
                            <View><Text>Rose Connect Ver 4.17.04</Text></View>

                            <View>
                                <View><Text>Connected device</Text></View>
                                <Image />
                                <Text>device name</Text>
                            </View>

                            <View>
                                <View><Text>Connect table Device</Text></View>
                                <Text>검색창</Text>

                                <View>
                                    {/* 리스트 */}
                                </View>
                            </View>
                        </View>

                        {/* 오른쪽 */}
                        <View>
                            <View>

                                <View>

                                    <View>
                                        <View>
                                            <Text>StanBy More</Text>
                                            <Text>Reboot</Text>
                                            <Text>Power Off</Text>
                                        </View>

                                        <View>
                                            <Text>Previous</Text>
                                            <Text>Rose Home</Text>
                                            <Text>LCD On/Off</Text>
                                            <Text>Clock</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <Text>재생 영역</Text>
                                    </View>

                                    <View>
                                        <Text>In/Out setting</Text>
                                        <Text>VU Mode</Text>
                                        <Text>Timer</Text>
                                        <Text>Off</Text>
                                        <Text>DLNA</Text>
                                        <Text>Airplay</Text>
                                    </View>
                                </View>

                                <View>
                                    <View>
                                        <Text>Volume</Text>
                                    </View>
                                    <View><Text>Mute</Text></View>
                                </View>

                            </View>

                            <View><Text>Amp Connection Management</Text></View>
                        </View>

                    </RemoconCon>
                </RemoconLayout>
        </ViewModal>
    )
}

export default RemoconModal;

const ViewModal = styled.Modal`
    top: 0;
    left: 0;
`

const RemoconLayout = styled.View`
    display: flex;
    align-items: flex-end;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;    

`

const RemoconCon = styled.View`
    width: 100%;
    max-width: 1000px;
    min-width: 480px;
    height: 667px;
    background-color: #333;
    border-radius: 15px;
`
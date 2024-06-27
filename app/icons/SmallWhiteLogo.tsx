import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import styled from "styled-components/native";




function SmallWhiteLogo(){


    return(
        <Layout>
            <Svg  width="30" height="30" viewBox="0 0 63 72" fill="none" >
                <Path d="M31.0263 0L0 17.9979V54.0021L31.0263 72L62.0526 54.0021V17.9979L31.0263 0ZM31.9354 5.6145L56.2176 19.7005L43.2583 32.0009L27.1914 15.0245L31.9272 5.6145H31.9354ZM46.2006 41.4941L24.4557 49.0852L16.29 36.6852L25.1004 19.1939L46.2006 41.4941ZM25.7533 8.14765L13.513 32.466L5.30603 20.0078L25.7533 8.14765ZM4.38037 51.4606V26.5858L20.1828 50.5802L9.36406 54.3592L4.38037 51.4689V51.4606ZM31.0263 66.9171L14.3808 57.2578L49.5148 44.9906L56.3582 52.2164L31.0263 66.9171ZM57.6723 47.2248L46.2833 35.1902L57.6723 24.3765V47.2248Z" fill="white"/>
            </Svg>
        </Layout>

    )
}

export default SmallWhiteLogo;


const Layout = styled.View`
    margin-bottom: 20px;
`
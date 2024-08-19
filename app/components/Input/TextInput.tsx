import { Theme } from "@/app/types/type";
import styled from "styled-components/native";



interface IInput{
    placeHolder : string
    text : string
    setText : React.Dispatch<React.SetStateAction<string>>
    password: boolean
    type: string
    height: string
}

function TextInput(props:IInput){
    const { placeHolder, text, setText, password, type, height } = props

    const onChangeText = (inputText:string) => {
        setText(inputText)
    }

    return(
        <Input 
            placeholder={placeHolder}
            value={text}
            onChangeText={onChangeText}
            placeholderTextColor={'#919191'}
            secureTextEntry={password} 
            type={type}
            customHeight={height}
        />
    )
}

export default TextInput;


const Input = styled.TextInput<Theme>`
    color: ${(props) => props.theme.color.black};
    background-color: #f4f4f4;
    width: ${(props) => props.type === "type1" ? "100%" : "48%"};
    height: ${(props) => props.customHeight};
    font-size: 12px;
    padding: 13px 12.5px;
    border: 1px solid #999999;
    border-radius: 10px;
    outline-style: none;
`
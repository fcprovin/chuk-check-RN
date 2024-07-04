import { Theme } from "@/app/types/type";
import styled from "styled-components/native";



interface IInput{
    placeHolder : string
    text : string
    setText : React.Dispatch<React.SetStateAction<string>>
    password: boolean
}

function TextInput(props:IInput){
    const { placeHolder, text, setText, password } = props

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
        />
    )
}

export default TextInput;


const Input = styled.TextInput<Theme>`
    color: ${(props) => props.theme.color.black};
    background-color: #ffffff;
    width: 90%;
    height: 40px;
    font-size: ${(props) => props.theme.fontSize.small};
    padding: 13px 12.5px;

    outline-style: none;
`
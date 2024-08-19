//스타일 타입 정의
// theme: 무조건 있어야 하는 항목
// ~?: 있을수도 있고 없을수도 있는 항목
export interface Theme{
    theme: DefaultTheme
    customFontSize?: string
    customColor?: string
    customBold?:number
    custombackGround?: string
    customWidth?: string
    customHeight?:string

    type?:string 

    boolean?: boolean
}

export interface DefaultTheme{
    color:{
        "black" : string,
        "gray" : string,
        "gray_2": string,
        "gray_3" : string
    },
} 


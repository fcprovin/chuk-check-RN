
export interface Theme{
    theme: DefaultTheme
    customSize?: string
    customColor?: string
    customBold?:number
    custombackGround?: string
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



export interface Theme{
    theme: DefaultTheme
    hovered?: boolean
    hoverColor?: string
}

export interface DefaultTheme{
    color:{
      primaryColor:string;
      white: string;
      baseBackGround: string;
      black: string;
      backgroundGray: string;
      textGray:string;
      footerBackGround:string
    },
    fontSize: {
        small: string,
        Regular: string,
        large: string,
        title: string
    }
} 

//electron 헤더 버튼
export interface Size{
    size : string
}

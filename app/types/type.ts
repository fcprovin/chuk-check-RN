
export interface Theme{
    theme: DefaultTheme

    hovered?: boolean
    hoverColor?: string
    hideWidth?: boolean 
    inColor?: boolean
}

export interface DefaultTheme{
    color:{
      primaryColor:string;
      white: string;
      baseBackGround: string;
      black: string;
      backgroundGray: string;
      textGray:string;
      footerBackGround:string;
      loginGray: string;
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
    width : string,
    height?: string
}

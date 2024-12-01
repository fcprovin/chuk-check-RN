import { RootState } from '../../redux/store/reducers';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

export const WebViewShow = ({ uri, onNavigationStateChange, style }:any) => {
    const webviewRef = useRef<any>(null);



        

        useEffect(() => {
            const webview = webviewRef.current;
            
            if (webview) {
              // 페이지가 완전히 이동되었을 때 발생
              webview.addEventListener('did-navigate', onNavigationStateChange);
        
              // 같은 페이지 내에서 이동이 발생했을 때 (해시, pushState 등)
              webview.addEventListener('did-navigate-in-page', (navState:any) => {
                onNavigationStateChange(navState)
              });
            }
        
            // Cleanup
            return () => {
              if (webview) {
                webview.removeEventListener('did-navigate', onNavigationStateChange);
                webview.removeEventListener('did-navigate-in-page', onNavigationStateChange);
              }
            };
          }, []);




    return(
        <iframe id='webview' width={"100%"} height={"100%"} src={uri} />
    )
}

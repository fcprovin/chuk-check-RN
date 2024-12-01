


export const KakaoApi = () => {



    // const getAccessToken = async (code: string) => {
    //     try {
    //       const response = await fetch(KAKAO_TOKEN_URL, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //         body: `grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    //       });
    
    //       const data = await response.json();
    //       if (data.access_token) {
    //         console.log("Access Token:", data.access_token);
    //         return data.access_token;
    //       } else {
    //         console.error("Failed to fetch access token:", data);
    //         return null;
    //       }
    //     } catch (error) {
    //       console.error("Token Request Error:", error);
    //       throw error;
    //     }
    //   };
    
    //   const fetchUserInfo = async (token: string) => {
    //     try {
    //       const response = await fetch(KAKAO_USER_INFO_URL, {
    //         method: "GET",
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //       const data = await response.json();
    //       console.log("User Info:", data);
    //       return data;
    //     } catch (error) {
    //       console.error("User Info Request Error:", error);
    //       throw error;
    //     }
    //   };
}
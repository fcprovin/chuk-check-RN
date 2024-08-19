import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/reducers";
import pageSlice from "../redux/slices/page";


interface Ipage{
    "path" : string,
    "path2": string,
    "team" ?: string,
    "param1"?: string,
    "param2"?: string,
    "param3"?: string,
    "param4"?:string
}

interface IHistory{
    "path" : string[],
    "path2": string[],
    "team" : string[],
    "param1": string[],
    "param2": string[],
    "param3": string[],
    "param4"?:string[]
}




export const usePage = () => {
    const [settingPage, setSettingPage] = useState<Ipage>();
    const [pre, setPre] = useState(false)
    const [next, setnext] = useState(false)
    
    const dispatch = useAppDispatch();
    const getPage = useSelector((state:RootState) => state.page.page);


    const setting = (page:Ipage) => {
        if(pre){
            if(getPage.current.point  >  0){
                dispatch( pageSlice.actions.setCurrentPage({
                    "path" :  getPage.history.path[getPage.current.point - 1],
                    "path2" :  getPage.history.path2[getPage.current.point - 1],
                    "team" :  getPage.history.team[getPage.current.point - 1],
                    "param1" :  getPage.history.param1[getPage.current.point - 1],
                    "param2" :  getPage.history.param2[getPage.current.point - 1],
                    "param3" :  getPage.history.param3[getPage.current.point - 1],
                    "param4" :  getPage.history.param4[getPage.current.point - 1],
                    "point" :  getPage.current.point - 1,
                }))
            }
        }else if(next){
            if(getPage.current.point + 1 < getPage.history.path.length){
                dispatch( pageSlice.actions.setCurrentPage({
                    "path" :  getPage.history.path[getPage.current.point + 1],
                    "path2" :  getPage.history.path2[getPage.current.point + 1],
                    "team" :  getPage.history.team[getPage.current.point + 1],
                    "param1" :  getPage.history.param1[getPage.current.point + 1],
                    "param2" :  getPage.history.param2[getPage.current.point + 1],
                    "param3" :  getPage.history.param3[getPage.current.point + 1],
                    "param4" :  getPage.history.param4[getPage.current.point + 1],
                    "point" :  getPage.current.point + 1,
                }))
            }
        }else{
            
            let newHistory
            if(getPage.current.point + 1 < getPage.history.path.length){
                newHistory = {
                    path: [...getPage.history.path.slice(0, getPage.current.point + 1), page.path],
                    path2: [...getPage.history.path2.slice(0, getPage.current.point + 1), page.path2],
                    team: [...getPage.history.team.slice(0, getPage.current.point + 1), page.team],
                    param1: [...getPage.history.param1.slice(0, getPage.current.point + 1), page.param1],
                    param2: [...getPage.history.param2.slice(0, getPage.current.point + 1), page.param2],
                    param3: [...getPage.history.param3.slice(0, getPage.current.point + 1), page.param3],
                    param4: [...getPage.history.param4.slice(0, getPage.current.point + 1), page.param4],
                };
            }else{
                newHistory = {
                    path: [...getPage.history.path, page.path],
                    path2: [...getPage.history.path2, page.path2],
                    team: [...getPage.history.team, page.team],
                    param1: [...getPage.history.param1, page.param1],
                    param2: [...getPage.history.param2, page.param2],
                    param3: [...getPage.history.param3, page.param3],
                    param4: [...getPage.history.param4, page.param4],
                };

            }
            if(newHistory.path.length > 20){
                newHistory.path.splice(1,1),
                newHistory.path2.splice(1,1),
                newHistory.team.splice(1,1),
                newHistory.param1.splice(1,1),
                newHistory.param2.splice(1,1),
                newHistory.param3.splice(1,1),
                newHistory.param4.splice(1,1),

                newHistory={
                    path: newHistory.path,
                    path2: newHistory.path2,
                    team: newHistory.team,
                    param1: newHistory.param1,
                    param2: newHistory.param2,
                    param3: newHistory.param3,
                    param4: newHistory.param4
                }
            }

            dispatch( pageSlice.actions.setCurrentPage({
                ...page,
                "point": getPage.current.point + 1 < 20 ? getPage.current.point + 1 : 19
            }))
            dispatch(pageSlice.actions.setPageHistory(newHistory));
        }

        setPre(false);
        setnext(false);
    }

    useEffect(() => {
        if(settingPage){
            setting({
                "team" : "",
                "param1": "",
                "param2": "",
                "param3": "",
                "param4": "",
                ...settingPage
            });
        }
    },[settingPage])

    useEffect(() => {
        if(pre || next){
            setting({
                "path":"",
                "path2":"",
                "team" : "",
                "param1": "",
                "param2": "",
                "param3": "",
                "param4": "",
                ...settingPage
            })
        }
    },[pre,next])



    return{ setSettingPage, setPre, setnext }

}

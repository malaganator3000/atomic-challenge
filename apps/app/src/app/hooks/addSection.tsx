import { useDispatch } from "react-redux";
import { Section } from "../store/types/Section";
import { sectionsActions } from "../store/actions/sections.actions";


export type UseAddSection = () => (section:Section)=>void

export const useAddSection:UseAddSection = () =>{

    const dispatch = useDispatch()

    const setData = (section:Section) =>{
        dispatch(sectionsActions.ADD_SECTION(section))
    }

    return setData
}
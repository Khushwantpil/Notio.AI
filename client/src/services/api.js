import axios from "axios";
import { serverUrl } from "../App";
import { setUserdata } from "../redux/userSlice";
export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get(`${serverUrl}/api/user/currentuser`, { withCredentials: true });
       // console.log(result.data);
        dispatch(setUserdata(result.data))
        return result.data;
    } catch (error) {
        console.error("Get Current User Error:", error);
    }
}
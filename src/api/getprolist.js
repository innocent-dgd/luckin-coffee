import * as API from "./index";
export const getProlist=(params)=>{
       return API.GET("/productlist.php",params);
};
export const getDetail=(params)=>{
       return API.GET("/detail.php",params);
}

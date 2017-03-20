const BASE_URL="http://192.168.0.100:8081/API/";
export const HTTP_URL_API={
    USER_LOGIN:BASE_URL+'USER/Login',//登录
    USER_REGISTER:BASE_URL+'USER/Register',//注册
    RANKING:BASE_URL+'USER/UserWinRanking',//排行榜
    USER_SCORE:BASE_URL+'USER/scoredetail',//会员积分
    USER_MODIFY:BASE_URL+'USER/Edit',//信息修改
    SYSTEM_MESSAGE:BASE_URL+'SYSTEM/MESSAGE',//通知公告
    GAME_STATICS:BASE_URL+'GAME/STATICS'//投注统计
};
/**
 * 功能描述：路由管理
 * 2020/01/15
 * 作者：win
 */
const routes = [
    {
        path: "/",
        name: "login",
        component: resolve => require(["@/views/login/index.vue"], resolve)
    }
];

export default routes;

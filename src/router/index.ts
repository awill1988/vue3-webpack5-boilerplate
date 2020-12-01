import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import Home from "@/views/Home.vue";
import i18n, { setI18nLanguage, loadLocaleMessages, I18n } from '@/i18n'

let router: Router;
export function setupRouter(i18nInstance: I18n | undefined = i18n) {
    const SUPPORT_LOCALES = ['en']
    const locale =
        i18nInstance.mode === 'legacy' ? i18nInstance.global.locale : i18nInstance.global.locale.value

    // setup routes
    const routes: Array<RouteRecordRaw> = [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "@/views/About.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => `/${locale}`
        }
    ];

    // create router instance
    router = createRouter({
        history: createWebHistory(),
        routes
    });

    // navigation guards
    router.beforeEach((to, from, next) => {
        const locale = to.params.locale as string

        // check locale
        if (!SUPPORT_LOCALES.includes(locale)) {
            return false
        }

        // load locale messages
        loadLocaleMessages(i18nInstance, locale)

        // set i18n language
        setI18nLanguage(i18nInstance, locale)

        return next()
    })

    return router
}

router = setupRouter()

export default router;
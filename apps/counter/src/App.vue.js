import { RouterLink, RouterView } from 'vue-router';
import { greet } from '@my-app/core-utils';
import { BaseButton } from '@my-app/ui';
const greeting = greet('Nathan');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['router-link-exact-active']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({});
__VLS_asFunctionalElement(__VLS_elements.img)({
    alt: "Vue logo",
    ...{ class: "logo" },
    src: "@/assets/logo.svg",
    width: "125",
    height: "125",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "wrapper" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
(__VLS_ctx.greeting);
// @ts-ignore
[greeting,];
const __VLS_0 = {}.BaseButton;
/** @type {[typeof __VLS_components.BaseButton, typeof __VLS_components.BaseButton, ]} */ ;
// @ts-ignore
BaseButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({});
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: "/",
}));
const __VLS_7 = __VLS_6({
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
var __VLS_8;
const __VLS_10 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    to: "/about",
}));
const __VLS_12 = __VLS_11({
    to: "/about",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
var __VLS_13;
const __VLS_15 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            RouterView: RouterView,
            BaseButton: BaseButton,
            greeting: greeting,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */

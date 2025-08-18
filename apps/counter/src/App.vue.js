import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
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
/** @type {[typeof HelloWorld, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HelloWorld, new HelloWorld({
    msg: (__VLS_ctx.greeting),
}));
const __VLS_1 = __VLS_0({
    msg: (__VLS_ctx.greeting),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[greeting,];
const __VLS_4 = {}.BaseButton;
/** @type {[typeof __VLS_components.BaseButton, typeof __VLS_components.BaseButton, ]} */ ;
// @ts-ignore
BaseButton;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const { default: __VLS_8 } = __VLS_7.slots;
var __VLS_7;
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({});
const __VLS_9 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    to: "/",
}));
const __VLS_11 = __VLS_10({
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const { default: __VLS_13 } = __VLS_12.slots;
var __VLS_12;
const __VLS_14 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
    to: "/about",
}));
const __VLS_16 = __VLS_15({
    to: "/about",
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_18 } = __VLS_17.slots;
var __VLS_17;
const __VLS_19 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            RouterView: RouterView,
            HelloWorld: HelloWorld,
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

const props = defineProps();
const emit = defineEmits();
function onClick() {
    if (!props.disabled)
        emit('click');
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['base_btn']} */ ;
/** @type {__VLS_StyleScopedClasses['base_btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.onClick) },
    ...{ class: "base_btn" },
    disabled: (__VLS_ctx.disabled),
    'read-only': (__VLS_ctx.readonly),
});
// @ts-ignore
[onClick, disabled, readonly,];
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['base_btn']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            onClick: onClick,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
    },
    __typeEmits: {},
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */

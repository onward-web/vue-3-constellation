export default _sfc_main;
declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    starWidth: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starRandomWidth: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lineColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    positionX: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    positionY: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    velocity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    length: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    stars: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, {
    vue3Constellation: import("vue").Ref<null>;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    starWidth: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    starRandomWidth: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    lineColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    positionX: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    positionY: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    velocity: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    length: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    stars: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    width: number;
    height: number;
    starColor: string;
    lineColor: string;
    lineWidth: number;
    positionX: number;
    positionY: number;
    length: number;
    distance: number;
    radius: number;
    starWidth: number;
    starRandomWidth: boolean;
    velocity: number;
    stars: unknown[];
}>;

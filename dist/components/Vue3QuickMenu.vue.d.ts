export default _sfc_main;
declare const _sfc_main: import("vue").DefineComponent<{
    menuCount: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    linkIconClassList: {
        type: ArrayConstructor;
        required: true;
    };
    itemTitleList: {
        type: ArrayConstructor;
        required: true;
    };
    tooltipData: {
        type: ArrayConstructor;
        required: true;
    };
    iconNameList: {
        type: ArrayConstructor;
        required: true;
    };
    urlsData: {
        type: ArrayConstructor;
        required: true;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
}, {
    isTop: boolean;
    isLeft: boolean;
    quickMenuStyle: {
        top: string;
    } | {
        bottom: string;
    };
    buttonStyle: {
        backgroundColor: string;
        color: string;
    };
    itemMenuStyle: {
        backgroundColor: string;
        color: string;
    };
    menuCount: number;
    linkIconClassList: unknown[];
    itemTitleList: unknown[];
    tooltipData: unknown[];
    iconNameList: unknown[];
    urlsData: unknown[];
    backgroundColor: string;
    color: string;
    menuSize: number;
    subMenu4: string[][][];
    subMenu3: string[][][];
    subMenu2: string[][][];
}, any, {}, {
    getSubMenuStyle(n: any): {
        top: string;
        left: string;
    };
    toggleMenu(e: any): void;
    processCallback(key: any): void;
    mouseEnterSubMenu(e: any): void;
    mouseOutSubMenu(e: any): void;
    lightenColor(hex: any, amt: any): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuCount: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    linkIconClassList: {
        type: ArrayConstructor;
        required: true;
    };
    itemTitleList: {
        type: ArrayConstructor;
        required: true;
    };
    tooltipData: {
        type: ArrayConstructor;
        required: true;
    };
    iconNameList: {
        type: ArrayConstructor;
        required: true;
    };
    urlsData: {
        type: ArrayConstructor;
        required: true;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    menuCount: number;
    backgroundColor: string;
    color: string;
    position: string;
}>;

(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_fce323._.js", {

"[project]/components/about/SkillsCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SkillsCard": (()=>SkillsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const SKILLS = [
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Next.js",
    "GraphQL"
];
function SkillsCard() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 rounded-xl card",
        style: {
            background: theme.colors.secondary,
            border: `1px solid ${theme.colors.border}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-4",
                style: {
                    color: theme.colors.text
                },
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/components/about/SkillsCard.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-8",
                children: SKILLS.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg text-center button-secondary button-shadow",
                        style: {
                            // background: theme.colors.primary,
                            color: theme.colors.text
                        },
                        children: skill
                    }, skill, false, {
                        fileName: "[project]/components/about/SkillsCard.tsx",
                        lineNumber: 24,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about/SkillsCard.tsx",
                lineNumber: 22,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/about/SkillsCard.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
}
_s(SkillsCard, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SkillsCard;
var _c;
__turbopack_refresh__.register(_c, "SkillsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/about/ProfileSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ProfileSection": (()=>ProfileSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$SkillsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/about/SkillsCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function ProfileSection() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[400px] rounded-2xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                    alt: "Profile",
                    priority: true,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/about/ProfileSection.tsx",
                    lineNumber: 13,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/about/ProfileSection.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-6",
                        children: "About Me"
                    }, void 0, false, {
                        fileName: "[project]/components/about/ProfileSection.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg mb-6 leading-relaxed",
                        style: {
                            color: theme.colors.text
                        },
                        children: "Im a passionate Full Stack Developer with over 5 years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies."
                    }, void 0, false, {
                        fileName: "[project]/components/about/ProfileSection.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$SkillsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsCard"], {}, void 0, false, {
                        fileName: "[project]/components/about/ProfileSection.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-transparent w-[600px] h-[300px] border p-4 absolute -m-20 mr-[500px]",
                        style: {},
                        children: "hello"
                    }, void 0, false, {
                        fileName: "[project]/components/about/ProfileSection.tsx",
                        lineNumber: 36,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/about/ProfileSection.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/about/ProfileSection.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
}
_s(ProfileSection, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ProfileSection;
var _c;
__turbopack_refresh__.register(_c, "ProfileSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useViewTransition.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useViewTransition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
function useViewTransition() {
    _s();
    const [isViewTransition, setIsViewTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useViewTransition.useEffect": ()=>{
            // @ts-ignore
            setIsViewTransition(document.startViewTransition ? true : false);
        }
    }["useViewTransition.useEffect"], []);
    return {
        isViewTransition
    };
}
_s(useViewTransition, "FBIuphEsuG5+LQJR0sVO7ap+yrY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/detect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Detect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useViewTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useViewTransition.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
function Detect() {
    _s();
    const { isViewTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useViewTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 items-center bg-slate-100 py-2 px-4 rounded-3xl mx-auto w-fit",
        children: [
            isViewTransition === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                className: "w-4 h-4 mr-2 text-gray-200 animate-spin fill-blue-600",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/components/detect.tsx",
                        lineNumber: 17,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                        fill: "currentFill"
                    }, void 0, false, {
                        fileName: "[project]/components/detect.tsx",
                        lineNumber: 21,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/detect.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this) : isViewTransition ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4 mr-2 text-green-500 flex-shrink-0",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                }, void 0, false, {
                    fileName: "[project]/components/detect.tsx",
                    lineNumber: 33,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/detect.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4 mr-2 text-red-500 flex-shrink-0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                }, void 0, false, {
                    fileName: "[project]/components/detect.tsx",
                    lineNumber: 42,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/detect.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-black",
                children: "View Transitions API"
            }, void 0, false, {
                fileName: "[project]/components/detect.tsx",
                lineNumber: 48,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/detect.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
}
_s(Detect, "W2cM8BrjZuuy8UKUcTum2ePId7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useViewTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Detect;
var _c;
__turbopack_refresh__.register(_c, "Detect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useViewTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useViewTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$detect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/detect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const Navbar = ()=>{
    _s();
    const { isViewTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useViewTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const viewNavigate = (route)=>{
        return isViewTransition ? document.startViewTransition(()=>{
            router.push(route);
        }) : router.push(route);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full bg-white/50 text-black h-fit grid place-items-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center gap-y-2 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors",
                            onClick: ()=>viewNavigate("/"),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors",
                            onClick: ()=>viewNavigate("/about"),
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 29,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors",
                            onClick: ()=>viewNavigate("/portfolio"),
                            children: "Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 34,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors",
                            onClick: ()=>viewNavigate("/contact"),
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$detect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 45,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 22,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this);
};
_s(Navbar, "oKYWJIqyiqreMueJZeGZbDxvG8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useViewTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_refresh__.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/PageContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PageContainer": (()=>PageContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/useNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$13$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_b77xl4i6oxcjdpd4zzw53pbora$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.13.1_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106_b77xl4i6oxcjdpd4zzw53pbora/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function PageContainer({ children, className = "" }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `min-h-screen w-full transition-colors duration-300 ${className}`,
        style: {
            background: theme.background,
            opacity: isPending ? 0.7 : 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layout/PageContainer.tsx",
                lineNumber: 28,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$13$2e$1_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_b77xl4i6oxcjdpd4zzw53pbora$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/layout/PageContainer.tsx",
                lineNumber: 29,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/PageContainer.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
_s(PageContainer, "ra2QAoaUeQ1sFf1ttnkWxS/D6lE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"]
    ];
});
_c = PageContainer;
var _c;
__turbopack_refresh__.register(_c, "PageContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/about/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>About)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$ProfileSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/about/ProfileSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/layout/PageContainer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$PageContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContainer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_react$40$19$2e$0$2e$0$2d$rc$2d$66855b96$2d$20241106_$5f$react$40$19_sapas4glnvlv4fivlryvslai7a$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$ProfileSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileSection"], {}, void 0, false, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/about/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_refresh__.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/about/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_fce323._.js.map
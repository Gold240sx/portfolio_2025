(()=>{var e={};e.id=591,e.ids=[591],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},8550:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>x,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{POST:()=>u});var o=t(4461),a=t(1242),n=t(5993),i=t(12);let p=process.env.CRON_JOB_SECRET;async function u(e){try{let r=e.headers.get("authorization");if(!r||r!==`Bearer ${p}`)return i.NextResponse.json({message:"Unauthorized"},{status:401});return i.NextResponse.json({message:"Method worked"},{status:200})}catch(e){return console.error("Error:",e),i.NextResponse.json({message:"Internal server error"},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/test_api/route",pathname:"/api/test_api",filename:"route",bundlePath:"app/api/test_api/route"},resolvedPagePath:"/Users/michaelmartell/Documents/CODE/Web/2025 Projects/portfolio_2025/app/api/test_api/route.ts",nextConfigOutput:"export",userland:s}),{workAsyncStorage:c,workUnitAsyncStorage:l,serverHooks:x}=d;function m(){return(0,n.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:l})}},502:()=>{},5774:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[321,228],()=>t(8550));module.exports=s})();
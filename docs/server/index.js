import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, NavLink, Outlet, Meta, Links, ScrollRestoration, Scripts, useRouteError, isRouteErrorResponse, Link, useNavigation, useActionData, Form, json } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { DataGrid } from "@mui/x-data-grid";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function MainNavigation() {
  return /* @__PURE__ */ jsx("nav", { id: "main-navigation", children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Beranda" }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { href: "https://github.com/farizmamad/simulasi-kpr", children: "Sumber Kode" }) })
  ] }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(MainNavigation, {}) }),
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ jsxs("main", { className: "error", children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        error.status,
        " ",
        error.statusText
      ] }),
      /* @__PURE__ */ jsx("p", { className: "info-message", children: error.data }),
      /* @__PURE__ */ jsx(Link, { to: "/", children: "Go Back" })
    ] });
  } else if (error instanceof Error) {
    return /* @__PURE__ */ jsxs("main", { className: "error", children: [
      /* @__PURE__ */ jsx("h1", { children: "Error" }),
      /* @__PURE__ */ jsx("p", { className: "info-message", children: error.message }),
      /* @__PURE__ */ jsx("p", { children: "The stack trace is:" }),
      /* @__PURE__ */ jsx("pre", { children: error.stack }),
      /* @__PURE__ */ jsx(Link, { to: "/", children: "Go Back" })
    ] });
  } else {
    return /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Unknown Error" }),
      /* @__PURE__ */ jsx(Link, { to: "/", children: "Go Back" })
    ] });
  }
}
function meta$1() {
  return [
    {
      title: "Simulasi KPR"
    },
    {
      name: "description",
      content: "Lihat cicilan berdasarkan tenor yang anda pilih."
    }
  ];
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: App,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function KPRDetails({ data }) {
  var _a, _b;
  const columns = [
    { field: "tenure", headerName: "Tenor", flex: 1 },
    { field: "sellPrice", headerName: "Harga Jual (Rp)", flex: 2 },
    { field: "margin", headerName: "Margin (Rp)", flex: 2 },
    { field: "installmentDeferred", headerName: "Angsuran Ditangguhkan (Rp)", flex: 2 },
    { field: "installment", headerName: "Cicilan per bulan (Rp)", flex: 2 }
  ];
  const rows = data.calculation.map((kprData, index) => {
    return {
      id: index,
      tenure: kprData.tenure,
      sellPrice: kprData.sellPrice.toLocaleString(),
      margin: kprData.margin.toLocaleString(),
      installmentDeferred: kprData.installmentDeferred.toLocaleString(),
      installment: kprData.installment.toLocaleString()
    };
  });
  return /* @__PURE__ */ jsxs("main", { id: "kpr-details", children: [
    /* @__PURE__ */ jsx("h1", { children: "Dasar Perhitungan Cicilan" }),
    /* @__PURE__ */ jsxs("p", { id: "kpr-details-content", children: [
      "Harga Beli ke Developer: Rp",
      data.buyPrice.toLocaleString()
    ] }),
    /* @__PURE__ */ jsxs("p", { id: "kpr-details-content", children: [
      "Uang Muka: Rp",
      data.downPayment.toLocaleString()
    ] }),
    /* @__PURE__ */ jsx("h1", { children: "Biaya adminisitrasi" }),
    /* @__PURE__ */ jsxs("p", { id: "kpr-details-content", children: [
      "Biaya Notaris: Rp",
      ((_a = data.notaryFees) == null ? void 0 : _a.toLocaleString()) ?? "?"
    ] }),
    /* @__PURE__ */ jsxs("p", { id: "kpr-details-content", children: [
      "Asuransi: Rp",
      ((_b = data.insuranceFees) == null ? void 0 : _b.toLocaleString()) ?? "-"
    ] }),
    /* @__PURE__ */ jsx("section", { id: "DataGrid", style: { height: 350, width: "80%", marginLeft: "auto", marginRight: "auto" }, children: /* @__PURE__ */ jsx(DataGrid, { rows, columns, sx: { backgroundColor: "#caffca" }, hideFooter: true }) })
  ] });
}
function KPRForm() {
  const navigation = useNavigation();
  const actionData = useActionData();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxs(Form, { method: "post", id: "kpr-form", children: [
    (actionData == null ? void 0 : actionData.message) && /* @__PURE__ */ jsx("p", { children: actionData.message }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "kpr-price", children: "Harga Beli (Rupiah)" }),
      /* @__PURE__ */ jsx("input", { type: "number", id: "kpr-price", name: "kpr-price" })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "kpr-margin", children: "Margin per tahun (%)" }),
      /* @__PURE__ */ jsx("input", { type: "number", step: "0.01", id: "kpr-margin", name: "kpr-margin" })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "kpr-dp", children: "Uang Muka (Rupiah)" }),
      /* @__PURE__ */ jsx("input", { type: "number", id: "kpr-dp", name: "kpr-dp" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "form-actions", children: /* @__PURE__ */ jsx("button", { disabled: isSubmitting, children: isSubmitting ? "Sedang menghitung..." : "Hitung" }) })
  ] });
}
const tenures = [5, 10, 15, 20, 25];
function KPRPage() {
  const actionData = useActionData();
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Simulasi KPR" }),
    /* @__PURE__ */ jsx(KPRForm, {}),
    actionData && /* @__PURE__ */ jsx(KPRDetails, { data: actionData })
  ] });
}
async function action({ request }) {
  const formData = await (request == null ? void 0 : request.formData());
  const input = {
    buyPrice: parseFloat(formData == null ? void 0 : formData.get("kpr-price")),
    margin: parseFloat(formData == null ? void 0 : formData.get("kpr-margin")),
    downPayment: parseFloat(formData == null ? void 0 : formData.get("kpr-dp"))
  };
  const kprData = {
    ...input,
    id: (/* @__PURE__ */ new Date()).toISOString(),
    // simulate to 1% of sell price
    notaryFees: Math.round(input.buyPrice * (1 / 100)),
    // simulate to 1% of sell price
    insuranceFees: Math.round(input.buyPrice * (1 / 100)),
    calculation: []
  };
  for (const tenure of tenures) {
    const sellPrice = Math.round(kprData.buyPrice * Math.pow(1 + kprData.margin / 100, tenure));
    const margin = sellPrice - input.buyPrice;
    const installmentDeferred = sellPrice - input.downPayment;
    const installment = Math.round(sellPrice / (tenure * 12));
    kprData.calculation.push({
      tenure,
      sellPrice,
      margin,
      installmentDeferred,
      installment
    });
  }
  if (isNaN(kprData.buyPrice) || kprData.buyPrice < 1e7) {
    return { message: "Harga tidak valid. Minimal Rp. 10 Juta" };
  }
  return json(kprData);
}
function meta() {
  return [
    {
      title: "Simulasi KPR"
    },
    {
      name: "description",
      content: "Lihat cicilan berdasarkan tenor yang anda pilih."
    }
  ];
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: KPRPage,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BOW5zx1F.js", "imports": ["/assets/components-DtA8rVQQ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CERmBlzK.js", "imports": ["/assets/components-DtA8rVQQ.js"], "css": ["/assets/root-D8OMIsfs.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BbOodRpb.js", "imports": ["/assets/components-DtA8rVQQ.js"], "css": ["/assets/_index-BbK_pfns.css"] } }, "url": "/assets/manifest-1c706876.js", "version": "1c706876" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};

import{r as c,j as a,U as _}from"./index-Bjl3T_Je.js";import{r as f,a as r,F as l,b as d}from"./index-B4TdjhwJ.js";const m="_ui-dialog_12phd_1 ui-dialog",p="_container_12phd_5",h="_warning_12phd_17",D="_close-button_12phd_27",t={uiDialog:m,container:p,warning:h,closeButton:D},x=`Please add at least 2 valid options.

An option is considered valid if its title is not empty and its weight is greater than 0`,E="Close",N=({open:s,onClose:g})=>{const i=c.useRef(null),u=async()=>{const{current:o}=i;o&&(o.showModal(),await r(o,l.keyframes,l.options))},e=async o=>{const{current:n}=i;n&&(await r(n,d.keyframes,d.options),n.close(o))};return c.useLayoutEffect(()=>{s&&u()},[s]),s&&f.createPortal(a.jsx("dialog",{ref:i,className:t.uiDialog,onClick:o=>{o.target===o.currentTarget&&e("cancel")},onClose:()=>{g()},children:a.jsxs("div",{className:t.container,children:[a.jsx("p",{className:t.warning,children:x}),a.jsx(_,{className:t.closeButton,onClick:()=>{e()},children:E})]})}),document.body)};export{N as WarningDialog,N as default};

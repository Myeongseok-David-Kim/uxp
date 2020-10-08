(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{COdY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var r,n=a("wx14"),d=a("zLVn"),m=(a("q1tI"),a("7ljp")),c=a("LHWr"),l=(a("qKvR"),{}),o=(r="JsDocParameters",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(m.mdx)("div",e)}),i={_frontmatter:l},b=c.a;function s(e){var t=e.components,a=Object(d.a)(e,["components"]);return Object(m.mdx)(b,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("a",{name:"securestorage",id:"securestorage"}),Object(m.mdx)("h1",{id:"requireuxpstoragesecurestorage"},"require('uxp').storage.secureStorage"),Object(m.mdx)("p",null,"SecureStorage provides a protected storage which can be used to store sensitive data\nper plugin. SecureStorage takes a key-value pair and encrypts the value before being\nstored. After encryption, it stores the key and the encrypted value pair. When the value\nis requested with an associated key, it's retrieved after being decrypted. Please note\nthat the key is not encrypted thus it's not protected by the cryptographic operation."),Object(m.mdx)("p",null,"Caveats for SecureStorage are as follows:"),Object(m.mdx)("ol",null,Object(m.mdx)("li",{parentName:"ol"},"SecureStorage is not an appropriate storage for sensitive data which wants to keep\nsecret from the current user. SecureStorage is protected under the current user's\naccount credential. It means the encrypted data can be at risk of being decrypted\nwith the current user's privilege."),Object(m.mdx)("li",{parentName:"ol"},"Data in SecureStorage can be lost for various reasons. For an example, the user\ncould uninstall the host application and delete the secure storage. Or, the cryptographic\ninformation used by the secure storage could be damaged by the user accidentally, and\nit will result in loss of data without the secure storage being removed. SecureStorage\nshould be regarded as a cache rather than a persistent storage. Data in SecureStorage\nshould be able to be regenerated from plugins after the time of loss.")),Object(m.mdx)(o,{mdxType:"JsDocParameters"}),Object(m.mdx)("a",{name:"securestorage-length",id:"securestorage-length"}),Object(m.mdx)("h2",{id:"length-⇒-int"},"length ⇒ ",Object(m.mdx)("inlineCode",{parentName:"h2"},"int")),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Read only"),"\nReturns number of items stored in the secure storage."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"int")," - returns the number of items  "),Object(m.mdx)("a",{name:"securestorage-setitem",id:"securestorage-setitem"}),Object(m.mdx)("h2",{id:"setitemkey-value"},"setItem(key, value)"),Object(m.mdx)("p",null,"Store a key and value pair after the value is encrypted in a secure storage"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"Promise")," - : resolved when the value is stored. rejected when the value is empty or not stored.",Object(m.mdx)("br",{parentName:"p"}),"\n",Object(m.mdx)("strong",{parentName:"p"},"Throws"),":"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"TypeError")," : thrown when either key or value doesn't have one of acceptable types.")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"string")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),": a key to set value")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(m.mdx)("inlineCode",{parentName:"td"},"ArrayBuffer")," ","|"," ",Object(m.mdx)("inlineCode",{parentName:"td"},"TypedArray")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),": a value for a key.")))),Object(m.mdx)("a",{name:"securestorage-getitem",id:"securestorage-getitem"}),Object(m.mdx)("h2",{id:"getitemkey"},"getItem(key)"),Object(m.mdx)("p",null,"Retrieve a value associated with a provided key after the value is being decrypted from a secure storage."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"Promise.<Uint8Array>")," - : a value as buffer",Object(m.mdx)("br",{parentName:"p"}),"\n",Object(m.mdx)("strong",{parentName:"p"},"Throws"),":"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"TypeError")," : thrown when a key doesn't have an acceptable type.")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"string")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),": a key to get value")))),Object(m.mdx)("a",{name:"securestorage-removeitem",id:"securestorage-removeitem"}),Object(m.mdx)("h2",{id:"removeitemkey"},"removeItem(key)"),Object(m.mdx)("p",null,"Remove a value associated with a provided key"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"Promise")," - : resolved when the value associated with the key is removed. rejected when the value is neither removed nor found.",Object(m.mdx)("br",{parentName:"p"}),"\n",Object(m.mdx)("strong",{parentName:"p"},"Throws"),":"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"TypeError")," : thrown when a key doesn't have an acceptable type.")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"string")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),": a key to remove value")))),Object(m.mdx)("a",{name:"securestorage-key",id:"securestorage-key"}),Object(m.mdx)("h2",{id:"key"},"key()"),Object(m.mdx)("p",null,"Returns a key which is stored at the given index"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"int")," - Returns the key which is stored at the given index.  "),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"index."),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"number"))))),Object(m.mdx)("a",{name:"securestorage-clear",id:"securestorage-clear"}),Object(m.mdx)("h2",{id:"clear"},"clear()"),Object(m.mdx)("p",null,"Clear all values in a secure storage."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"Promise")," - : resolved when all the items are cleared. rejected when there is no item to clear or clear failed.  "))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uxp-reference-js-modules-uxp-key-value-storage-secure-storage-md-c9264293ea2ebaef4391.js.map
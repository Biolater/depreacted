"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{5002:function(e,t,r){r.d(t,{PL:function(){return sh},ad:function(){return n3},hJ:function(){return n1}});var n,s,i,a,o=r(9279),l=r(2680),u=r(9053),h=r(3943),c=r(6552),d=r(4575);r(357);var m=r(9109).lW;let f="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="10.12.5",y=new u.Yd("@firebase/firestore");function v(){return y.logLevel}function w(e,...t){if(y.logLevel<=u.in.DEBUG){let r=t.map(T);y.debug(`Firestore (${p}): ${e}`,...r)}}function E(e,...t){if(y.logLevel<=u.in.ERROR){let r=t.map(T);y.error(`Firestore (${p}): ${e}`,...r)}}function _(e,...t){if(y.logLevel<=u.in.WARN){let r=t.map(T);y.warn(`Firestore (${p}): ${e}`,...r)}}function T(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw E(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED))}shutdown(){}}class D{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class b{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),s=new A;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new A,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new A)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||C(),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||C(),new g(e)}}class x{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=g.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class R{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new x(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,w("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||C(),this.R=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%e.length))}return r}}function P(e,t){return e<t?-1:e>t?1:0}function F(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new M(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new M(0,0))}static max(){return new U(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,r){void 0===t?t=0:t>e.length&&C(),void 0===r?r=e.length-t:r>e.length-t&&C(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),s=t.get(n);if(r<s)return -1;if(r>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends q{construct(e,t,r){return new B(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}let z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends q{construct(e,t,r){return new $(e,t,r)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,s=()=>{if(0===r.length)throw new S(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new S(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?i=!i:"."!==t||i?r+=t:s(),n++}if(s(),i)throw new S(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(B.fromString(e))}static fromName(e){return new K(B.fromString(e).popFirst(5))}static empty(){return new K(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new B(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}Q.UNKNOWN_ID=-1;class G{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new G(U.min(),K.empty(),-1)}static max(){return new G(U.max(),K.empty(),-1)}}class j{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){if(e.code!==I.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof W?t:W.resolve(t)}catch(e){return W.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,r)=>{t(e)})}static reject(e){return new W((t,r)=>{r(e)})}static waitFor(e){return new W((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=W.resolve(!1);for(let r of e)t=t.next(e=>e?W.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new W((r,n)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&r(i)},e=>n(e))}})}static doWhile(e,t){return new W((r,n)=>{let s=()=>{!0===e()?t().next(()=>{s()},n):r()};s()})}}function Y(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function X(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function ee(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}J.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||en.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,en.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,en.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new er(this.root,e,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new er(this.root,e,this.comparator,!0)}}class er{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class en{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:en.RED,this.left=null!=n?n:en.EMPTY,this.right=null!=s?s:en.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new en(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,s=r(e,n.key);return(n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return en.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();let e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}en.EMPTY=null,en.RED=!0,en.BLACK=!1,en.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,r,n,s){return this}insert(e,t,r){return new en(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ei(this.data.getIterator())}getIteratorFrom(e){return new ei(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new es(this.comparator);return t.data=e,t}}class ei{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new ea([])}unionWith(e){let t=new es($.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new ea(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return F(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.binaryString=e}static fromBase64String(e){return new el(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eo("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new el(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}el.EMPTY_BYTE_STRING=new el("");let eu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eh(e){if(e||C(),"string"==typeof e){let t=0,r=eu.exec(e);if(r||C(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ec(e.seconds),nanos:ec(e.nanos)}}function ec(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ed(e){return"string"==typeof e?el.fromBase64String(e):el.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function ef(e){let t=e.mapValue.fields.__previous_value__;return em(t)?ef(t):t}function eg(e){let t=eh(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,r,n,s,i,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ey{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ey("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ey&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ew(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?em(e)?4:ex(e)?9007199254740991:10:C()}function eE(e,t){if(e===t)return!0;let r=ew(e);if(r!==ew(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eg(e).isEqual(eg(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=eh(e.timestampValue),n=eh(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ed(e.bytesValue).isEqual(ed(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ec(e.geoPointValue.latitude)===ec(t.geoPointValue.latitude)&&ec(e.geoPointValue.longitude)===ec(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ec(e.integerValue)===ec(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=ec(e.doubleValue),n=ec(t.doubleValue);return r===n?X(r)===X(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return F(e.arrayValue.values||[],t.arrayValue.values||[],eE);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(Z(r)!==Z(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eE(r[e],n[e])))return!1;return!0}(e,t);default:return C()}}function e_(e,t){return void 0!==(e.values||[]).find(e=>eE(e,t))}function eT(e,t){if(e===t)return 0;let r=ew(e),n=ew(t);if(r!==n)return P(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=ec(e.integerValue||e.doubleValue),n=ec(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return eC(e.timestampValue,t.timestampValue);case 4:return eC(eg(e),eg(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){let r=ed(e),n=ed(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=P(r[e],n[e]);if(0!==t)return t}return P(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=P(ec(e.latitude),ec(t.latitude));return 0!==r?r:P(ec(e.longitude),ec(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=eT(r[e],n[e]);if(t)return t}return P(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ev.mapValue&&t===ev.mapValue)return 0;if(e===ev.mapValue)return 1;if(t===ev.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let e=0;e<n.length&&e<i.length;++e){let t=P(n[e],i[e]);if(0!==t)return t;let a=eT(r[n[e]],s[i[e]]);if(0!==a)return a}return P(n.length,i.length)}(e.mapValue,t.mapValue);default:throw C()}}function eC(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);let r=eh(e),n=eh(t),s=P(r.seconds,n.seconds);return 0!==s?s:P(r.nanos,n.nanos)}function eI(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eh(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ed(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,K.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=eI(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let s of t)n?n=!1:r+=",",r+=`${s}:${eI(e.fields[s])}`;return r+"}"}(e.mapValue):C()}function eS(e){return!!e&&"integerValue"in e}function eA(e){return!!e&&"arrayValue"in e}function eN(e){return!!e&&"nullValue"in e}function ek(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eD(e){return!!e&&"mapValue"in e}function eb(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ee(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eb(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eb(e.arrayValue.values[r]);return t}return Object.assign({},e)}function ex(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.value=e}static empty(){return new eR({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eD(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eb(t)}setAll(e){let t=$.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=eb(e):n.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){let t=this.field(e.popLast());eD(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eE(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eD(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(ee(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eR(eb(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,t,r,n,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new eL(e,0,U.min(),U.min(),U.min(),eR.empty(),0)}static newFoundDocument(e,t,r,n){return new eL(e,1,t,U.min(),r,n,0)}static newNoDocument(e,t){return new eL(e,2,t,U.min(),U.min(),eR.empty(),0)}static newUnknownDocument(e,t){return new eL(e,3,t,U.min(),U.min(),eR.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(U.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eR.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eR.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eL&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eL(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t){this.position=e,this.inclusive=t}}function eO(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(n=i.field.isKeyField()?K.comparator(K.fromName(a.referenceValue),r.key):eT(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function eP(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eE(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{}class eU extends eM{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new e$(e,t,r):"array-contains"===t?new ej(e,r):"in"===t?new eH(e,r):"not-in"===t?new eW(e,r):"array-contains-any"===t?new eY(e,r):new eU(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new eK(e,r):new eQ(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eT(t,this.value)):null!==t&&ew(this.value)===ew(t)&&this.matchesComparison(eT(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class eq extends eM{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new eq(e,t)}matches(e){return eB(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eB(e){return"and"===e.op}function ez(e){for(let t of e.filters)if(t instanceof eq)return!1;return!0}class e$ extends eU{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){let t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class eK extends eU{constructor(e,t){super(e,"in",t),this.keys=eG("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eQ extends eU{constructor(e,t){super(e,"not-in",t),this.keys=eG("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eG(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>K.fromName(e.referenceValue))}class ej extends eU{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eA(t)&&e_(t.arrayValue,this.value)}}class eH extends eU{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&e_(this.value.arrayValue,t)}}class eW extends eU{constructor(e,t){super(e,"not-in",t)}matches(e){if(e_(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!e_(this.value.arrayValue,t)}}class eY extends eU{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eA(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>e_(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.ue=null}}function eX(e,t=null,r=[],n=[],s=null,i=null,a=null){return new eJ(e,t,r,n,s,i,a)}function eZ(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eU)return t.field.canonicalString()+t.op.toString()+eI(t.value);if(ez(t)&&eB(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eI(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eI(e)).join(",")),e.ue=t}return e.ue}function e0(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var r,n;if(r=e.orderBy[s],n=t.orderBy[s],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof eU?r instanceof eU&&t.op===r.op&&t.field.isEqual(r.field)&&eE(t.value,r.value):t instanceof eq?r instanceof eq&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,s)=>t&&e(n,r.filters[s]),!0):void C()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eP(e.startAt,t.startAt)&&eP(e.endAt,t.endAt)}function e1(e){return K.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e4(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e3(e){if(null===e.ce){let t;e.ce=[];let r=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new es($.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eF(t,n))}),r.has($.keyField().canonicalString())||e.ce.push(new eF($.keyField(),n))}return e.ce}function e9(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return eX(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eF(e.field,t)});let r=e.endAt?new eV(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new eV(e.startAt.position,e.startAt.inclusive):null;return eX(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,e3(e))),e.le}function e8(e,t,r){return new e2(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e5(e,t){return e0(e9(e),e9(t))&&e.limitType===t.limitType}function e6(e){return`${eZ(e9(e))}|lt:${e.limitType}`}function e7(e){var t;let r;return`Query(target=${r=(t=e9(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eU?`${t.field.canonicalString()} ${t.op} ${eI(t.value)}`:t instanceof eq?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eI(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eI(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function te(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):K.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e3(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eO(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,e3(e),t))&&(!e.endAt||!!function(e,t,r){let n=eO(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,e3(e),t))}function tt(e){return(t,r)=>{let n=!1;for(let s of e3(e)){let e=function(e,t,r){let n=e.field.isKeyField()?K.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?eT(n,s):C()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return C()}}(s,t,r);if(0!==e)return e;n=n||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){ee(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=new et(K.comparator),ts=new et(K.comparator);function ti(...e){let t=ts;for(let r of e)t=t.insert(r.key,r);return t}function ta(){return new tr(e=>e.toString(),(e,t)=>e.isEqual(t))}new et(K.comparator);let to=new es(K.comparator);function tl(...e){let t=to;for(let r of e)t=t.add(r);return t}let tu=new es(P);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this._=void 0}}class tc extends th{}class td extends th{constructor(e){super(),this.elements=e}}function tm(e,t){let r=tv(t);for(let t of e.elements)r.some(e=>eE(e,t))||r.push(t);return{arrayValue:{values:r}}}class tf extends th{constructor(e){super(),this.elements=e}}function tg(e,t){let r=tv(t);for(let t of e.elements)r=r.filter(e=>!eE(e,t));return{arrayValue:{values:r}}}class tp extends th{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ty(e){return ec(e.integerValue||e.doubleValue)}function tv(e){return eA(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tw{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tw}static exists(e){return new tw(void 0,e)}static updateTime(e){return new tw(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tE(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class t_{}function tT(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tb(e.key,tw.none()):new tS(e.key,e.data,tw.none());{let r=e.data,n=eR.empty(),s=new es($.comparator);for(let e of t.fields)if(!s.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),s=s.add(e)}return new tA(e.key,n,new ea(s.toArray()),tw.none())}}function tC(e,t,r,n){return e instanceof tS?function(e,t,r,n){if(!tE(e.precondition,t))return r;let s=e.value.clone(),i=tD(e.fieldTransforms,n,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,r,n):e instanceof tA?function(e,t,r,n){if(!tE(e.precondition,t))return r;let s=tD(e.fieldTransforms,n,t),i=t.data;return(i.setAll(tN(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tE(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tI(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&F(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof td&&n instanceof td||r instanceof tf&&n instanceof tf?F(r.elements,n.elements,eE):r instanceof tp&&n instanceof tp?eE(r.Pe,n.Pe):r instanceof tc&&n instanceof tc)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tS extends t_{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tA extends t_{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tN(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tk(e,t,r){var n;let s=new Map;e.length===r.length||C();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(n=r[i],o instanceof td?tm(o,l):o instanceof tf?tg(o,l):n))}return s}function tD(e,t,r){let n=new Map;for(let s of e){let e=s.transform,i=r.data.field(s.field);n.set(s.field,e instanceof tc?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&em(t)&&(t=ef(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,i):e instanceof td?tm(e,i):e instanceof tf?tg(e,i):function(e,t){var r,n;let s=(r=e,n=t,r instanceof tp?eS(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),i=ty(s)+ty(e.Pe);return eS(s)&&eS(e.Pe)?{integerValue:""+i}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:X(t)?"-0":t}}(e.serializer,i)}(e,i))}return n}class tb extends t_{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var n;n=r[t],s instanceof tS?function(e,t,r){let n=e.value.clone(),s=tk(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(s,e,n):s instanceof tA?function(e,t,r){if(!tE(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tk(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(tN(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(s,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tC(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tC(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=ta();return this.mutations.forEach(n=>{let s=e.get(n.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields),o=tT(i,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),i.isValidDocument()||i.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tl())}isEqual(e){return this.batchId===e.batchId&&F(this.mutations,e.mutations,(e,t)=>tI(e,t))&&F(this.baseMutations,e.baseMutations,(e,t)=>tI(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,t){this.count=e,this.unchangedNames=t}}function tV(e){if(void 0===e)return E("GRPC error has no .code"),I.UNKNOWN;switch(e){case n.OK:return I.OK;case n.CANCELLED:return I.CANCELLED;case n.UNKNOWN:return I.UNKNOWN;case n.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case n.INTERNAL:return I.INTERNAL;case n.UNAVAILABLE:return I.UNAVAILABLE;case n.UNAUTHENTICATED:return I.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case n.NOT_FOUND:return I.NOT_FOUND;case n.ALREADY_EXISTS:return I.ALREADY_EXISTS;case n.PERMISSION_DENIED:return I.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case n.ABORTED:return I.ABORTED;case n.OUT_OF_RANGE:return I.OUT_OF_RANGE;case n.UNIMPLEMENTED:return I.UNIMPLEMENTED;case n.DATA_LOSS:return I.DATA_LOSS;default:return C()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO=new c.z8([4294967295,4294967295],0);function tP(e){let t=(new TextEncoder).encode(e),r=new c.V8;return r.update(t),new Uint8Array(r.digest())}function tF(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new c.z8([r,n],0),new c.z8([s,i],0)]}class tM{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tU(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new tU(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new tU(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=c.z8.fromNumber(this.Ie)}Ee(e,t,r){let n=e.add(t.multiply(c.z8.fromNumber(r)));return 1===n.compare(tO)&&(n=new c.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let[t,r]=tF(tP(e));for(let e=0;e<this.hashCount;e++){let n=this.Ee(t,r,e);if(!this.de(n))return!1}return!0}static create(e,t,r){let n=new tM(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Ie)return;let[t,r]=tF(tP(e));for(let e=0;e<this.hashCount;e++){let n=this.Ee(t,r,e);this.Ae(n)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tU extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tq{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tB.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tq(U.min(),n,new et(P),tn,tl())}}class tB{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tB(r,t,tl(),tl(),tl())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}}class t${constructor(e,t){this.targetId=e,this.me=t}}class tK{constructor(e,t,r=el.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tQ{constructor(){this.fe=0,this.ge=tH(),this.pe=el.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=tl(),t=tl(),r=tl();return this.ge.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:C()}}),new tB(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=tH()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||C()}Ne(){this.we=!0,this.ye=!0}}class tG{constructor(e){this.Le=e,this.Be=new Map,this.ke=tn,this.qe=tj(),this.Qe=new et(P)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,r)=>{this.ze(r)&&t(r)})}He(e){let t=e.targetId,r=e.me.count,n=this.Je(t);if(n){let s=n.target;if(e1(s)){if(0===r){let e=new K(s.path);this.Ue(t,e,eL.newNoDocument(e,U.min()))}else 1===r||C()}else{let n=this.Ye(t);if(n!==r){let r=this.Ze(e),s=r?this.Xe(r,e,n):1;0!==s&&(this.je(t),this.Qe=this.Qe.insert(t,2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,r;let n=e.me.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:s="",padding:i=0},hashCount:a=0}=n;try{t=ed(s).toUint8Array()}catch(e){if(e instanceof eo)return _("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new tM(t,i,a)}catch(e){return _(e instanceof tU?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ie?null:r}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let s=this.Le.tt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${r.path.canonicalString()}`;e.mightContain(i)||(this.Ue(t,r,null),n++)}),n}rt(e){let t=new Map;this.Be.forEach((r,n)=>{let s=this.Je(n);if(s){if(r.current&&e1(s.target)){let t=new K(s.target.path);null!==this.ke.get(t)||this.it(n,t)||this.Ue(n,t,eL.newNoDocument(t,e))}r.be&&(t.set(n,r.Ce()),r.ve())}});let r=tl();this.qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ke.forEach((t,r)=>r.setReadTime(e));let n=new tq(e,t,this.Qe,this.ke,r);return this.ke=tn,this.qe=tj(),this.Qe=new et(P),n}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let n=this.Ge(e);this.it(e,t)?n.Fe(t,1):n.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new tQ,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new es(P),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||w("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tQ),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function tj(){return new et(K.comparator)}function tH(){return new et(K.comparator)}let tW={asc:"ASCENDING",desc:"DESCENDING"},tY={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tJ={and:"AND",or:"OR"};class tX{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tZ(e,t){return e.useProto3Json||null==t?t:{value:t}}function t0(e){return e||C(),U.fromTimestamp(function(e){let t=eh(e);return new M(t.seconds,t.nanos)}(e))}function t1(e,t){let r=new B(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function t2(e){let t=B.fromString(e);return t7(t)||C(),t}function t4(e,t){let r=t2(t);if(r.get(1)!==e.databaseId.projectId)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new K(t8(r))}function t3(e,t){return t1(e.databaseId,t).canonicalString()}function t9(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function t8(e){return e.length>4&&"documents"===e.get(4)||C(),e.popFirst(5)}function t5(e){return{fieldPath:e.canonicalString()}}function t6(e){return $.fromServerFormat(e.fieldPath)}function t7(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,n,s=U.min(),i=U.min(),a=el.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new re(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ec(e.integerValue));else if("doubleValue"in e){let r=ec(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),X(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),"string"==typeof r&&(r=eh(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(ed(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?ex(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):C()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){let r=e.fields||{};for(let e of(this.dt(t,55),Object.keys(r)))this.Vt(e,t),this.Tt(r[e],t)}St(e,t){let r=e.values||[];for(let e of(this.dt(t,50),r))this.Tt(e,t)}yt(e,t){this.dt(t,37),K.fromName(e).path.forEach(e=>{this.dt(t,60),this.bt(e,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}rr.Dt=new rr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.an=new rs}addToCollectionParentIndex(e,t){return this.an.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(G.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(G.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class rs{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new es(B.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new es(B.comparator)).toArray()}}new Uint8Array(0);class ri{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ri(e,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.DEFAULT_COLLECTION_PERCENTILE=10,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ri.DEFAULT=new ri(41943040,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ri.DISABLED=new ri(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new ra(0)}static Bn(){return new ra(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.changes=new tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eL.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tC(r.mutation,e,ea.empty(),M.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tl()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tl()){let n=ta();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ti();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=ta();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tl()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let s=tn,i=ta(),a=ta();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tA)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tC(a.mutation,t,a.mutation.getFieldMask(),M.now())):i.set(t.key,ea.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rl(t,null!==(r=i.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=ta(),n=new et((e,t)=>e-t),s=tl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=r.get(e)||ea.empty();a=s.applyToLocalView(i,a),r.set(e,a);let o=(n.get(s.batchId)||tl()).add(e);n=n.insert(s.batchId,o)})}).next(()=>{let i=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=ta();l.forEach(e=>{if(!s.has(e)){let n=tT(t.get(e),r.get(e));null!==n&&u.set(e,n),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return W.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return K.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{let i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):W.resolve(ta()),a=-1,o=s;return i.next(t=>W.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),s.get(t)?W.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tl())).next(e=>{let t;return{batchId:a,changes:(t=ts,e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(e=>{let t=ti();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let s=t.collectionGroup,i=ti();return this.indexManager.getCollectionParents(e,s).next(a=>W.forEach(a,a=>{let o=new e2(a.child(s),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,n))).next(e=>{s.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eL.newInvalidDocument(n)))});let r=ti();return e.forEach((e,n)=>{let i=s.get(e);void 0!==i&&tC(i.mutation,n,ea.empty(),M.now()),te(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return W.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:t0(t.createTime)}),W.resolve()}getNamedQuery(e,t){return W.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=t2(e);return 4===t.length?B.emptyPath():t8(t)}(e.parent),s=e.structuredQuery,i=s.from?s.from.length:0,a=null;if(i>0){1===i||C();let e=s.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];s.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=t6(e.unaryFilter.field);return eU.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=t6(e.unaryFilter.field);return eU.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=t6(e.unaryFilter.field);return eU.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=t6(e.unaryFilter.field);return eU.create(s,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):void 0!==t.fieldFilter?eU.create(t6(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eq.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op)):C()}(e);return r instanceof eq&&ez(t=r)&&eB(t)?r.getFilters():[r]}(s.where));let l=[];s.orderBy&&(l=s.orderBy.map(e=>new eF(t6(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;s.limit&&(u=null==(r="object"==typeof(t=s.limit)?t.value:t)?null:r);let h=null;s.startAt&&(h=function(e){let t=!!e.before;return new eV(e.values||[],t)}(s.startAt));let c=null;return s.endAt&&(c=function(e){let t=!e.before;return new eV(e.values||[],t)}(s.endAt)),new e2(n,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e8(t,t.limit,"L"):t}(t.bundledQuery),readTime:t0(t.readTime)}),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.overlays=new et(K.comparator),this.Pr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){let r=ta();return W.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.ht(e,t,n)}),W.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Pr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){let n=ta(),s=t.length+1,i=new K(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>r&&n.set(e.getKey(),e)}return W.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new et((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=s.get(e.largestBatchId);null===t&&(t=ta(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ta(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return W.resolve(a)}ht(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Pr.get(n.largestBatchId).delete(r.key);this.Pr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new tR(t,r));let s=this.Pr.get(t);void 0===s&&(s=tl(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.sessionToken=el.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.Ir=new es(rf.Tr),this.Er=new es(rf.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let r=new rf(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new rf(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new K(new B([])),r=new rf(t,e),n=new rf(t,e+1),s=[];return this.Er.forEachInRange([r,n],e=>{this.Rr(e),s.push(e.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){let t=new K(new B([])),r=new rf(t,e),n=new rf(t,e+1),s=tl();return this.Er.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new rf(e,0),r=this.Ir.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rf{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return K.comparator(e.key,t.key)||P(e.yr,t.yr)}static dr(e,t){return P(e.yr,t.yr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new es(rf.Tr)}checkEmpty(e){return W.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tx(s,t,r,n);for(let t of(this.mutationQueue.push(i),n))this.Sr=this.Sr.add(new rf(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return W.resolve(i)}lookupMutationBatch(e,t){return W.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Dr(t+1),n=r<0?0:r;return W.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rf(t,0),n=new rf(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,n],e=>{let t=this.br(e.yr);s.push(t)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new es(P);return t.forEach(e=>{let t=new rf(e,0),n=new rf(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,n],e=>{r=r.add(e.yr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,s=r;K.isDocumentKey(s)||(s=s.child(""));let i=new rf(new K(s),0),a=new es(P);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.yr)),!0)},i),W.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let r=this.br(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||C(),this.mutationQueue.shift();let r=this.Sr;return W.forEach(t.mutations,n=>{let s=new rf(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){let r=new rf(t,0),n=this.Sr.firstAfterOrEqual(r);return W.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.Fr=e,this.docs=new et(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():eL.newInvalidDocument(t))}getEntries(e,t){let r=tn;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eL.newInvalidDocument(e))}),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let s=tn,i=t.path,a=new K(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=K.comparator(e.documentKey,t.documentKey))?r:P(e.largestBatchId,t.largestBatchId)}(new G(a.readTime,a.key,-1),r)||(n.has(a.key)||te(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,t,r,n){C()}Mr(e,t){return W.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ry(this)}getSize(e){return W.resolve(this.size)}}class ry extends ro{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ur.addEntry(e,n)):this.ur.removeEntry(r)}),W.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.persistence=e,this.Or=new tr(e=>eZ(e),e0),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new rm,this.targetCount=0,this.Br=ra.Ln()}forEachTarget(e,t){return this.Or.forEach((e,r)=>t(r)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),W.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Br=new ra(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Qn(t),W.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let n=0,s=[];return this.Or.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Or.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),W.waitFor(s).next(()=>n)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){let r=this.Or.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),W.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);let n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),W.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Lr.pr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t){this.kr={},this.overlays={},this.qr=new J(0),this.Qr=!1,this.Qr=!0,this.Kr=new rd,this.referenceDelegate=e(this),this.$r=new rv(this),this.indexManager=new rn,this.remoteDocumentCache=new rp(e=>this.referenceDelegate.Ur(e)),this.serializer=new rt(t),this.Wr=new rh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new rg(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){w("MemoryPersistence","Starting transaction:",e);let n=new rE(this.qr.next());return this.referenceDelegate.Gr(),r(n).next(e=>this.referenceDelegate.zr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}jr(e,t){return W.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class rE extends j{constructor(e){super(),this.currentSequenceNumber=e}}class r_{constructor(e){this.persistence=e,this.Hr=new rm,this.Jr=null}static Yr(e){return new r_(e)}get Zr(){if(this.Jr)return this.Jr;throw C()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),W.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(e=>this.Zr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Zr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Zr,r=>{let n=K.fromPath(r);return this.Xr(e,n).next(e=>{e||t.removeEntry(n,U.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(e=>{e?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return W.or([()=>W.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=n}static Ui(e,t){let r=tl(),n=tl();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rT(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,n){let s={result:null};return this.Ji(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.Yi(e,t,n,r).next(e=>{s.result=e})}).next(()=>{if(s.result)return;let r=new rC;return this.Zi(e,t,r).next(n=>{if(s.result=n,this.Gi)return this.Xi(e,t,r,n.size)})}).next(()=>s.result)}Xi(e,t,r,n){return r.documentReadCount<this.zi?(v()<=u.in.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",e7(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),W.resolve()):(v()<=u.in.DEBUG&&w("QueryEngine","Query:",e7(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ji*n?(v()<=u.in.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",e7(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e9(t))):W.resolve())}Ji(e,t){if(e4(t))return W.resolve(null);let r=e9(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=e9(t=e8(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let s=tl(...n);return this.Hi.getDocuments(e,s).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let i=this.es(t,n);return this.ts(t,i,s,r.readTime)?this.Ji(e,e8(t,null,"F")):this.ns(e,i,t,r)}))})))}Yi(e,t,r,n){return e4(t)||n.isEqual(U.min())?W.resolve(null):this.Hi.getDocuments(e,r).next(s=>{let i=this.es(t,s);return this.ts(t,i,r,n)?W.resolve(null):(v()<=u.in.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),e7(t)),this.ns(e,i,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new G(U.fromTimestamp(1e9===n?new M(r+1,0):new M(r,n)),K.empty(),-1)}(n,0)).next(e=>e))})}es(e,t){let r=new es(tt(e));return t.forEach((t,n)=>{te(e,n)&&(r=r.add(n))}),r}ts(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Zi(e,t,r){return v()<=u.in.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",e7(t)),this.Hi.getDocumentsMatchingQuery(e,t,G.min(),r)}ns(e,t,r,n){return this.Hi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,r,n){this.persistence=e,this.rs=t,this.serializer=n,this.ss=new et(P),this.os=new tr(e=>eZ(e),e0),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ru(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}async function rA(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(s=>(n=s,e.cs(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let s=[],i=[],a=tl();for(let e of n)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({ls:e,removedBatchIds:s,addedBatchIds:i}))})})}function rN(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}async function rk(e,t,r){let n=e.ss.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!Y(e))throw e;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ss=e.ss.remove(t),e.os.delete(n.target)}function rD(e,t,r){let n=U.min(),s=tl();return e.persistence.runTransaction("Execute query","readwrite",i=>(function(e,t,r){let n=e.os.get(r);return void 0!==n?W.resolve(e.ss.get(n)):e.$r.getTargetData(t,r)})(e,i,e9(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.$r.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.rs.getDocumentsMatchingQuery(i,t,r?n:U.min(),r?s:tl())).next(r=>{var n;let i;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e._s.get(n)||U.min(),r.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e._s.set(n,i),{documents:r,Is:s}}))}class rb{constructor(){this.activeTargetIds=tu}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rx{constructor(){this.io=new rb,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new rb,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.lo))e(0)}co(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.lo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rV=null;function rO(){return null===rV?rV=268435456+Math.round(2147483648*Math.random()):rV++,"0x"+rV.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rM="WebChannelConnection";class rU extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.bo=t+"://"+e.host,this.Do=`projects/${r}/databases/${n}`,this.Co="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get vo(){return!1}Fo(e,t,r,n,s){let i=rO(),a=this.Mo(e,t.toUriEncodedString());w("RestConnection",`Sending RPC '${e}' ${i}:`,a,r);let o={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(o,n,s),this.Oo(e,a,o,r).then(t=>(w("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw _("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",r),t})}No(e,t,r,n,s,i){return this.Fo(e,t,r,n,s)}xo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+p}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Mo(e,t){let r=rP[e];return`${this.bo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,n){let s=rO();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();w(rM,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:w(rM,`RPC '${e}' ${s} timed out`),a(new S(I.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let r=o.getStatus();if(w(rM,`RPC '${e}' ${s} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(t.status);a(new S(e,t.message))}else a(new S(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new S(I.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{w(rM,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);w(rM,`RPC '${e}' ${s} sending request:`,n),o.send(t,"POST",l,r,15)})}Lo(e,t,r){let s=rO(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new d.zI({})),this.xo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=i.join("");w(rM,`Creating RPC '${e}' stream ${s}: ${h}`,l);let c=a.createWebChannel(h,l),m=!1,f=!1,g=new rF({Po:t=>{f?w(rM,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(m||(w(rM,`Opening RPC '${e}' stream ${s} transport.`),c.open(),m=!0),w(rM,`RPC '${e}' stream ${s} sending:`,t),c.send(t))},Io:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{f||(w(rM,`RPC '${e}' stream ${s} transport opened.`),g.po())}),p(c,d.ii.EventType.CLOSE,()=>{f||(f=!0,w(rM,`RPC '${e}' stream ${s} transport closed`),g.wo())}),p(c,d.ii.EventType.ERROR,t=>{f||(f=!0,_(rM,`RPC '${e}' stream ${s} transport errored:`,t),g.wo(new S(I.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||C();let a=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(a){w(rM,`RPC '${e}' stream ${s} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tV(t)}(t),i=a.message;void 0===r&&(r=I.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),f=!0,g.wo(new S(r,i)),c.close()}else w(rM,`RPC '${e}' stream ${s} received:`,i),g.So(i)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?w(rM,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===d.kN.NOPROXY&&w(rM,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.yo()},0),g}}function rq(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t,r=1e3,n=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=n,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();let t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),n=Math.max(0,t-r);n>0&&w("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,n,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){null!==this.Ko&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){null!==this.Ko&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,t,r,n,s,i,a,o){this.ai=e,this.jo=r,this.Ho=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new rB(e,t)}t_(){return 1===this.state||5===this.state||this.n_()}n_(){return 2===this.state||3===this.state}start(){this.Xo=0,4!==this.state?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&null===this.Yo&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,4!==e?this.e_.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(E(t.toString()),E("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;let e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Jo===t&&this.h_(e,r)},t=>{e(()=>{let e=new S(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.P_(e)})})}h_(e,t){let r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(e=>{r(()=>this.P_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.Xo?this.T_(e):this.onNext(e))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r$ extends rz{constructor(e,t,r,n,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,s;t.targetChange;let i="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:C(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.useProto3Json?(void 0===s||"string"==typeof s||C(),el.fromBase64String(s||"")):(void 0===s||s instanceof m||s instanceof Uint8Array||C(),el.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause;r=new tK(i,a,o,l&&new S(void 0===l.code?I.UNKNOWN:tV(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let s=t4(e,n.document.name),i=t0(n.document.updateTime),a=n.document.createTime?t0(n.document.createTime):U.min(),o=new eR({mapValue:{fields:n.document.fields}}),l=eL.newFoundDocument(s,i,a,o);r=new tz(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let s=t4(e,n.document),i=n.readTime?t0(n.readTime):U.min(),a=eL.newNoDocument(s,i);r=new tz([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let s=t4(e,n.document);r=new tz([],n.removedTargetIds||[],s,null)}else{if(!("filter"in t))return C();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:s}=e,i=new tL(n,s);r=new t$(e.targetId,i)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return U.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?t0(t.readTime):U.min()}(e);return this.listener.E_(t,r)}d_(e){let t={};t.database=t9(this.serializer),t.addTarget=function(e,t){var r,n;let s;let i=t.target;if((s=e1(i)?{documents:{documents:[t3(e,i.path)]}}:{query:function(e,t){var r,n;let s;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=t3(e,s);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eU?function(e){if("=="===e.op){if(ek(e.value))return{unaryFilter:{field:t5(e.field),op:"IS_NAN"}};if(eN(e.value))return{unaryFilter:{field:t5(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ek(e.value))return{unaryFilter:{field:t5(e.field),op:"IS_NOT_NAN"}};if(eN(e.value))return{unaryFilter:{field:t5(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:t5(e.field),op:tY[e.op],value:e.value}}}(t):t instanceof eq?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:tJ[t.op],filters:r}}}(t):C()}(eq.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:t5(e.field),direction:tW[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=tZ(e,t.limit);return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{_t:i,parent:s}}(e,i)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){s.resumeToken=(r=t.resumeToken,e.useProto3Json?r.toBase64():r.toUint8Array());let n=tZ(e,t.expectedCount);null!==n&&(s.expectedCount=n)}else if(t.snapshotVersion.compareTo(U.min())>0){s.readTime=(n=t.snapshotVersion.toTimestamp(),e.useProto3Json?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds});let r=tZ(e,t.expectedCount);null!==r&&(s.expectedCount=r)}return s}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){let t={};t.database=t9(this.serializer),t.removeTarget=e,this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.p_=!1}y_(){if(this.p_)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,n){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Fo(e,t1(t,r),n,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(I.UNKNOWN,e.toString())})}No(e,t,r,n,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.No(e,t1(t,r),n,i,a,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(I.UNKNOWN,e.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class rQ{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){0===this.w_&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){"Online"===this.state?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,"Online"===e&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(E(t),this.b_=!1):w("OnlineStateTracker",t)}M_(){null!==this.S_&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(e=>{r.enqueueAndForget(async()=>{r1(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.N_.add(4),await rH(e),e.k_.set("Unknown"),e.N_.delete(4),await rj(e)}(this))})}),this.k_=new rQ(r,n)}}async function rj(e){if(r1(e))for(let t of e.L_)await t(!0)}async function rH(e){for(let t of e.L_)await t(!1)}function rW(e,t){e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),r0(e)?rZ(e):r7(e).n_()&&rJ(e,t))}function rY(e,t){let r=r7(e);e.O_.delete(t),r.n_()&&rX(e,t),0===e.O_.size&&(r.n_()?r.s_():r1(e)&&e.k_.set("Unknown"))}function rJ(e,t){if(e.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}r7(e).d_(t)}function rX(e,t){e.q_.xe(t),r7(e).A_(t)}function rZ(e){e.q_=new tG({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.O_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),r7(e).start(),e.k_.D_()}function r0(e){return r1(e)&&!r7(e).t_()&&e.O_.size>0}function r1(e){return 0===e.N_.size}async function r2(e){e.k_.set("Online")}async function r4(e){e.O_.forEach((t,r)=>{rJ(e,t)})}async function r3(e,t){e.q_=void 0,r0(e)?(e.k_.F_(t),rZ(e)):e.k_.set("Unknown")}async function r9(e,t,r){if(e.k_.set("Online"),t instanceof tK&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.O_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.O_.delete(n),e.q_.removeTarget(n))}(e,t)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await r8(e,r)}else if(t instanceof tz?e.q_.Ke(t):t instanceof t$?e.q_.He(t):e.q_.We(t),!r.isEqual(U.min()))try{let t=await rN(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.q_.rt(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let s=e.O_.get(n);s&&e.O_.set(n,s.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.O_.get(t);if(!n)return;e.O_.set(t,n.withResumeToken(el.EMPTY_BYTE_STRING,n.snapshotVersion)),rX(e,t);let s=new re(n.target,t,r,n.sequenceNumber);rJ(e,s)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){w("RemoteStore","Failed to raise snapshot:",t),await r8(e,t)}}async function r8(e,t,r){if(!Y(t))throw t;e.N_.add(1),await rH(e),e.k_.set("Offline"),r||(r=()=>rN(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await r(),e.N_.delete(1),await rj(e)})}async function r5(e,t){e.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");let r=r1(e);e.N_.add(3),await rH(e),r&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await rj(e)}async function r6(e,t){t?(e.N_.delete(2),await rj(e)):t||(e.N_.add(2),await rH(e),e.k_.set("Unknown"))}function r7(e){var t,r,n;return e.Q_||(e.Q_=(t=e.datastore,r=e.asyncQueue,n={To:r2.bind(null,e),Ao:r4.bind(null,e),Vo:r3.bind(null,e),E_:r9.bind(null,e)},t.y_(),new r$(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.L_.push(async t=>{t?(e.Q_.i_(),r0(e)?rZ(e):e.k_.set("Unknown")):(await e.Q_.stop(),e.q_=void 0)})),e.Q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new A,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,s){let i=new ne(e,t,Date.now()+r,n,s);return i.start(r),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nt(e,t){if(E("AsyncQueue",`${t}: ${e}`),Y(e))return new S(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(e,t)=>K.comparator(e.key,t.key),this.keyedMap=ti(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new nr(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.U_=new et(K.comparator)}track(e){let t=e.doc.key,r=this.U_.get(t);r?0!==e.type&&3===r.type?this.U_=this.U_.insert(t,e):3===e.type&&1!==r.type?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.U_=this.U_.remove(t):1===e.type&&2===r.type?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):C():this.U_=this.U_.insert(t,e)}W_(){let e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ns{constructor(e,t,r,n,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new ns(e,t,nr.emptySet(t),i,r,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e5(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class na{constructor(){this.queries=no(),this.onlineState="Unknown",this.J_=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=no(),r.forEach((e,r)=>{for(let e of r.z_)e.onError(t)})}(this,new S(I.ABORTED,"Firestore shutting down"))}}function no(){return new tr(e=>e6(e),e5)}async function nl(e,t){let r=3,n=t.query,s=e.queries.get(n);s?!s.j_()&&t.H_()&&(r=2):(s=new ni,r=t.H_()?0:1);try{switch(r){case 0:s.G_=await e.onListen(n,!0);break;case 1:s.G_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=nt(r,`Initialization of query '${e7(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,s),s.z_.push(t),t.Y_(e.onlineState),s.G_&&t.Z_(s.G_)&&nd(e)}async function nu(e,t){let r=t.query,n=3,s=e.queries.get(r);if(s){let e=s.z_.indexOf(t);e>=0&&(s.z_.splice(e,1),0===s.z_.length?n=t.H_()?0:1:!s.j_()&&t.H_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function nh(e,t){let r=!1;for(let n of t){let t=n.query,s=e.queries.get(t);if(s){for(let e of s.z_)e.Z_(n)&&(r=!0);s.G_=n}}r&&nd(e)}function nc(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.z_)e.onError(r);e.queries.delete(t)}function nd(e){e.J_.forEach(e=>{e.next()})}(a=i||(i={})).X_="default",a.Cache="cache";class nm{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new ns(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){return!(e.fromCache&&this.H_())||(!this.options.oa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ra(e){if(e.docChanges.length>0)return!0;let t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}sa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==i.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.key=e}}class ng{constructor(e){this.key=e}}class np{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=tl(),this.mutatedKeys=tl(),this.da=tt(e),this.Aa=new nr(this.da)}get Ra(){return this.Ia}Va(e,t){let r=t?t.ma:new nn,n=t?t.Aa:this.Aa,s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=te(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),m=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),m=!0):this.fa(u,h)||(r.track({type:2,doc:h}),m=!0,(o&&this.da(h,o)>0||l&&0>this.da(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),m=!0):u&&!h&&(r.track({type:1,doc:u}),m=!0,(o||l)&&(a=!0)),m&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),r.track({type:1,doc:e})}return{Aa:i,ma:r,ts:a,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;let i=e.ma.W_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return r(e)-r(t)})(e.type,t.type)||this.da(e.doc,t.doc)),this.ga(r),n=null!=n&&n;let a=t&&!n?this.pa():[],o=0===this.Ea.size&&this.current&&!n?1:0,l=o!==this.Ta;return(this.Ta=o,0!==i.length||l)?{snapshot:new ns(this.query,e.Aa,s,i,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new nn,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=e.current)}pa(){if(!this.current)return[];let e=this.Ea;this.Ea=tl(),this.Aa.forEach(e=>{this.wa(e.key)&&(this.Ea=this.Ea.add(e.key))});let t=[];return e.forEach(e=>{this.Ea.has(e)||t.push(new ng(e))}),this.Ea.forEach(r=>{e.has(r)||t.push(new nf(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=tl();let t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return ns.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,0===this.Ta,this.hasCachedResults)}}class ny{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nv{constructor(e){this.key=e,this.Da=!1}}class nw{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ca={},this.va=new tr(e=>e6(e),e5),this.Fa=new Map,this.Ma=new Set,this.xa=new et(K.comparator),this.Oa=new Map,this.Na=new rm,this.La={},this.Ba=new Map,this.ka=ra.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return!0===this.qa}}async function nE(e,t,r=!0){let n;let s=nP(e),i=s.va.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),n=i.view.ba()):n=await nT(s,t,r,!0),n}async function n_(e,t){let r=nP(e);await nT(r,t,!0,!1)}async function nT(e,t,r,n){var s,i;let a;let o=await (s=e.localStore,i=e9(t),s.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return s.$r.getTargetData(e,i).next(r=>r?(t=r,W.resolve(t)):s.$r.allocateTargetId(e).next(r=>(t=new re(i,r,"TargetPurposeListen",e.currentSequenceNumber),s.$r.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=s.ss.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(s.ss=s.ss.insert(e.targetId,e),s.os.set(i,e.targetId)),e})),l=o.targetId,u=r?e.sharedClientState.addLocalQueryTarget(l):"not-current";return n&&(a=await nC(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&r&&rW(e.remoteStore,o),a}async function nC(e,t,r,n,s){e.Qa=(t,r,n)=>(async function(e,t,r,n){let s=t.view.Va(r);s.ts&&(s=await rD(e.localStore,t.query,!1).then(({documents:e})=>t.view.Va(e,s)));let i=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i,a);return nx(e,t.targetId,o.ya),o.snapshot})(e,t,r,n);let i=await rD(e.localStore,t,!0),a=new np(t,i.Is),o=a.Va(i.documents),l=tB.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);nx(e,r,u.ya);let h=new ny(t,r,a);return e.va.set(t,h),e.Fa.has(r)?e.Fa.get(r).push(t):e.Fa.set(r,[t]),u.snapshot}async function nI(e,t,r){let n=e.va.get(t),s=e.Fa.get(n.targetId);if(s.length>1)return e.Fa.set(n.targetId,s.filter(e=>!e5(e,t))),void e.va.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await rk(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&rY(e.remoteStore,n.targetId),nD(e,n.targetId)}).catch(H)):(nD(e,n.targetId),await rk(e.localStore,n.targetId,!0))}async function nS(e,t){let r=e.va.get(t),n=e.Fa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),rY(e.remoteStore,r.targetId))}async function nA(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{var i;let a,o;let l=e.us.newChangeBuffer({trackRemovals:!0});n=e.ss;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.$r.removeMatchingKeys(s,i.removedDocuments,a).next(()=>e.$r.addMatchingKeys(s,i.addedDocuments,a)));let h=l.withSequenceNumber(s.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(el.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(e.$r.updateTargetData(s,h))});let h=tn,c=tl();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(s,r))}),u.push((i=t.documentUpdates,a=tl(),o=tl(),i.forEach(e=>a=a.add(e)),l.getEntries(s,a).next(e=>{let t=tn;return i.forEach((r,n)=>{let s=e.get(r);n.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(U.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!s.isValidDocument()||n.version.compareTo(s.version)>0||0===n.version.compareTo(s.version)&&s.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):w("LocalStore","Ignoring outdated watch update for ",r,". Current version:",s.version," Watch version:",n.version)}),{hs:t,Ps:o}})).next(e=>{h=e.hs,c=e.Ps})),!r.isEqual(U.min())){let t=e.$r.getLastRemoteSnapshotVersion(s).next(t=>e.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(t)}return W.waitFor(u).next(()=>l.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,h,c)).next(()=>h)}).then(t=>(e.ss=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Oa.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||C(),t.addedDocuments.size>0?n.Da=!0:t.modifiedDocuments.size>0?n.Da||C():t.removedDocuments.size>0&&(n.Da||C(),n.Da=!1))}),await nL(e,r,t)}catch(e){await H(e)}}function nN(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let s=[];e.va.forEach((e,r)=>{let n=r.view.Y_(t);n.snapshot&&s.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.z_)e.Y_(t)&&(r=!0)}),r&&nd(n),s.length&&e.Ca.E_(s),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function nk(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Oa.get(t),s=n&&n.key;if(s){let r=new et(K.comparator);r=r.insert(s,eL.newNoDocument(s,U.min()));let n=tl().add(s),i=new tq(U.min(),new Map,new et(P),r,n);await nA(e,i),e.xa=e.xa.remove(s),e.Oa.delete(t),nR(e)}else await rk(e.localStore,t,!1).then(()=>nD(e,t,r)).catch(H)}function nD(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Fa.get(t)))e.va.delete(n),r&&e.Ca.Ka(n,r);e.Fa.delete(t),e.isPrimaryClient&&e.Na.mr(t).forEach(t=>{e.Na.containsKey(t)||nb(e,t)})}function nb(e,t){e.Ma.delete(t.path.canonicalString());let r=e.xa.get(t);null!==r&&(rY(e.remoteStore,r),e.xa=e.xa.remove(t),e.Oa.delete(r),nR(e))}function nx(e,t,r){for(let n of r)n instanceof nf?(e.Na.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.xa.get(r)||e.Ma.has(n)||(w("SyncEngine","New document in limbo: "+r),e.Ma.add(n),nR(e))}(e,n)):n instanceof ng?(w("SyncEngine","Document no longer in limbo: "+n.key),e.Na.removeReference(n.key,t),e.Na.containsKey(n.key)||nb(e,n.key)):C()}function nR(e){for(;e.Ma.size>0&&e.xa.size<e.maxConcurrentLimboResolutions;){let t=e.Ma.values().next().value;e.Ma.delete(t);let r=new K(B.fromString(t)),n=e.ka.next();e.Oa.set(n,new nv(r)),e.xa=e.xa.insert(r,n),rW(e.remoteStore,new re(e9(new e2(r.path)),n,"TargetPurposeLimboResolution",J.oe))}}async function nL(e,t,r){let n=[],s=[],i=[];e.va.isEmpty()||(e.va.forEach((a,o)=>{i.push(e.Qa(o,t,r).then(t=>{var i;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(i=null==r?void 0:r.targetChanges.get(o.targetId))||void 0===i?void 0:i.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=rT.Ui(o.targetId,t);s.push(e)}}))}),await Promise.all(i),e.Ca.E_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>W.forEach(t,t=>W.forEach(t.Ki,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>W.forEach(t.$i,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!Y(e))throw e;w("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.ss.get(t),n=r.snapshotVersion,s=r.withLastLimboFreeSnapshotVersion(n);e.ss=e.ss.insert(t,s)}}}(e.localStore,s))}async function nV(e,t){var r;if(!e.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());let n=await rA(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ba.forEach(e=>{e.forEach(e=>{e.reject(new S(I.CANCELLED,r))})}),e.Ba.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await nL(e,n.ls)}}function nO(e,t){let r=e.Oa.get(t);if(r&&r.Da)return tl().add(r.key);{let r=tl(),n=e.Fa.get(t);if(!n)return r;for(let t of n){let n=e.va.get(t);r=r.unionWith(n.view.Ra)}return r}}function nP(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=nA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nk.bind(null,e),e.Ca.E_=nh.bind(null,e.eventManager),e.Ca.Ka=nc.bind(null,e.eventManager),e}class nF{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=new tX(e.databaseInfo.databaseId,!0),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new rS(t,new rI,e.initialUser,this.serializer)}createPersistence(e){return new rw(r_.Yr,this.serializer)}createSharedClientState(e){return new rx}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nM{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nN(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nV.bind(null,this.syncEngine),await r6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new na}createDatastore(e){let t=new tX(e.databaseInfo.databaseId,!0),r=new rU(e.databaseInfo);return new rK(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new rG(t,this.datastore,e.asyncQueue,e=>nN(this.syncEngine,e,0),rL.D()?new rL:new rR)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){let o=new nw(e,t,r,n,s,i);return a&&(o.qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){w("RemoteStore","RemoteStore shutting down."),e.N_.add(5),await rH(e),e.B_.shutdown(),e.k_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):E("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=g.UNAUTHENTICATED,this.clientId=O.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{w("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(w("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new A;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=nt(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nB(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rA(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function nz(e,t){e.asyncQueue.verifyOperationInProgress();let r=await n$(e);w("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>r5(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>r5(t.remoteStore,r)),e._onlineComponents=t}async function n$(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await nB(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;_("Error using user provided cache. Falling back to memory cache: "+t),await nB(e,new nF)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await nB(e,new nF)}return e._offlineComponents}async function nK(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await nz(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await nz(e,new nM))),e._onlineComponents}async function nQ(e){let t=await nK(e),r=t.eventManager;return r.onListen=nE.bind(null,t.syncEngine),r.onUnlisten=nI.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=n_.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=nS.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nG(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nj=new Map;function nH(e){if(K.isDocumentKey(e))throw new S(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nW(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":C()}(e);throw new S(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new S(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new S(I.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nG(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nJ{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nY({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nY(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nj.get(e);t&&(w("ComponentProvider","Removing Datastore"),nj.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nX(this.firestore,e,this._query)}}class nZ{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new n0(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nZ(this.firestore,e,this._key)}}class n0 extends nX{constructor(e,t,r){super(e,t,new e2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new nZ(this.firestore,null,new K(e))}withConverter(e){return new n0(this.firestore,e,this._path)}}function n1(e,t,...r){if(e=(0,h.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){if(!r)throw new S(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof nJ){let n=B.fromString(t,...r);return nH(n),new n0(e,null,n)}{if(!(e instanceof nZ||e instanceof n0))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(B.fromString(t,...r));return nH(n),new n0(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new rB(this,"async_queue_retry"),this.Tu=()=>{let e=rq();e&&w("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};let e=rq();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;let t=rq();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});let t=new A;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(0!==this.au.length){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Y(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){let t=this._u.then(()=>(this.hu=!0,e().catch(e=>{let t;throw this.lu=e,this.hu=!1,E("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.hu=!1,e))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);let n=ne.createAndSchedule(this,e,t,r,e=>this.Ru(e));return this.cu.push(n),n}Eu(){this.lu&&C()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(let t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{for(let t of(this.cu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.cu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){let t=this.cu.indexOf(e);this.cu.splice(t,1)}}class n4 extends nJ{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new n2,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||n9(this),this._firestoreClient.terminate()}}function n3(e,t){let r="object"==typeof e?e:(0,o.Mq)(),n=(0,o.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,r,n={}){var s;let i=(e=nW(e,nJ))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=g.MOCK_USER;else{t=(0,h.Sg)(n.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new S(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new g(i)}e._authCredentials=new D(new N(t,r))}}(n,...e)}return n}function n9(e){var t,r,n,s;let i=e._freezeSettings(),a=(s=e._databaseId,new ep(s,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,nG(i.experimentalLongPollingOptions),i.useFetchStreams));e._firestoreClient=new nq(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(r=i.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=i.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n8(el.fromBase64String(e))}catch(e){throw new S(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new n8(el.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}let n7=RegExp("[~\\*/\\[\\]]");function se(e,t,r,n,s){let i=n&&!n.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new S(I.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nZ(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sn("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sr extends st{data(){return super.data()}}function sn(e,t){return"string"==typeof t?function(e,t,r){if(t.search(n7)>=0)throw se(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,void 0);try{return new n5(...t.split("."))._internalPath}catch(r){throw se(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,void 0)}}(e,t):t instanceof n5?t._internalPath:t._delegate._internalPath}class ss{convertValue(e,t="none"){switch(ew(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ec(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ed(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw C()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return ee(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new n6(ec(e.latitude),ec(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=ef(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eg(e));default:return null}}convertTimestamp(e){let t=eh(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=B.fromString(e);t7(r)||C();let n=new ey(r.get(1),r.get(3)),s=new K(r.popFirst(5));return n.isEqual(t)||E(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sa extends st{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new so(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sn("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class so extends sa{data(e={}){return super.data(e)}}class sl{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new si(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new so(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new so(e._firestore,e._userDataWriter,r.doc.key,r.doc,new si(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new so(e._firestore,e._userDataWriter,t.doc.key,t.doc,new si(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(i=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}(t.type),doc:n,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class su extends ss{constructor(e){super(),this.firestore=e}convertBytes(e){return new n8(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new nZ(this.firestore,null,t)}}function sh(e){e=nW(e,nX);let t=nW(e.firestore,n4),r=(t._firestoreClient||n9(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n=new su(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new A;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,s){let i=new nm(r,new nU({next:r=>{t.enqueueAndForget(()=>nu(e,i)),r.fromCache&&"server"===n.source?s.reject(new S(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(r)},error:e=>s.reject(e)}),{includeMetadataChanges:!0,oa:!0});return nl(e,i)})(await nQ(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new sl(t,n,e,r)))}new WeakMap,function(e=!0){p=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let s=t.getProvider("app").getImmediate(),i=new n4(new b(t.getProvider("auth-internal")),new V(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ey(e.options.projectId,t)}(s,r),s);return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(f,"4.6.5",void 0),(0,o.KN)(f,"4.6.5","esm2017")}()}}]);
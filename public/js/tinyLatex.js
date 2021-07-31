/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo/ts/Demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js ***!
  \***********************************************************************************/
/*! exports provided: ANGLE_instanced_arrays, AbortController, AbortSignal, AnalyserNode, Animation, AnimationEvent, AnimationPlaybackEvent, ApplicationCache, Attr, AudioBuffer, AudioBufferSourceNode, AudioContext, AudioDestinationNode, AudioListener, AudioNode, AudioParam, AudioProcessingEvent, AudioTrack, AudioTrackList, BarProp, BeforeUnloadEvent, BhxBrowser, BiquadFilterNode, Blob, BroadcastChannel, ByteLengthQueuingStrategy, CDATASection, CSS, CSSConditionRule, CSSFontFaceRule, CSSGroupingRule, CSSImportRule, CSSKeyframeRule, CSSKeyframesRule, CSSMediaRule, CSSNamespaceRule, CSSPageRule, CSSRule, CSSRuleList, CSSStyleDeclaration, CSSStyleRule, CSSStyleSheet, CSSSupportsRule, Cache, CacheStorage, CanvasGradient, CanvasPattern, CanvasRenderingContext2D, ChannelMergerNode, ChannelSplitterNode, CharacterData, ClientRect, ClientRectList, ClipboardEvent, CloseEvent, Comment, CompositionEvent, Console, ContentScriptGlobalScope, ConvolverNode, Coordinates, CountQueuingStrategy, Crypto, CryptoKey, CryptoKeyPair, CustomEvent, DOMError, DOMException, DOMImplementation, DOMParser, DOMRect, DOMRectReadOnly, DOMSettableTokenList, DOMStringList, DOMStringMap, DOMTokenList, DataCue, DataTransfer, DataTransferItem, DataTransferItemList, DeferredPermissionRequest, DelayNode, DeviceAcceleration, DeviceLightEvent, DeviceMotionEvent, DeviceOrientationEvent, DeviceRotationRate, Document, DocumentFragment, DocumentType, DragEvent, DynamicsCompressorNode, EXT_texture_filter_anisotropic, Element, ErrorEvent, Event, EventSource, EventTarget, ExtensionScriptApis, External, File, FileList, FileReader, FocusEvent, FocusNavigationEvent, FormData, GainNode, Gamepad, GamepadButton, GamepadEvent, GamepadHapticActuator, GamepadPose, Geolocation, HTMLAllCollection, HTMLAnchorElement, HTMLAppletElement, HTMLAreaElement, HTMLAreasCollection, HTMLAudioElement, HTMLBRElement, HTMLBaseElement, HTMLBaseFontElement, HTMLBodyElement, HTMLButtonElement, HTMLCanvasElement, HTMLCollection, HTMLDListElement, HTMLDataElement, HTMLDataListElement, HTMLDetailsElement, HTMLDialogElement, HTMLDirectoryElement, HTMLDivElement, HTMLDocument, HTMLElement, HTMLEmbedElement, HTMLFieldSetElement, HTMLFontElement, HTMLFormControlsCollection, HTMLFormElement, HTMLFrameElement, HTMLFrameSetElement, HTMLHRElement, HTMLHeadElement, HTMLHeadingElement, HTMLHtmlElement, HTMLIFrameElement, HTMLImageElement, HTMLInputElement, HTMLLIElement, HTMLLabelElement, HTMLLegendElement, HTMLLinkElement, HTMLMainElement, HTMLMapElement, HTMLMarqueeElement, HTMLMediaElement, HTMLMenuElement, HTMLMetaElement, HTMLMeterElement, HTMLModElement, HTMLOListElement, HTMLObjectElement, HTMLOptGroupElement, HTMLOptionElement, HTMLOptionsCollection, HTMLOutputElement, HTMLParagraphElement, HTMLParamElement, HTMLPictureElement, HTMLPreElement, HTMLProgressElement, HTMLQuoteElement, HTMLScriptElement, HTMLSelectElement, HTMLSourceElement, HTMLSpanElement, HTMLStyleElement, HTMLSummaryElement, HTMLTableCaptionElement, HTMLTableCellElement, HTMLTableColElement, HTMLTableDataCellElement, HTMLTableElement, HTMLTableHeaderCellElement, HTMLTableRowElement, HTMLTableSectionElement, HTMLTemplateElement, HTMLTextAreaElement, HTMLTimeElement, HTMLTitleElement, HTMLTrackElement, HTMLUListElement, HTMLUnknownElement, HTMLVideoElement, HTMLegendElement, HashChangeEvent, Headers, History, IDBCursor, IDBCursorWithValue, IDBDatabase, IDBFactory, IDBIndex, IDBKeyRange, IDBObjectStore, IDBOpenDBRequest, IDBRequest, IDBTransaction, IDBVersionChangeEvent, IIRFilterNode, ImageData, IntersectionObserver, IntersectionObserverEntry, KeyboardEvent, ListeningStateChangedEvent, Location, MSAssertion, MSBlobBuilder, MSCredentials, MSDCCEvent, MSDSHEvent, MSFIDOCredentialAssertion, MSFIDOSignature, MSFIDOSignatureAssertion, MSGesture, MSGestureEvent, MSGraphicsTrust, MSInputMethodContext, MSMediaKeyError, MSMediaKeyMessageEvent, MSMediaKeyNeededEvent, MSMediaKeySession, MSMediaKeys, MSPointerEvent, MSStream, MSStreamReader, MediaDeviceInfo, MediaDevices, MediaElementAudioSourceNode, MediaEncryptedEvent, MediaError, MediaKeyMessageEvent, MediaKeySession, MediaKeyStatusMap, MediaKeySystemAccess, MediaKeys, MediaList, MediaQueryList, MediaSource, MediaStream, MediaStreamAudioSourceNode, MediaStreamError, MediaStreamErrorEvent, MediaStreamEvent, MediaStreamTrack, MediaStreamTrackEvent, MessageChannel, MessageEvent, MessagePort, MimeType, MimeTypeArray, MouseEvent, MutationEvent, MutationObserver, MutationRecord, NamedNodeMap, Navigator, Node, NodeFilter, NodeIterator, NodeList, Notification, OES_element_index_uint, OES_standard_derivatives, OES_texture_float, OES_texture_float_linear, OES_texture_half_float, OES_texture_half_float_linear, OfflineAudioCompletionEvent, OfflineAudioContext, OscillatorNode, OverflowEvent, PageTransitionEvent, PannerNode, Path2D, PaymentAddress, PaymentRequest, PaymentRequestUpdateEvent, PaymentResponse, PerfWidgetExternal, Performance, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceNavigation, PerformanceNavigationTiming, PerformanceResourceTiming, PerformanceTiming, PeriodicWave, PermissionRequest, PermissionRequestedEvent, Plugin, PluginArray, PointerEvent, PopStateEvent, Position, PositionError, ProcessingInstruction, ProgressEvent, PushManager, PushSubscription, PushSubscriptionOptions, RTCDTMFToneChangeEvent, RTCDtlsTransport, RTCDtlsTransportStateChangedEvent, RTCDtmfSender, RTCIceCandidate, RTCIceCandidatePairChangedEvent, RTCIceGatherer, RTCIceGathererEvent, RTCIceTransport, RTCIceTransportStateChangedEvent, RTCPeerConnection, RTCPeerConnectionIceEvent, RTCRtpReceiver, RTCRtpSender, RTCSessionDescription, RTCSrtpSdesTransport, RTCSsrcConflictEvent, RTCStatsProvider, RandomSource, Range, ReadableStream, ReadableStreamReader, Request, Response, SVGAElement, SVGAngle, SVGAnimatedAngle, SVGAnimatedBoolean, SVGAnimatedEnumeration, SVGAnimatedInteger, SVGAnimatedLength, SVGAnimatedLengthList, SVGAnimatedNumber, SVGAnimatedNumberList, SVGAnimatedPreserveAspectRatio, SVGAnimatedRect, SVGAnimatedString, SVGAnimatedTransformList, SVGCircleElement, SVGClipPathElement, SVGComponentTransferFunctionElement, SVGDefsElement, SVGDescElement, SVGElement, SVGElementInstance, SVGElementInstanceList, SVGEllipseElement, SVGFEBlendElement, SVGFEColorMatrixElement, SVGFEComponentTransferElement, SVGFECompositeElement, SVGFEConvolveMatrixElement, SVGFEDiffuseLightingElement, SVGFEDisplacementMapElement, SVGFEDistantLightElement, SVGFEFloodElement, SVGFEFuncAElement, SVGFEFuncBElement, SVGFEFuncGElement, SVGFEFuncRElement, SVGFEGaussianBlurElement, SVGFEImageElement, SVGFEMergeElement, SVGFEMergeNodeElement, SVGFEMorphologyElement, SVGFEOffsetElement, SVGFEPointLightElement, SVGFESpecularLightingElement, SVGFESpotLightElement, SVGFETileElement, SVGFETurbulenceElement, SVGFilterElement, SVGForeignObjectElement, SVGGElement, SVGGradientElement, SVGGraphicsElement, SVGImageElement, SVGLength, SVGLengthList, SVGLineElement, SVGLinearGradientElement, SVGMarkerElement, SVGMaskElement, SVGMatrix, SVGMetadataElement, SVGNumber, SVGNumberList, SVGPathElement, SVGPathSeg, SVGPathSegArcAbs, SVGPathSegArcRel, SVGPathSegClosePath, SVGPathSegCurvetoCubicAbs, SVGPathSegCurvetoCubicRel, SVGPathSegCurvetoCubicSmoothAbs, SVGPathSegCurvetoCubicSmoothRel, SVGPathSegCurvetoQuadraticAbs, SVGPathSegCurvetoQuadraticRel, SVGPathSegCurvetoQuadraticSmoothAbs, SVGPathSegCurvetoQuadraticSmoothRel, SVGPathSegLinetoAbs, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalAbs, SVGPathSegLinetoVerticalRel, SVGPathSegList, SVGPathSegMovetoAbs, SVGPathSegMovetoRel, SVGPatternElement, SVGPoint, SVGPointList, SVGPolygonElement, SVGPolylineElement, SVGPreserveAspectRatio, SVGRadialGradientElement, SVGRect, SVGRectElement, SVGSVGElement, SVGScriptElement, SVGStopElement, SVGStringList, SVGStylable, SVGStyleElement, SVGSwitchElement, SVGSymbolElement, SVGTSpanElement, SVGTextContentElement, SVGTextElement, SVGTextPathElement, SVGTextPositioningElement, SVGTitleElement, SVGTransform, SVGTransformList, SVGUnitTypes, SVGUseElement, SVGViewElement, SVGZoomAndPan, SVGZoomEvent, ScopedCredential, ScopedCredentialInfo, Screen, ScriptProcessorNode, SecurityPolicyViolationEvent, Selection, ServiceUIFrameContext, ServiceWorker, ServiceWorkerContainer, ServiceWorkerMessageEvent, ServiceWorkerRegistration, SourceBuffer, SourceBufferList, SpeechSynthesis, SpeechSynthesisEvent, SpeechSynthesisUtterance, SpeechSynthesisVoice, StereoPannerNode, Storage, StorageEvent, StyleMedia, StyleSheet, StyleSheetList, SubtleCrypto, SyncManager, Text, TextDecoder, TextEncoder, TextEvent, TextMetrics, TextTrack, TextTrackCue, TextTrackCueList, TextTrackList, TimeRanges, Touch, TouchEvent, TouchList, TrackEvent, TransitionEvent, TreeWalker, UIEvent, URL, URLSearchParams, VRDisplay, VRDisplayCapabilities, VRDisplayEvent, VREyeParameters, VRFieldOfView, VRFrameData, VRPose, ValidityState, VideoPlaybackQuality, VideoTrack, VideoTrackList, WEBGL_compressed_texture_s3tc, WEBGL_debug_renderer_info, WEBGL_depth_texture, WaveShaperNode, WebAuthentication, WebAuthnAssertion, WebGLActiveInfo, WebGLBuffer, WebGLContextEvent, WebGLFramebuffer, WebGLObject, WebGLProgram, WebGLRenderbuffer, WebGLRenderingContext, WebGLShader, WebGLShaderPrecisionFormat, WebGLTexture, WebGLUniformLocation, WebKitCSSMatrix, WebKitDirectoryEntry, WebKitDirectoryReader, WebKitEntry, WebKitFileEntry, WebKitFileSystem, WebKitPoint, WebSocket, WheelEvent, Window, Worker, WritableStream, WritableStreamDefaultController, WritableStreamDefaultWriter, XMLDocument, XMLHttpRequest, XMLHttpRequestUpload, XMLSerializer, XPathEvaluator, XPathExpression, XPathNSResolver, XPathResult, XSLTProcessor, webkitRTCPeerConnection, Audio, Image, Option, applicationCache, caches, clientInformation, closed, crypto, customElements, defaultStatus, devicePixelRatio, doNotTrack, document, event, external, frameElement, frames, history, innerHeight, innerWidth, isSecureContext, length, location, locationbar, menubar, msContentScript, msCredentials, name, navigator, offscreenBuffering, onabort, onafterprint, onbeforeprint, onbeforeunload, onblur, oncanplay, oncanplaythrough, onchange, onclick, oncompassneedscalibration, oncontextmenu, ondblclick, ondevicelight, ondevicemotion, ondeviceorientation, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, onhashchange, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmessage, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onmsgesturechange, onmsgesturedoubletap, onmsgestureend, onmsgesturehold, onmsgesturestart, onmsgesturetap, onmsinertiastart, onmspointercancel, onmspointerdown, onmspointerenter, onmspointerleave, onmspointermove, onmspointerout, onmspointerover, onmspointerup, onoffline, ononline, onorientationchange, onpagehide, onpageshow, onpause, onplay, onplaying, onpopstate, onprogress, onratechange, onreadystatechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onstalled, onstorage, onsubmit, onsuspend, ontimeupdate, ontouchcancel, ontouchend, ontouchmove, ontouchstart, onunload, onvolumechange, onvrdisplayactivate, onvrdisplayblur, onvrdisplayconnect, onvrdisplaydeactivate, onvrdisplaydisconnect, onvrdisplayfocus, onvrdisplaypointerrestricted, onvrdisplaypointerunrestricted, onvrdisplaypresentchange, onwaiting, opener, orientation, outerHeight, outerWidth, pageXOffset, pageYOffset, parent, performance, personalbar, screen, screenLeft, screenTop, screenX, screenY, scrollX, scrollY, scrollbars, self, speechSynthesis, status, statusbar, styleMedia, toolbar, top, window, alert, blur, cancelAnimationFrame, captureEvents, close, confirm, createImageBitmap, departFocus, focus, getComputedStyle, getMatchedCSSRules, getSelection, matchMedia, moveBy, moveTo, msWriteProfilerMark, open, postMessage, print, prompt, releaseEvents, requestAnimationFrame, resizeBy, resizeTo, scroll, scrollBy, scrollTo, stop, webkitCancelAnimationFrame, webkitConvertPointFromNodeToPage, webkitConvertPointFromPageToNode, webkitRequestAnimationFrame, toString, dispatchEvent, clearInterval, clearTimeout, setInterval, setTimeout, clearImmediate, setImmediate, sessionStorage, localStorage, console, onpointercancel, onpointerdown, onpointerenter, onpointerleave, onpointermove, onpointerout, onpointerover, onpointerup, onwheel, indexedDB, atob, btoa, fetch, addEventListener, removeEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_instanced_arrays", function() { return ANGLE_instanced_arrays$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortSignal", function() { return AbortSignal$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyserNode", function() { return AnalyserNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEvent", function() { return AnimationEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPlaybackEvent", function() { return AnimationPlaybackEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCache", function() { return ApplicationCache$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attr", function() { return Attr$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBuffer", function() { return AudioBuffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioBufferSourceNode", function() { return AudioBufferSourceNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioContext", function() { return AudioContext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioDestinationNode", function() { return AudioDestinationNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioListener", function() { return AudioListener$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioNode", function() { return AudioNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioParam", function() { return AudioParam$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioProcessingEvent", function() { return AudioProcessingEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrack", function() { return AudioTrack$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioTrackList", function() { return AudioTrackList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarProp", function() { return BarProp$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeUnloadEvent", function() { return BeforeUnloadEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BhxBrowser", function() { return BhxBrowser$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiquadFilterNode", function() { return BiquadFilterNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return Blob$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastChannel", function() { return BroadcastChannel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteLengthQueuingStrategy", function() { return ByteLengthQueuingStrategy$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDATASection", function() { return CDATASection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS", function() { return CSS$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSConditionRule", function() { return CSSConditionRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSFontFaceRule", function() { return CSSFontFaceRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSGroupingRule", function() { return CSSGroupingRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSImportRule", function() { return CSSImportRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSKeyframeRule", function() { return CSSKeyframeRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSKeyframesRule", function() { return CSSKeyframesRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSMediaRule", function() { return CSSMediaRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSNamespaceRule", function() { return CSSNamespaceRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPageRule", function() { return CSSPageRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSRule", function() { return CSSRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSRuleList", function() { return CSSRuleList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSStyleDeclaration", function() { return CSSStyleDeclaration$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSStyleRule", function() { return CSSStyleRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSStyleSheet", function() { return CSSStyleSheet$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSSupportsRule", function() { return CSSSupportsRule$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheStorage", function() { return CacheStorage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGradient", function() { return CanvasGradient$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPattern", function() { return CanvasPattern$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderingContext2D", function() { return CanvasRenderingContext2D$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMergerNode", function() { return ChannelMergerNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSplitterNode", function() { return ChannelSplitterNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterData", function() { return CharacterData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRect", function() { return ClientRect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRectList", function() { return ClientRectList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardEvent", function() { return ClipboardEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseEvent", function() { return CloseEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionEvent", function() { return CompositionEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentScriptGlobalScope", function() { return ContentScriptGlobalScope$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvolverNode", function() { return ConvolverNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountQueuingStrategy", function() { return CountQueuingStrategy$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crypto", function() { return Crypto$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoKey", function() { return CryptoKey$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoKeyPair", function() { return CryptoKeyPair$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvent", function() { return CustomEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMError", function() { return DOMError$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMImplementation", function() { return DOMImplementation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMParser", function() { return DOMParser$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRect", function() { return DOMRect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRectReadOnly", function() { return DOMRectReadOnly$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMSettableTokenList", function() { return DOMSettableTokenList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMStringList", function() { return DOMStringList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMStringMap", function() { return DOMStringMap$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMTokenList", function() { return DOMTokenList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCue", function() { return DataCue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransfer", function() { return DataTransfer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferItem", function() { return DataTransferItem$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferItemList", function() { return DataTransferItemList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferredPermissionRequest", function() { return DeferredPermissionRequest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayNode", function() { return DelayNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAcceleration", function() { return DeviceAcceleration$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceLightEvent", function() { return DeviceLightEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotionEvent", function() { return DeviceMotionEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOrientationEvent", function() { return DeviceOrientationEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRotationRate", function() { return DeviceRotationRate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFragment", function() { return DocumentFragment$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragEvent", function() { return DragEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicsCompressorNode", function() { return DynamicsCompressorNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_texture_filter_anisotropic", function() { return EXT_texture_filter_anisotropic$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEvent", function() { return ErrorEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSource", function() { return EventSource$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionScriptApis", function() { return ExtensionScriptApis$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "External", function() { return External$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileList", function() { return FileList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReader", function() { return FileReader$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusEvent", function() { return FocusEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusNavigationEvent", function() { return FocusNavigationEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GainNode", function() { return GainNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gamepad", function() { return Gamepad$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadButton", function() { return GamepadButton$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadEvent", function() { return GamepadEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadHapticActuator", function() { return GamepadHapticActuator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadPose", function() { return GamepadPose$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAllCollection", function() { return HTMLAllCollection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAnchorElement", function() { return HTMLAnchorElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAppletElement", function() { return HTMLAppletElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAreaElement", function() { return HTMLAreaElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAreasCollection", function() { return HTMLAreasCollection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAudioElement", function() { return HTMLAudioElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBRElement", function() { return HTMLBRElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBaseElement", function() { return HTMLBaseElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBaseFontElement", function() { return HTMLBaseFontElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLBodyElement", function() { return HTMLBodyElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLButtonElement", function() { return HTMLButtonElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLCanvasElement", function() { return HTMLCanvasElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLCollection", function() { return HTMLCollection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDListElement", function() { return HTMLDListElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDataElement", function() { return HTMLDataElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDataListElement", function() { return HTMLDataListElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDetailsElement", function() { return HTMLDetailsElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDialogElement", function() { return HTMLDialogElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDirectoryElement", function() { return HTMLDirectoryElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDivElement", function() { return HTMLDivElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDocument", function() { return HTMLDocument$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLElement", function() { return HTMLElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLEmbedElement", function() { return HTMLEmbedElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFieldSetElement", function() { return HTMLFieldSetElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFontElement", function() { return HTMLFontElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFormControlsCollection", function() { return HTMLFormControlsCollection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFormElement", function() { return HTMLFormElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFrameElement", function() { return HTMLFrameElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLFrameSetElement", function() { return HTMLFrameSetElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHRElement", function() { return HTMLHRElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHeadElement", function() { return HTMLHeadElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHeadingElement", function() { return HTMLHeadingElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHtmlElement", function() { return HTMLHtmlElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLIFrameElement", function() { return HTMLIFrameElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLImageElement", function() { return HTMLImageElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLInputElement", function() { return HTMLInputElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLIElement", function() { return HTMLLIElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLabelElement", function() { return HTMLLabelElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLegendElement", function() { return HTMLLegendElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLLinkElement", function() { return HTMLLinkElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMainElement", function() { return HTMLMainElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMapElement", function() { return HTMLMapElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMarqueeElement", function() { return HTMLMarqueeElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMediaElement", function() { return HTMLMediaElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMenuElement", function() { return HTMLMenuElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMetaElement", function() { return HTMLMetaElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMeterElement", function() { return HTMLMeterElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLModElement", function() { return HTMLModElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOListElement", function() { return HTMLOListElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLObjectElement", function() { return HTMLObjectElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOptGroupElement", function() { return HTMLOptGroupElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOptionElement", function() { return HTMLOptionElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOptionsCollection", function() { return HTMLOptionsCollection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOutputElement", function() { return HTMLOutputElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLParagraphElement", function() { return HTMLParagraphElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLParamElement", function() { return HTMLParamElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLPictureElement", function() { return HTMLPictureElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLPreElement", function() { return HTMLPreElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLProgressElement", function() { return HTMLProgressElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLQuoteElement", function() { return HTMLQuoteElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLScriptElement", function() { return HTMLScriptElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSelectElement", function() { return HTMLSelectElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSourceElement", function() { return HTMLSourceElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSpanElement", function() { return HTMLSpanElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLStyleElement", function() { return HTMLStyleElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLSummaryElement", function() { return HTMLSummaryElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableCaptionElement", function() { return HTMLTableCaptionElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableCellElement", function() { return HTMLTableCellElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableColElement", function() { return HTMLTableColElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableDataCellElement", function() { return HTMLTableDataCellElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableElement", function() { return HTMLTableElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableHeaderCellElement", function() { return HTMLTableHeaderCellElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableRowElement", function() { return HTMLTableRowElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTableSectionElement", function() { return HTMLTableSectionElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTemplateElement", function() { return HTMLTemplateElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTextAreaElement", function() { return HTMLTextAreaElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTimeElement", function() { return HTMLTimeElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTitleElement", function() { return HTMLTitleElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLTrackElement", function() { return HTMLTrackElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLUListElement", function() { return HTMLUListElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLUnknownElement", function() { return HTMLUnknownElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVideoElement", function() { return HTMLVideoElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLegendElement", function() { return HTMLegendElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashChangeEvent", function() { return HashChangeEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBCursor", function() { return IDBCursor$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBCursorWithValue", function() { return IDBCursorWithValue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBDatabase", function() { return IDBDatabase$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBFactory", function() { return IDBFactory$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBIndex", function() { return IDBIndex$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBKeyRange", function() { return IDBKeyRange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBObjectStore", function() { return IDBObjectStore$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBOpenDBRequest", function() { return IDBOpenDBRequest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBRequest", function() { return IDBRequest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBTransaction", function() { return IDBTransaction$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDBVersionChangeEvent", function() { return IDBVersionChangeEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IIRFilterNode", function() { return IIRFilterNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageData", function() { return ImageData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserver", function() { return IntersectionObserver$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverEntry", function() { return IntersectionObserverEntry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return KeyboardEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeningStateChangedEvent", function() { return ListeningStateChangedEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSAssertion", function() { return MSAssertion$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSBlobBuilder", function() { return MSBlobBuilder$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSCredentials", function() { return MSCredentials$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDCCEvent", function() { return MSDCCEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSDSHEvent", function() { return MSDSHEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOCredentialAssertion", function() { return MSFIDOCredentialAssertion$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOSignature", function() { return MSFIDOSignature$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFIDOSignatureAssertion", function() { return MSFIDOSignatureAssertion$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSGesture", function() { return MSGesture$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSGestureEvent", function() { return MSGestureEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSGraphicsTrust", function() { return MSGraphicsTrust$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSInputMethodContext", function() { return MSInputMethodContext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeyError", function() { return MSMediaKeyError$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeyMessageEvent", function() { return MSMediaKeyMessageEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeyNeededEvent", function() { return MSMediaKeyNeededEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeySession", function() { return MSMediaKeySession$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSMediaKeys", function() { return MSMediaKeys$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSPointerEvent", function() { return MSPointerEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSStream", function() { return MSStream$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSStreamReader", function() { return MSStreamReader$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDeviceInfo", function() { return MediaDeviceInfo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDevices", function() { return MediaDevices$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaElementAudioSourceNode", function() { return MediaElementAudioSourceNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaEncryptedEvent", function() { return MediaEncryptedEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaError", function() { return MediaError$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyMessageEvent", function() { return MediaKeyMessageEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySession", function() { return MediaKeySession$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeyStatusMap", function() { return MediaKeyStatusMap$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeySystemAccess", function() { return MediaKeySystemAccess$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaKeys", function() { return MediaKeys$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaList", function() { return MediaList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryList", function() { return MediaQueryList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSource", function() { return MediaSource$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStream", function() { return MediaStream$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamAudioSourceNode", function() { return MediaStreamAudioSourceNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamError", function() { return MediaStreamError$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamErrorEvent", function() { return MediaStreamErrorEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamEvent", function() { return MediaStreamEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrack", function() { return MediaStreamTrack$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamTrackEvent", function() { return MediaStreamTrackEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageChannel", function() { return MessageChannel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEvent", function() { return MessageEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePort", function() { return MessagePort$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeType", function() { return MimeType$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeTypeArray", function() { return MimeTypeArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationEvent", function() { return MutationEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserver", function() { return MutationObserver$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationRecord", function() { return MutationRecord$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedNodeMap", function() { return NamedNodeMap$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeFilter", function() { return NodeFilter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeIterator", function() { return NodeIterator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeList", function() { return NodeList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_element_index_uint", function() { return OES_element_index_uint$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_standard_derivatives", function() { return OES_standard_derivatives$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_float", function() { return OES_texture_float$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_float_linear", function() { return OES_texture_float_linear$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_half_float", function() { return OES_texture_half_float$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OES_texture_half_float_linear", function() { return OES_texture_half_float_linear$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineAudioCompletionEvent", function() { return OfflineAudioCompletionEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineAudioContext", function() { return OfflineAudioContext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OscillatorNode", function() { return OscillatorNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowEvent", function() { return OverflowEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTransitionEvent", function() { return PageTransitionEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PannerNode", function() { return PannerNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path2D", function() { return Path2D$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentAddress", function() { return PaymentAddress$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequest", function() { return PaymentRequest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequestUpdateEvent", function() { return PaymentRequestUpdateEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentResponse", function() { return PaymentResponse$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfWidgetExternal", function() { return PerfWidgetExternal$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Performance", function() { return Performance$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceEntry", function() { return PerformanceEntry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceMark", function() { return PerformanceMark$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceMeasure", function() { return PerformanceMeasure$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceNavigation", function() { return PerformanceNavigation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceNavigationTiming", function() { return PerformanceNavigationTiming$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceResourceTiming", function() { return PerformanceResourceTiming$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceTiming", function() { return PerformanceTiming$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicWave", function() { return PeriodicWave$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRequest", function() { return PermissionRequest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRequestedEvent", function() { return PermissionRequestedEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginArray", function() { return PluginArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEvent", function() { return PointerEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopStateEvent", function() { return PopStateEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionError", function() { return PositionError$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessingInstruction", function() { return ProcessingInstruction$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressEvent", function() { return ProgressEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushManager", function() { return PushManager$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubscription", function() { return PushSubscription$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSubscriptionOptions", function() { return PushSubscriptionOptions$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDTMFToneChangeEvent", function() { return RTCDTMFToneChangeEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsTransport", function() { return RTCDtlsTransport$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtlsTransportStateChangedEvent", function() { return RTCDtlsTransportStateChangedEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCDtmfSender", function() { return RTCDtmfSender$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidate", function() { return RTCIceCandidate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceCandidatePairChangedEvent", function() { return RTCIceCandidatePairChangedEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGatherer", function() { return RTCIceGatherer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceGathererEvent", function() { return RTCIceGathererEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransport", function() { return RTCIceTransport$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCIceTransportStateChangedEvent", function() { return RTCIceTransportStateChangedEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnection", function() { return RTCPeerConnection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCPeerConnectionIceEvent", function() { return RTCPeerConnectionIceEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpReceiver", function() { return RTCRtpReceiver$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCRtpSender", function() { return RTCRtpSender$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSessionDescription", function() { return RTCSessionDescription$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSrtpSdesTransport", function() { return RTCSrtpSdesTransport$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCSsrcConflictEvent", function() { return RTCSsrcConflictEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCStatsProvider", function() { return RTCStatsProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomSource", function() { return RandomSource$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableStream", function() { return ReadableStream$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableStreamReader", function() { return ReadableStreamReader$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAElement", function() { return SVGAElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAngle", function() { return SVGAngle$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedAngle", function() { return SVGAnimatedAngle$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedBoolean", function() { return SVGAnimatedBoolean$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedEnumeration", function() { return SVGAnimatedEnumeration$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedInteger", function() { return SVGAnimatedInteger$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedLength", function() { return SVGAnimatedLength$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedLengthList", function() { return SVGAnimatedLengthList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedNumber", function() { return SVGAnimatedNumber$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedNumberList", function() { return SVGAnimatedNumberList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedPreserveAspectRatio", function() { return SVGAnimatedPreserveAspectRatio$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedRect", function() { return SVGAnimatedRect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedString", function() { return SVGAnimatedString$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGAnimatedTransformList", function() { return SVGAnimatedTransformList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGCircleElement", function() { return SVGCircleElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGClipPathElement", function() { return SVGClipPathElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGComponentTransferFunctionElement", function() { return SVGComponentTransferFunctionElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGDefsElement", function() { return SVGDefsElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGDescElement", function() { return SVGDescElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElement", function() { return SVGElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElementInstance", function() { return SVGElementInstance$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElementInstanceList", function() { return SVGElementInstanceList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGEllipseElement", function() { return SVGEllipseElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEBlendElement", function() { return SVGFEBlendElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEColorMatrixElement", function() { return SVGFEColorMatrixElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEComponentTransferElement", function() { return SVGFEComponentTransferElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFECompositeElement", function() { return SVGFECompositeElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEConvolveMatrixElement", function() { return SVGFEConvolveMatrixElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEDiffuseLightingElement", function() { return SVGFEDiffuseLightingElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEDisplacementMapElement", function() { return SVGFEDisplacementMapElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEDistantLightElement", function() { return SVGFEDistantLightElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFloodElement", function() { return SVGFEFloodElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncAElement", function() { return SVGFEFuncAElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncBElement", function() { return SVGFEFuncBElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncGElement", function() { return SVGFEFuncGElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEFuncRElement", function() { return SVGFEFuncRElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEGaussianBlurElement", function() { return SVGFEGaussianBlurElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEImageElement", function() { return SVGFEImageElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEMergeElement", function() { return SVGFEMergeElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEMergeNodeElement", function() { return SVGFEMergeNodeElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEMorphologyElement", function() { return SVGFEMorphologyElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEOffsetElement", function() { return SVGFEOffsetElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFEPointLightElement", function() { return SVGFEPointLightElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFESpecularLightingElement", function() { return SVGFESpecularLightingElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFESpotLightElement", function() { return SVGFESpotLightElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFETileElement", function() { return SVGFETileElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFETurbulenceElement", function() { return SVGFETurbulenceElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFilterElement", function() { return SVGFilterElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGForeignObjectElement", function() { return SVGForeignObjectElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGElement", function() { return SVGGElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGradientElement", function() { return SVGGradientElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGraphicsElement", function() { return SVGGraphicsElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGImageElement", function() { return SVGImageElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLength", function() { return SVGLength$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLengthList", function() { return SVGLengthList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLineElement", function() { return SVGLineElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGLinearGradientElement", function() { return SVGLinearGradientElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMarkerElement", function() { return SVGMarkerElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMaskElement", function() { return SVGMaskElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMatrix", function() { return SVGMatrix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMetadataElement", function() { return SVGMetadataElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGNumber", function() { return SVGNumber$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGNumberList", function() { return SVGNumberList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathElement", function() { return SVGPathElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSeg", function() { return SVGPathSeg$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegArcAbs", function() { return SVGPathSegArcAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegArcRel", function() { return SVGPathSegArcRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegClosePath", function() { return SVGPathSegClosePath$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicAbs", function() { return SVGPathSegCurvetoCubicAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicRel", function() { return SVGPathSegCurvetoCubicRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicSmoothAbs", function() { return SVGPathSegCurvetoCubicSmoothAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoCubicSmoothRel", function() { return SVGPathSegCurvetoCubicSmoothRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticAbs", function() { return SVGPathSegCurvetoQuadraticAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticRel", function() { return SVGPathSegCurvetoQuadraticRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticSmoothAbs", function() { return SVGPathSegCurvetoQuadraticSmoothAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegCurvetoQuadraticSmoothRel", function() { return SVGPathSegCurvetoQuadraticSmoothRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoAbs", function() { return SVGPathSegLinetoAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoHorizontalAbs", function() { return SVGPathSegLinetoHorizontalAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoHorizontalRel", function() { return SVGPathSegLinetoHorizontalRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoRel", function() { return SVGPathSegLinetoRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoVerticalAbs", function() { return SVGPathSegLinetoVerticalAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegLinetoVerticalRel", function() { return SVGPathSegLinetoVerticalRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegList", function() { return SVGPathSegList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegMovetoAbs", function() { return SVGPathSegMovetoAbs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathSegMovetoRel", function() { return SVGPathSegMovetoRel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPatternElement", function() { return SVGPatternElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPoint", function() { return SVGPoint$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPointList", function() { return SVGPointList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPolygonElement", function() { return SVGPolygonElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPolylineElement", function() { return SVGPolylineElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPreserveAspectRatio", function() { return SVGPreserveAspectRatio$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRadialGradientElement", function() { return SVGRadialGradientElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRect", function() { return SVGRect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRectElement", function() { return SVGRectElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSVGElement", function() { return SVGSVGElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGScriptElement", function() { return SVGScriptElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStopElement", function() { return SVGStopElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStringList", function() { return SVGStringList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStylable", function() { return SVGStylable$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGStyleElement", function() { return SVGStyleElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSwitchElement", function() { return SVGSwitchElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGSymbolElement", function() { return SVGSymbolElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTSpanElement", function() { return SVGTSpanElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextContentElement", function() { return SVGTextContentElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextElement", function() { return SVGTextElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextPathElement", function() { return SVGTextPathElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTextPositioningElement", function() { return SVGTextPositioningElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTitleElement", function() { return SVGTitleElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTransform", function() { return SVGTransform$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTransformList", function() { return SVGTransformList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGUnitTypes", function() { return SVGUnitTypes$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGUseElement", function() { return SVGUseElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGViewElement", function() { return SVGViewElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGZoomAndPan", function() { return SVGZoomAndPan$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGZoomEvent", function() { return SVGZoomEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredential", function() { return ScopedCredential$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopedCredentialInfo", function() { return ScopedCredentialInfo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptProcessorNode", function() { return ScriptProcessorNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPolicyViolationEvent", function() { return SecurityPolicyViolationEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceUIFrameContext", function() { return ServiceUIFrameContext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorker", function() { return ServiceWorker$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerContainer", function() { return ServiceWorkerContainer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerMessageEvent", function() { return ServiceWorkerMessageEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerRegistration", function() { return ServiceWorkerRegistration$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceBuffer", function() { return SourceBuffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceBufferList", function() { return SourceBufferList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesis", function() { return SpeechSynthesis$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisEvent", function() { return SpeechSynthesisEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisUtterance", function() { return SpeechSynthesisUtterance$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesisVoice", function() { return SpeechSynthesisVoice$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StereoPannerNode", function() { return StereoPannerNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEvent", function() { return StorageEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleMedia", function() { return StyleMedia$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetList", function() { return StyleSheetList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtleCrypto", function() { return SubtleCrypto$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncManager", function() { return SyncManager$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoder", function() { return TextDecoder$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEncoder", function() { return TextEncoder$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEvent", function() { return TextEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMetrics", function() { return TextMetrics$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrack", function() { return TextTrack$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackCue", function() { return TextTrackCue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackCueList", function() { return TextTrackCueList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTrackList", function() { return TextTrackList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeRanges", function() { return TimeRanges$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchEvent", function() { return TouchEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchList", function() { return TouchList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEvent", function() { return TrackEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionEvent", function() { return TransitionEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeWalker", function() { return TreeWalker$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIEvent", function() { return UIEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplay", function() { return VRDisplay$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplayCapabilities", function() { return VRDisplayCapabilities$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRDisplayEvent", function() { return VRDisplayEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VREyeParameters", function() { return VREyeParameters$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRFieldOfView", function() { return VRFieldOfView$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRFrameData", function() { return VRFrameData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRPose", function() { return VRPose$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidityState", function() { return ValidityState$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlaybackQuality", function() { return VideoPlaybackQuality$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrack", function() { return VideoTrack$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTrackList", function() { return VideoTrackList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_compressed_texture_s3tc", function() { return WEBGL_compressed_texture_s3tc$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_debug_renderer_info", function() { return WEBGL_debug_renderer_info$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_depth_texture", function() { return WEBGL_depth_texture$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveShaperNode", function() { return WaveShaperNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthentication", function() { return WebAuthentication$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthnAssertion", function() { return WebAuthnAssertion$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLActiveInfo", function() { return WebGLActiveInfo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLBuffer", function() { return WebGLBuffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLContextEvent", function() { return WebGLContextEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLFramebuffer", function() { return WebGLFramebuffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLObject", function() { return WebGLObject$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLProgram", function() { return WebGLProgram$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderbuffer", function() { return WebGLRenderbuffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderingContext", function() { return WebGLRenderingContext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLShader", function() { return WebGLShader$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLShaderPrecisionFormat", function() { return WebGLShaderPrecisionFormat$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLTexture", function() { return WebGLTexture$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLUniformLocation", function() { return WebGLUniformLocation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitCSSMatrix", function() { return WebKitCSSMatrix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitDirectoryEntry", function() { return WebKitDirectoryEntry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitDirectoryReader", function() { return WebKitDirectoryReader$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitEntry", function() { return WebKitEntry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitFileEntry", function() { return WebKitFileEntry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitFileSystem", function() { return WebKitFileSystem$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebKitPoint", function() { return WebKitPoint$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocket", function() { return WebSocket$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelEvent", function() { return WheelEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return Window$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStream", function() { return WritableStream$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamDefaultController", function() { return WritableStreamDefaultController$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritableStreamDefaultWriter", function() { return WritableStreamDefaultWriter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLDocument", function() { return XMLDocument$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequest", function() { return XMLHttpRequest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestUpload", function() { return XMLHttpRequestUpload$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLSerializer", function() { return XMLSerializer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathEvaluator", function() { return XPathEvaluator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathExpression", function() { return XPathExpression$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathNSResolver", function() { return XPathNSResolver$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPathResult", function() { return XPathResult$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSLTProcessor", function() { return XSLTProcessor$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitRTCPeerConnection", function() { return webkitRTCPeerConnection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationCache", function() { return applicationCache$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientInformation", function() { return clientInformation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closed", function() { return closed$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crypto", function() { return crypto$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElements", function() { return customElements$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStatus", function() { return defaultStatus$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicePixelRatio", function() { return devicePixelRatio$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doNotTrack", function() { return doNotTrack$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "external", function() { return external$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameElement", function() { return frameElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frames", function() { return frames$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerHeight", function() { return innerHeight$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerWidth", function() { return innerWidth$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSecureContext", function() { return isSecureContext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationbar", function() { return locationbar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menubar", function() { return menubar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msContentScript", function() { return msContentScript$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msCredentials", function() { return msCredentials$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offscreenBuffering", function() { return offscreenBuffering$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onabort", function() { return onabort$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onafterprint", function() { return onafterprint$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onbeforeprint", function() { return onbeforeprint$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onbeforeunload", function() { return onbeforeunload$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onblur", function() { return onblur$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncanplay", function() { return oncanplay$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncanplaythrough", function() { return oncanplaythrough$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onchange", function() { return onchange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onclick", function() { return onclick$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncompassneedscalibration", function() { return oncompassneedscalibration$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncontextmenu", function() { return oncontextmenu$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondblclick", function() { return ondblclick$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondevicelight", function() { return ondevicelight$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondevicemotion", function() { return ondevicemotion$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondeviceorientation", function() { return ondeviceorientation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondrag", function() { return ondrag$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragend", function() { return ondragend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragenter", function() { return ondragenter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragleave", function() { return ondragleave$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragover", function() { return ondragover$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondragstart", function() { return ondragstart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondrop", function() { return ondrop$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ondurationchange", function() { return ondurationchange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onemptied", function() { return onemptied$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onended", function() { return onended$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onerror", function() { return onerror$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onfocus", function() { return onfocus$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onhashchange", function() { return onhashchange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oninput", function() { return oninput$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oninvalid", function() { return oninvalid$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onkeydown", function() { return onkeydown$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onkeypress", function() { return onkeypress$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onkeyup", function() { return onkeyup$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onload", function() { return onload$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onloadeddata", function() { return onloadeddata$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onloadedmetadata", function() { return onloadedmetadata$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onloadstart", function() { return onloadstart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmessage", function() { return onmessage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmousedown", function() { return onmousedown$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseenter", function() { return onmouseenter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseleave", function() { return onmouseleave$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmousemove", function() { return onmousemove$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseout", function() { return onmouseout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseover", function() { return onmouseover$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmouseup", function() { return onmouseup$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmousewheel", function() { return onmousewheel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturechange", function() { return onmsgesturechange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturedoubletap", function() { return onmsgesturedoubletap$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgestureend", function() { return onmsgestureend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturehold", function() { return onmsgesturehold$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturestart", function() { return onmsgesturestart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsgesturetap", function() { return onmsgesturetap$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmsinertiastart", function() { return onmsinertiastart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointercancel", function() { return onmspointercancel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerdown", function() { return onmspointerdown$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerenter", function() { return onmspointerenter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerleave", function() { return onmspointerleave$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointermove", function() { return onmspointermove$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerout", function() { return onmspointerout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerover", function() { return onmspointerover$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onmspointerup", function() { return onmspointerup$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffline", function() { return onoffline$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ononline", function() { return ononline$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onorientationchange", function() { return onorientationchange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpagehide", function() { return onpagehide$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpageshow", function() { return onpageshow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpause", function() { return onpause$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onplay", function() { return onplay$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onplaying", function() { return onplaying$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpopstate", function() { return onpopstate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onprogress", function() { return onprogress$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onratechange", function() { return onratechange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onreadystatechange", function() { return onreadystatechange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onreset", function() { return onreset$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onresize", function() { return onresize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onscroll", function() { return onscroll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onseeked", function() { return onseeked$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onseeking", function() { return onseeking$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onselect", function() { return onselect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onstalled", function() { return onstalled$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onstorage", function() { return onstorage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onsubmit", function() { return onsubmit$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onsuspend", function() { return onsuspend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontimeupdate", function() { return ontimeupdate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchcancel", function() { return ontouchcancel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchend", function() { return ontouchend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchmove", function() { return ontouchmove$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ontouchstart", function() { return ontouchstart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onunload", function() { return onunload$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvolumechange", function() { return onvolumechange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayactivate", function() { return onvrdisplayactivate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayblur", function() { return onvrdisplayblur$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayconnect", function() { return onvrdisplayconnect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaydeactivate", function() { return onvrdisplaydeactivate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaydisconnect", function() { return onvrdisplaydisconnect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplayfocus", function() { return onvrdisplayfocus$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaypointerrestricted", function() { return onvrdisplaypointerrestricted$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaypointerunrestricted", function() { return onvrdisplaypointerunrestricted$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onvrdisplaypresentchange", function() { return onvrdisplaypresentchange$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onwaiting", function() { return onwaiting$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opener", function() { return opener$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orientation", function() { return orientation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageXOffset", function() { return pageXOffset$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageYOffset", function() { return pageYOffset$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performance", function() { return performance$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personalbar", function() { return personalbar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen", function() { return screen$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenLeft", function() { return screenLeft$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenTop", function() { return screenTop$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenX", function() { return screenX$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenY", function() { return screenY$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollX", function() { return scrollX$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollY", function() { return scrollY$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbars", function() { return scrollbars$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speechSynthesis", function() { return speechSynthesis$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusbar", function() { return statusbar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMedia", function() { return styleMedia$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbar", function() { return toolbar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureEvents", function() { return captureEvents$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageBitmap", function() { return createImageBitmap$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departFocus", function() { return departFocus$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchedCSSRules", function() { return getMatchedCSSRules$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchMedia", function() { return matchMedia$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBy", function() { return moveBy$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTo", function() { return moveTo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msWriteProfilerMark", function() { return msWriteProfilerMark$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMessage", function() { return postMessage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prompt", function() { return prompt$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseEvents", function() { return releaseEvents$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeBy", function() { return resizeBy$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeTo", function() { return resizeTo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollBy", function() { return scrollBy$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitCancelAnimationFrame", function() { return webkitCancelAnimationFrame$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitConvertPointFromNodeToPage", function() { return webkitConvertPointFromNodeToPage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitConvertPointFromPageToNode", function() { return webkitConvertPointFromPageToNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webkitRequestAnimationFrame", function() { return webkitRequestAnimationFrame$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return dispatchEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInterval", function() { return clearInterval$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTimeout", function() { return clearTimeout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInterval", function() { return setInterval$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return setTimeout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorage", function() { return sessionStorage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorage", function() { return localStorage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return console$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointercancel", function() { return onpointercancel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerdown", function() { return onpointerdown$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerenter", function() { return onpointerenter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerleave", function() { return onpointerleave$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointermove", function() { return onpointermove$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerout", function() { return onpointerout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerover", function() { return onpointerover$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onpointerup", function() { return onpointerup$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onwheel", function() { return onwheel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexedDB", function() { return indexedDB$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atob", function() { return atob$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoa", function() { return btoa$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener$1; });
var ANGLE_instanced_arrays$1 = window['ANGLE_instanced_arrays'];
var AbortController$1 = window['AbortController'];
var AbortSignal$1 = window['AbortSignal'];
var AnalyserNode$1 = window['AnalyserNode'];
var Animation$1 = window['Animation'];
var AnimationEvent$1 = window['AnimationEvent'];
var AnimationPlaybackEvent$1 = window['AnimationPlaybackEvent'];
var ApplicationCache$1 = window['ApplicationCache'];
var Attr$1 = window['Attr'];
var AudioBuffer$1 = window['AudioBuffer'];
var AudioBufferSourceNode$1 = window['AudioBufferSourceNode'];
var AudioContext$1 = window['AudioContext'];
var AudioDestinationNode$1 = window['AudioDestinationNode'];
var AudioListener$1 = window['AudioListener'];
var AudioNode$1 = window['AudioNode'];
var AudioParam$1 = window['AudioParam'];
var AudioProcessingEvent$1 = window['AudioProcessingEvent'];
var AudioTrack$1 = window['AudioTrack'];
var AudioTrackList$1 = window['AudioTrackList'];
var BarProp$1 = window['BarProp'];
var BeforeUnloadEvent$1 = window['BeforeUnloadEvent'];
var BhxBrowser$1 = window['BhxBrowser'];
var BiquadFilterNode$1 = window['BiquadFilterNode'];
var Blob$1 = window['Blob'];
var BroadcastChannel$1 = window['BroadcastChannel'];
var ByteLengthQueuingStrategy$1 = window['ByteLengthQueuingStrategy'];
var CDATASection$1 = window['CDATASection'];
var CSS$1 = window['CSS'];
var CSSConditionRule$1 = window['CSSConditionRule'];
var CSSFontFaceRule$1 = window['CSSFontFaceRule'];
var CSSGroupingRule$1 = window['CSSGroupingRule'];
var CSSImportRule$1 = window['CSSImportRule'];
var CSSKeyframeRule$1 = window['CSSKeyframeRule'];
var CSSKeyframesRule$1 = window['CSSKeyframesRule'];
var CSSMediaRule$1 = window['CSSMediaRule'];
var CSSNamespaceRule$1 = window['CSSNamespaceRule'];
var CSSPageRule$1 = window['CSSPageRule'];
var CSSRule$1 = window['CSSRule'];
var CSSRuleList$1 = window['CSSRuleList'];
var CSSStyleDeclaration$1 = window['CSSStyleDeclaration'];
var CSSStyleRule$1 = window['CSSStyleRule'];
var CSSStyleSheet$1 = window['CSSStyleSheet'];
var CSSSupportsRule$1 = window['CSSSupportsRule'];
var Cache$1 = window['Cache'];
var CacheStorage$1 = window['CacheStorage'];
var CanvasGradient$1 = window['CanvasGradient'];
var CanvasPattern$1 = window['CanvasPattern'];
var CanvasRenderingContext2D$1 = window['CanvasRenderingContext2D'];
var ChannelMergerNode$1 = window['ChannelMergerNode'];
var ChannelSplitterNode$1 = window['ChannelSplitterNode'];
var CharacterData$1 = window['CharacterData'];
var ClientRect$1 = window['ClientRect'];
var ClientRectList$1 = window['ClientRectList'];
var ClipboardEvent$1 = window['ClipboardEvent'];
var CloseEvent$1 = window['CloseEvent'];
var Comment$1 = window['Comment'];
var CompositionEvent$1 = window['CompositionEvent'];
var Console$1 = window['Console'];
var ContentScriptGlobalScope$1 = window['ContentScriptGlobalScope'];
var ConvolverNode$1 = window['ConvolverNode'];
var Coordinates$1 = window['Coordinates'];
var CountQueuingStrategy$1 = window['CountQueuingStrategy'];
var Crypto$1 = window['Crypto'];
var CryptoKey$1 = window['CryptoKey'];
var CryptoKeyPair$1 = window['CryptoKeyPair'];
var CustomEvent$1 = window['CustomEvent'];
var DOMError$1 = window['DOMError'];
var DOMException$1 = window['DOMException'];
var DOMImplementation$1 = window['DOMImplementation'];
var DOMParser$1 = window['DOMParser'];
var DOMRect$1 = window['DOMRect'];
var DOMRectReadOnly$1 = window['DOMRectReadOnly'];
var DOMSettableTokenList$1 = window['DOMSettableTokenList'];
var DOMStringList$1 = window['DOMStringList'];
var DOMStringMap$1 = window['DOMStringMap'];
var DOMTokenList$1 = window['DOMTokenList'];
var DataCue$1 = window['DataCue'];
var DataTransfer$1 = window['DataTransfer'];
var DataTransferItem$1 = window['DataTransferItem'];
var DataTransferItemList$1 = window['DataTransferItemList'];
var DeferredPermissionRequest$1 = window['DeferredPermissionRequest'];
var DelayNode$1 = window['DelayNode'];
var DeviceAcceleration$1 = window['DeviceAcceleration'];
var DeviceLightEvent$1 = window['DeviceLightEvent'];
var DeviceMotionEvent$1 = window['DeviceMotionEvent'];
var DeviceOrientationEvent$1 = window['DeviceOrientationEvent'];
var DeviceRotationRate$1 = window['DeviceRotationRate'];
var Document$1 = window['Document'];
var DocumentFragment$1 = window['DocumentFragment'];
var DocumentType$1 = window['DocumentType'];
var DragEvent$1 = window['DragEvent'];
var DynamicsCompressorNode$1 = window['DynamicsCompressorNode'];
var EXT_texture_filter_anisotropic$1 = window['EXT_texture_filter_anisotropic'];
var Element$1 = window['Element'];
var ErrorEvent$1 = window['ErrorEvent'];
var Event$1 = window['Event'];
var EventSource$1 = window['EventSource'];
var EventTarget$1 = window['EventTarget'];
var ExtensionScriptApis$1 = window['ExtensionScriptApis'];
var External$1 = window['External'];
var File$1 = window['File'];
var FileList$1 = window['FileList'];
var FileReader$1 = window['FileReader'];
var FocusEvent$1 = window['FocusEvent'];
var FocusNavigationEvent$1 = window['FocusNavigationEvent'];
var FormData$1 = window['FormData'];
var GainNode$1 = window['GainNode'];
var Gamepad$1 = window['Gamepad'];
var GamepadButton$1 = window['GamepadButton'];
var GamepadEvent$1 = window['GamepadEvent'];
var GamepadHapticActuator$1 = window['GamepadHapticActuator'];
var GamepadPose$1 = window['GamepadPose'];
var Geolocation$1 = window['Geolocation'];
var HTMLAllCollection$1 = window['HTMLAllCollection'];
var HTMLAnchorElement$1 = window['HTMLAnchorElement'];
var HTMLAppletElement$1 = window['HTMLAppletElement'];
var HTMLAreaElement$1 = window['HTMLAreaElement'];
var HTMLAreasCollection$1 = window['HTMLAreasCollection'];
var HTMLAudioElement$1 = window['HTMLAudioElement'];
var HTMLBRElement$1 = window['HTMLBRElement'];
var HTMLBaseElement$1 = window['HTMLBaseElement'];
var HTMLBaseFontElement$1 = window['HTMLBaseFontElement'];
var HTMLBodyElement$1 = window['HTMLBodyElement'];
var HTMLButtonElement$1 = window['HTMLButtonElement'];
var HTMLCanvasElement$1 = window['HTMLCanvasElement'];
var HTMLCollection$1 = window['HTMLCollection'];
var HTMLDListElement$1 = window['HTMLDListElement'];
var HTMLDataElement$1 = window['HTMLDataElement'];
var HTMLDataListElement$1 = window['HTMLDataListElement'];
var HTMLDetailsElement$1 = window['HTMLDetailsElement'];
var HTMLDialogElement$1 = window['HTMLDialogElement'];
var HTMLDirectoryElement$1 = window['HTMLDirectoryElement'];
var HTMLDivElement$1 = window['HTMLDivElement'];
var HTMLDocument$1 = window['HTMLDocument'];
var HTMLElement$1 = window['HTMLElement'];
var HTMLEmbedElement$1 = window['HTMLEmbedElement'];
var HTMLFieldSetElement$1 = window['HTMLFieldSetElement'];
var HTMLFontElement$1 = window['HTMLFontElement'];
var HTMLFormControlsCollection$1 = window['HTMLFormControlsCollection'];
var HTMLFormElement$1 = window['HTMLFormElement'];
var HTMLFrameElement$1 = window['HTMLFrameElement'];
var HTMLFrameSetElement$1 = window['HTMLFrameSetElement'];
var HTMLHRElement$1 = window['HTMLHRElement'];
var HTMLHeadElement$1 = window['HTMLHeadElement'];
var HTMLHeadingElement$1 = window['HTMLHeadingElement'];
var HTMLHtmlElement$1 = window['HTMLHtmlElement'];
var HTMLIFrameElement$1 = window['HTMLIFrameElement'];
var HTMLImageElement$1 = window['HTMLImageElement'];
var HTMLInputElement$1 = window['HTMLInputElement'];
var HTMLLIElement$1 = window['HTMLLIElement'];
var HTMLLabelElement$1 = window['HTMLLabelElement'];
var HTMLLegendElement$1 = window['HTMLLegendElement'];
var HTMLLinkElement$1 = window['HTMLLinkElement'];
var HTMLMainElement$1 = window['HTMLMainElement'];
var HTMLMapElement$1 = window['HTMLMapElement'];
var HTMLMarqueeElement$1 = window['HTMLMarqueeElement'];
var HTMLMediaElement$1 = window['HTMLMediaElement'];
var HTMLMenuElement$1 = window['HTMLMenuElement'];
var HTMLMetaElement$1 = window['HTMLMetaElement'];
var HTMLMeterElement$1 = window['HTMLMeterElement'];
var HTMLModElement$1 = window['HTMLModElement'];
var HTMLOListElement$1 = window['HTMLOListElement'];
var HTMLObjectElement$1 = window['HTMLObjectElement'];
var HTMLOptGroupElement$1 = window['HTMLOptGroupElement'];
var HTMLOptionElement$1 = window['HTMLOptionElement'];
var HTMLOptionsCollection$1 = window['HTMLOptionsCollection'];
var HTMLOutputElement$1 = window['HTMLOutputElement'];
var HTMLParagraphElement$1 = window['HTMLParagraphElement'];
var HTMLParamElement$1 = window['HTMLParamElement'];
var HTMLPictureElement$1 = window['HTMLPictureElement'];
var HTMLPreElement$1 = window['HTMLPreElement'];
var HTMLProgressElement$1 = window['HTMLProgressElement'];
var HTMLQuoteElement$1 = window['HTMLQuoteElement'];
var HTMLScriptElement$1 = window['HTMLScriptElement'];
var HTMLSelectElement$1 = window['HTMLSelectElement'];
var HTMLSourceElement$1 = window['HTMLSourceElement'];
var HTMLSpanElement$1 = window['HTMLSpanElement'];
var HTMLStyleElement$1 = window['HTMLStyleElement'];
var HTMLSummaryElement$1 = window['HTMLSummaryElement'];
var HTMLTableCaptionElement$1 = window['HTMLTableCaptionElement'];
var HTMLTableCellElement$1 = window['HTMLTableCellElement'];
var HTMLTableColElement$1 = window['HTMLTableColElement'];
var HTMLTableDataCellElement$1 = window['HTMLTableDataCellElement'];
var HTMLTableElement$1 = window['HTMLTableElement'];
var HTMLTableHeaderCellElement$1 = window['HTMLTableHeaderCellElement'];
var HTMLTableRowElement$1 = window['HTMLTableRowElement'];
var HTMLTableSectionElement$1 = window['HTMLTableSectionElement'];
var HTMLTemplateElement$1 = window['HTMLTemplateElement'];
var HTMLTextAreaElement$1 = window['HTMLTextAreaElement'];
var HTMLTimeElement$1 = window['HTMLTimeElement'];
var HTMLTitleElement$1 = window['HTMLTitleElement'];
var HTMLTrackElement$1 = window['HTMLTrackElement'];
var HTMLUListElement$1 = window['HTMLUListElement'];
var HTMLUnknownElement$1 = window['HTMLUnknownElement'];
var HTMLVideoElement$1 = window['HTMLVideoElement'];
var HTMLegendElement$1 = window['HTMLegendElement'];
var HashChangeEvent$1 = window['HashChangeEvent'];
var Headers$1 = window['Headers'];
var History$1 = window['History'];
var IDBCursor$1 = window['IDBCursor'];
var IDBCursorWithValue$1 = window['IDBCursorWithValue'];
var IDBDatabase$1 = window['IDBDatabase'];
var IDBFactory$1 = window['IDBFactory'];
var IDBIndex$1 = window['IDBIndex'];
var IDBKeyRange$1 = window['IDBKeyRange'];
var IDBObjectStore$1 = window['IDBObjectStore'];
var IDBOpenDBRequest$1 = window['IDBOpenDBRequest'];
var IDBRequest$1 = window['IDBRequest'];
var IDBTransaction$1 = window['IDBTransaction'];
var IDBVersionChangeEvent$1 = window['IDBVersionChangeEvent'];
var IIRFilterNode$1 = window['IIRFilterNode'];
var ImageData$1 = window['ImageData'];
var IntersectionObserver$1 = window['IntersectionObserver'];
var IntersectionObserverEntry$1 = window['IntersectionObserverEntry'];
var KeyboardEvent$1 = window['KeyboardEvent'];
var ListeningStateChangedEvent$1 = window['ListeningStateChangedEvent'];
var Location$1 = window['Location'];
var MSAssertion$1 = window['MSAssertion'];
var MSBlobBuilder$1 = window['MSBlobBuilder'];
var MSCredentials$1 = window['MSCredentials'];
var MSDCCEvent$1 = window['MSDCCEvent'];
var MSDSHEvent$1 = window['MSDSHEvent'];
var MSFIDOCredentialAssertion$1 = window['MSFIDOCredentialAssertion'];
var MSFIDOSignature$1 = window['MSFIDOSignature'];
var MSFIDOSignatureAssertion$1 = window['MSFIDOSignatureAssertion'];
var MSGesture$1 = window['MSGesture'];
var MSGestureEvent$1 = window['MSGestureEvent'];
var MSGraphicsTrust$1 = window['MSGraphicsTrust'];
var MSInputMethodContext$1 = window['MSInputMethodContext'];
var MSMediaKeyError$1 = window['MSMediaKeyError'];
var MSMediaKeyMessageEvent$1 = window['MSMediaKeyMessageEvent'];
var MSMediaKeyNeededEvent$1 = window['MSMediaKeyNeededEvent'];
var MSMediaKeySession$1 = window['MSMediaKeySession'];
var MSMediaKeys$1 = window['MSMediaKeys'];
var MSPointerEvent$1 = window['MSPointerEvent'];
var MSStream$1 = window['MSStream'];
var MSStreamReader$1 = window['MSStreamReader'];
var MediaDeviceInfo$1 = window['MediaDeviceInfo'];
var MediaDevices$1 = window['MediaDevices'];
var MediaElementAudioSourceNode$1 = window['MediaElementAudioSourceNode'];
var MediaEncryptedEvent$1 = window['MediaEncryptedEvent'];
var MediaError$1 = window['MediaError'];
var MediaKeyMessageEvent$1 = window['MediaKeyMessageEvent'];
var MediaKeySession$1 = window['MediaKeySession'];
var MediaKeyStatusMap$1 = window['MediaKeyStatusMap'];
var MediaKeySystemAccess$1 = window['MediaKeySystemAccess'];
var MediaKeys$1 = window['MediaKeys'];
var MediaList$1 = window['MediaList'];
var MediaQueryList$1 = window['MediaQueryList'];
var MediaSource$1 = window['MediaSource'];
var MediaStream$1 = window['MediaStream'];
var MediaStreamAudioSourceNode$1 = window['MediaStreamAudioSourceNode'];
var MediaStreamError$1 = window['MediaStreamError'];
var MediaStreamErrorEvent$1 = window['MediaStreamErrorEvent'];
var MediaStreamEvent$1 = window['MediaStreamEvent'];
var MediaStreamTrack$1 = window['MediaStreamTrack'];
var MediaStreamTrackEvent$1 = window['MediaStreamTrackEvent'];
var MessageChannel$1 = window['MessageChannel'];
var MessageEvent$1 = window['MessageEvent'];
var MessagePort$1 = window['MessagePort'];
var MimeType$1 = window['MimeType'];
var MimeTypeArray$1 = window['MimeTypeArray'];
var MouseEvent$1 = window['MouseEvent'];
var MutationEvent$1 = window['MutationEvent'];
var MutationObserver$1 = window['MutationObserver'];
var MutationRecord$1 = window['MutationRecord'];
var NamedNodeMap$1 = window['NamedNodeMap'];
var Navigator$1 = window['Navigator'];
var Node$1 = window['Node'];
var NodeFilter$1 = window['NodeFilter'];
var NodeIterator$1 = window['NodeIterator'];
var NodeList$1 = window['NodeList'];
var Notification$1 = window['Notification'];
var OES_element_index_uint$1 = window['OES_element_index_uint'];
var OES_standard_derivatives$1 = window['OES_standard_derivatives'];
var OES_texture_float$1 = window['OES_texture_float'];
var OES_texture_float_linear$1 = window['OES_texture_float_linear'];
var OES_texture_half_float$1 = window['OES_texture_half_float'];
var OES_texture_half_float_linear$1 = window['OES_texture_half_float_linear'];
var OfflineAudioCompletionEvent$1 = window['OfflineAudioCompletionEvent'];
var OfflineAudioContext$1 = window['OfflineAudioContext'];
var OscillatorNode$1 = window['OscillatorNode'];
var OverflowEvent$1 = window['OverflowEvent'];
var PageTransitionEvent$1 = window['PageTransitionEvent'];
var PannerNode$1 = window['PannerNode'];
var Path2D$1 = window['Path2D'];
var PaymentAddress$1 = window['PaymentAddress'];
var PaymentRequest$1 = window['PaymentRequest'];
var PaymentRequestUpdateEvent$1 = window['PaymentRequestUpdateEvent'];
var PaymentResponse$1 = window['PaymentResponse'];
var PerfWidgetExternal$1 = window['PerfWidgetExternal'];
var Performance$1 = window['Performance'];
var PerformanceEntry$1 = window['PerformanceEntry'];
var PerformanceMark$1 = window['PerformanceMark'];
var PerformanceMeasure$1 = window['PerformanceMeasure'];
var PerformanceNavigation$1 = window['PerformanceNavigation'];
var PerformanceNavigationTiming$1 = window['PerformanceNavigationTiming'];
var PerformanceResourceTiming$1 = window['PerformanceResourceTiming'];
var PerformanceTiming$1 = window['PerformanceTiming'];
var PeriodicWave$1 = window['PeriodicWave'];
var PermissionRequest$1 = window['PermissionRequest'];
var PermissionRequestedEvent$1 = window['PermissionRequestedEvent'];
var Plugin$1 = window['Plugin'];
var PluginArray$1 = window['PluginArray'];
var PointerEvent$1 = window['PointerEvent'];
var PopStateEvent$1 = window['PopStateEvent'];
var Position$1 = window['Position'];
var PositionError$1 = window['PositionError'];
var ProcessingInstruction$1 = window['ProcessingInstruction'];
var ProgressEvent$1 = window['ProgressEvent'];
var PushManager$1 = window['PushManager'];
var PushSubscription$1 = window['PushSubscription'];
var PushSubscriptionOptions$1 = window['PushSubscriptionOptions'];
var RTCDTMFToneChangeEvent$1 = window['RTCDTMFToneChangeEvent'];
var RTCDtlsTransport$1 = window['RTCDtlsTransport'];
var RTCDtlsTransportStateChangedEvent$1 = window['RTCDtlsTransportStateChangedEvent'];
var RTCDtmfSender$1 = window['RTCDtmfSender'];
var RTCIceCandidate$1 = window['RTCIceCandidate'];
var RTCIceCandidatePairChangedEvent$1 = window['RTCIceCandidatePairChangedEvent'];
var RTCIceGatherer$1 = window['RTCIceGatherer'];
var RTCIceGathererEvent$1 = window['RTCIceGathererEvent'];
var RTCIceTransport$1 = window['RTCIceTransport'];
var RTCIceTransportStateChangedEvent$1 = window['RTCIceTransportStateChangedEvent'];
var RTCPeerConnection$1 = window['RTCPeerConnection'];
var RTCPeerConnectionIceEvent$1 = window['RTCPeerConnectionIceEvent'];
var RTCRtpReceiver$1 = window['RTCRtpReceiver'];
var RTCRtpSender$1 = window['RTCRtpSender'];
var RTCSessionDescription$1 = window['RTCSessionDescription'];
var RTCSrtpSdesTransport$1 = window['RTCSrtpSdesTransport'];
var RTCSsrcConflictEvent$1 = window['RTCSsrcConflictEvent'];
var RTCStatsProvider$1 = window['RTCStatsProvider'];
var RandomSource$1 = window['RandomSource'];
var Range$1 = window['Range'];
var ReadableStream$1 = window['ReadableStream'];
var ReadableStreamReader$1 = window['ReadableStreamReader'];
var Request$1 = window['Request'];
var Response$1 = window['Response'];
var SVGAElement$1 = window['SVGAElement'];
var SVGAngle$1 = window['SVGAngle'];
var SVGAnimatedAngle$1 = window['SVGAnimatedAngle'];
var SVGAnimatedBoolean$1 = window['SVGAnimatedBoolean'];
var SVGAnimatedEnumeration$1 = window['SVGAnimatedEnumeration'];
var SVGAnimatedInteger$1 = window['SVGAnimatedInteger'];
var SVGAnimatedLength$1 = window['SVGAnimatedLength'];
var SVGAnimatedLengthList$1 = window['SVGAnimatedLengthList'];
var SVGAnimatedNumber$1 = window['SVGAnimatedNumber'];
var SVGAnimatedNumberList$1 = window['SVGAnimatedNumberList'];
var SVGAnimatedPreserveAspectRatio$1 = window['SVGAnimatedPreserveAspectRatio'];
var SVGAnimatedRect$1 = window['SVGAnimatedRect'];
var SVGAnimatedString$1 = window['SVGAnimatedString'];
var SVGAnimatedTransformList$1 = window['SVGAnimatedTransformList'];
var SVGCircleElement$1 = window['SVGCircleElement'];
var SVGClipPathElement$1 = window['SVGClipPathElement'];
var SVGComponentTransferFunctionElement$1 = window['SVGComponentTransferFunctionElement'];
var SVGDefsElement$1 = window['SVGDefsElement'];
var SVGDescElement$1 = window['SVGDescElement'];
var SVGElement$1 = window['SVGElement'];
var SVGElementInstance$1 = window['SVGElementInstance'];
var SVGElementInstanceList$1 = window['SVGElementInstanceList'];
var SVGEllipseElement$1 = window['SVGEllipseElement'];
var SVGFEBlendElement$1 = window['SVGFEBlendElement'];
var SVGFEColorMatrixElement$1 = window['SVGFEColorMatrixElement'];
var SVGFEComponentTransferElement$1 = window['SVGFEComponentTransferElement'];
var SVGFECompositeElement$1 = window['SVGFECompositeElement'];
var SVGFEConvolveMatrixElement$1 = window['SVGFEConvolveMatrixElement'];
var SVGFEDiffuseLightingElement$1 = window['SVGFEDiffuseLightingElement'];
var SVGFEDisplacementMapElement$1 = window['SVGFEDisplacementMapElement'];
var SVGFEDistantLightElement$1 = window['SVGFEDistantLightElement'];
var SVGFEFloodElement$1 = window['SVGFEFloodElement'];
var SVGFEFuncAElement$1 = window['SVGFEFuncAElement'];
var SVGFEFuncBElement$1 = window['SVGFEFuncBElement'];
var SVGFEFuncGElement$1 = window['SVGFEFuncGElement'];
var SVGFEFuncRElement$1 = window['SVGFEFuncRElement'];
var SVGFEGaussianBlurElement$1 = window['SVGFEGaussianBlurElement'];
var SVGFEImageElement$1 = window['SVGFEImageElement'];
var SVGFEMergeElement$1 = window['SVGFEMergeElement'];
var SVGFEMergeNodeElement$1 = window['SVGFEMergeNodeElement'];
var SVGFEMorphologyElement$1 = window['SVGFEMorphologyElement'];
var SVGFEOffsetElement$1 = window['SVGFEOffsetElement'];
var SVGFEPointLightElement$1 = window['SVGFEPointLightElement'];
var SVGFESpecularLightingElement$1 = window['SVGFESpecularLightingElement'];
var SVGFESpotLightElement$1 = window['SVGFESpotLightElement'];
var SVGFETileElement$1 = window['SVGFETileElement'];
var SVGFETurbulenceElement$1 = window['SVGFETurbulenceElement'];
var SVGFilterElement$1 = window['SVGFilterElement'];
var SVGForeignObjectElement$1 = window['SVGForeignObjectElement'];
var SVGGElement$1 = window['SVGGElement'];
var SVGGradientElement$1 = window['SVGGradientElement'];
var SVGGraphicsElement$1 = window['SVGGraphicsElement'];
var SVGImageElement$1 = window['SVGImageElement'];
var SVGLength$1 = window['SVGLength'];
var SVGLengthList$1 = window['SVGLengthList'];
var SVGLineElement$1 = window['SVGLineElement'];
var SVGLinearGradientElement$1 = window['SVGLinearGradientElement'];
var SVGMarkerElement$1 = window['SVGMarkerElement'];
var SVGMaskElement$1 = window['SVGMaskElement'];
var SVGMatrix$1 = window['SVGMatrix'];
var SVGMetadataElement$1 = window['SVGMetadataElement'];
var SVGNumber$1 = window['SVGNumber'];
var SVGNumberList$1 = window['SVGNumberList'];
var SVGPathElement$1 = window['SVGPathElement'];
var SVGPathSeg$1 = window['SVGPathSeg'];
var SVGPathSegArcAbs$1 = window['SVGPathSegArcAbs'];
var SVGPathSegArcRel$1 = window['SVGPathSegArcRel'];
var SVGPathSegClosePath$1 = window['SVGPathSegClosePath'];
var SVGPathSegCurvetoCubicAbs$1 = window['SVGPathSegCurvetoCubicAbs'];
var SVGPathSegCurvetoCubicRel$1 = window['SVGPathSegCurvetoCubicRel'];
var SVGPathSegCurvetoCubicSmoothAbs$1 = window['SVGPathSegCurvetoCubicSmoothAbs'];
var SVGPathSegCurvetoCubicSmoothRel$1 = window['SVGPathSegCurvetoCubicSmoothRel'];
var SVGPathSegCurvetoQuadraticAbs$1 = window['SVGPathSegCurvetoQuadraticAbs'];
var SVGPathSegCurvetoQuadraticRel$1 = window['SVGPathSegCurvetoQuadraticRel'];
var SVGPathSegCurvetoQuadraticSmoothAbs$1 = window['SVGPathSegCurvetoQuadraticSmoothAbs'];
var SVGPathSegCurvetoQuadraticSmoothRel$1 = window['SVGPathSegCurvetoQuadraticSmoothRel'];
var SVGPathSegLinetoAbs$1 = window['SVGPathSegLinetoAbs'];
var SVGPathSegLinetoHorizontalAbs$1 = window['SVGPathSegLinetoHorizontalAbs'];
var SVGPathSegLinetoHorizontalRel$1 = window['SVGPathSegLinetoHorizontalRel'];
var SVGPathSegLinetoRel$1 = window['SVGPathSegLinetoRel'];
var SVGPathSegLinetoVerticalAbs$1 = window['SVGPathSegLinetoVerticalAbs'];
var SVGPathSegLinetoVerticalRel$1 = window['SVGPathSegLinetoVerticalRel'];
var SVGPathSegList$1 = window['SVGPathSegList'];
var SVGPathSegMovetoAbs$1 = window['SVGPathSegMovetoAbs'];
var SVGPathSegMovetoRel$1 = window['SVGPathSegMovetoRel'];
var SVGPatternElement$1 = window['SVGPatternElement'];
var SVGPoint$1 = window['SVGPoint'];
var SVGPointList$1 = window['SVGPointList'];
var SVGPolygonElement$1 = window['SVGPolygonElement'];
var SVGPolylineElement$1 = window['SVGPolylineElement'];
var SVGPreserveAspectRatio$1 = window['SVGPreserveAspectRatio'];
var SVGRadialGradientElement$1 = window['SVGRadialGradientElement'];
var SVGRect$1 = window['SVGRect'];
var SVGRectElement$1 = window['SVGRectElement'];
var SVGSVGElement$1 = window['SVGSVGElement'];
var SVGScriptElement$1 = window['SVGScriptElement'];
var SVGStopElement$1 = window['SVGStopElement'];
var SVGStringList$1 = window['SVGStringList'];
var SVGStylable$1 = window['SVGStylable'];
var SVGStyleElement$1 = window['SVGStyleElement'];
var SVGSwitchElement$1 = window['SVGSwitchElement'];
var SVGSymbolElement$1 = window['SVGSymbolElement'];
var SVGTSpanElement$1 = window['SVGTSpanElement'];
var SVGTextContentElement$1 = window['SVGTextContentElement'];
var SVGTextElement$1 = window['SVGTextElement'];
var SVGTextPathElement$1 = window['SVGTextPathElement'];
var SVGTextPositioningElement$1 = window['SVGTextPositioningElement'];
var SVGTitleElement$1 = window['SVGTitleElement'];
var SVGTransform$1 = window['SVGTransform'];
var SVGTransformList$1 = window['SVGTransformList'];
var SVGUnitTypes$1 = window['SVGUnitTypes'];
var SVGUseElement$1 = window['SVGUseElement'];
var SVGViewElement$1 = window['SVGViewElement'];
var SVGZoomAndPan$1 = window['SVGZoomAndPan'];
var SVGZoomEvent$1 = window['SVGZoomEvent'];
var ScopedCredential$1 = window['ScopedCredential'];
var ScopedCredentialInfo$1 = window['ScopedCredentialInfo'];
var Screen$1 = window['Screen'];
var ScriptProcessorNode$1 = window['ScriptProcessorNode'];
var SecurityPolicyViolationEvent$1 = window['SecurityPolicyViolationEvent'];
var Selection$1 = window['Selection'];
var ServiceUIFrameContext$1 = window['ServiceUIFrameContext'];
var ServiceWorker$1 = window['ServiceWorker'];
var ServiceWorkerContainer$1 = window['ServiceWorkerContainer'];
var ServiceWorkerMessageEvent$1 = window['ServiceWorkerMessageEvent'];
var ServiceWorkerRegistration$1 = window['ServiceWorkerRegistration'];
var SourceBuffer$1 = window['SourceBuffer'];
var SourceBufferList$1 = window['SourceBufferList'];
var SpeechSynthesis$1 = window['SpeechSynthesis'];
var SpeechSynthesisEvent$1 = window['SpeechSynthesisEvent'];
var SpeechSynthesisUtterance$1 = window['SpeechSynthesisUtterance'];
var SpeechSynthesisVoice$1 = window['SpeechSynthesisVoice'];
var StereoPannerNode$1 = window['StereoPannerNode'];
var Storage$1 = window['Storage'];
var StorageEvent$1 = window['StorageEvent'];
var StyleMedia$1 = window['StyleMedia'];
var StyleSheet$1 = window['StyleSheet'];
var StyleSheetList$1 = window['StyleSheetList'];
var SubtleCrypto$1 = window['SubtleCrypto'];
var SyncManager$1 = window['SyncManager'];
var Text$1 = window['Text'];
var TextDecoder$1 = window['TextDecoder'];
var TextEncoder$1 = window['TextEncoder'];
var TextEvent$1 = window['TextEvent'];
var TextMetrics$1 = window['TextMetrics'];
var TextTrack$1 = window['TextTrack'];
var TextTrackCue$1 = window['TextTrackCue'];
var TextTrackCueList$1 = window['TextTrackCueList'];
var TextTrackList$1 = window['TextTrackList'];
var TimeRanges$1 = window['TimeRanges'];
var Touch$1 = window['Touch'];
var TouchEvent$1 = window['TouchEvent'];
var TouchList$1 = window['TouchList'];
var TrackEvent$1 = window['TrackEvent'];
var TransitionEvent$1 = window['TransitionEvent'];
var TreeWalker$1 = window['TreeWalker'];
var UIEvent$1 = window['UIEvent'];
var URL$1 = window['URL'];
var URLSearchParams$1 = window['URLSearchParams'];
var VRDisplay$1 = window['VRDisplay'];
var VRDisplayCapabilities$1 = window['VRDisplayCapabilities'];
var VRDisplayEvent$1 = window['VRDisplayEvent'];
var VREyeParameters$1 = window['VREyeParameters'];
var VRFieldOfView$1 = window['VRFieldOfView'];
var VRFrameData$1 = window['VRFrameData'];
var VRPose$1 = window['VRPose'];
var ValidityState$1 = window['ValidityState'];
var VideoPlaybackQuality$1 = window['VideoPlaybackQuality'];
var VideoTrack$1 = window['VideoTrack'];
var VideoTrackList$1 = window['VideoTrackList'];
var WEBGL_compressed_texture_s3tc$1 = window['WEBGL_compressed_texture_s3tc'];
var WEBGL_debug_renderer_info$1 = window['WEBGL_debug_renderer_info'];
var WEBGL_depth_texture$1 = window['WEBGL_depth_texture'];
var WaveShaperNode$1 = window['WaveShaperNode'];
var WebAuthentication$1 = window['WebAuthentication'];
var WebAuthnAssertion$1 = window['WebAuthnAssertion'];
var WebGLActiveInfo$1 = window['WebGLActiveInfo'];
var WebGLBuffer$1 = window['WebGLBuffer'];
var WebGLContextEvent$1 = window['WebGLContextEvent'];
var WebGLFramebuffer$1 = window['WebGLFramebuffer'];
var WebGLObject$1 = window['WebGLObject'];
var WebGLProgram$1 = window['WebGLProgram'];
var WebGLRenderbuffer$1 = window['WebGLRenderbuffer'];
var WebGLRenderingContext$1 = window['WebGLRenderingContext'];
var WebGLShader$1 = window['WebGLShader'];
var WebGLShaderPrecisionFormat$1 = window['WebGLShaderPrecisionFormat'];
var WebGLTexture$1 = window['WebGLTexture'];
var WebGLUniformLocation$1 = window['WebGLUniformLocation'];
var WebKitCSSMatrix$1 = window['WebKitCSSMatrix'];
var WebKitDirectoryEntry$1 = window['WebKitDirectoryEntry'];
var WebKitDirectoryReader$1 = window['WebKitDirectoryReader'];
var WebKitEntry$1 = window['WebKitEntry'];
var WebKitFileEntry$1 = window['WebKitFileEntry'];
var WebKitFileSystem$1 = window['WebKitFileSystem'];
var WebKitPoint$1 = window['WebKitPoint'];
var WebSocket$1 = window['WebSocket'];
var WheelEvent$1 = window['WheelEvent'];
var Window$1 = window['Window'];
var Worker$1 = window['Worker'];
var WritableStream$1 = window['WritableStream'];
var WritableStreamDefaultController$1 = window['WritableStreamDefaultController'];
var WritableStreamDefaultWriter$1 = window['WritableStreamDefaultWriter'];
var XMLDocument$1 = window['XMLDocument'];
var XMLHttpRequest$1 = window['XMLHttpRequest'];
var XMLHttpRequestUpload$1 = window['XMLHttpRequestUpload'];
var XMLSerializer$1 = window['XMLSerializer'];
var XPathEvaluator$1 = window['XPathEvaluator'];
var XPathExpression$1 = window['XPathExpression'];
var XPathNSResolver$1 = window['XPathNSResolver'];
var XPathResult$1 = window['XPathResult'];
var XSLTProcessor$1 = window['XSLTProcessor'];
var webkitRTCPeerConnection$1 = window['webkitRTCPeerConnection'];
var Audio$1 = window['Audio'];
var Image$1 = window['Image'];
var Option$1 = window['Option'];
var applicationCache$1 = window['applicationCache'];
var caches$1 = window['caches'];
var clientInformation$1 = window['clientInformation'];
var closed$1 = window['closed'];
var crypto$1 = window['crypto'];
var customElements$1 = window['customElements'];
var defaultStatus$1 = window['defaultStatus'];
var devicePixelRatio$1 = window['devicePixelRatio'];
var doNotTrack$1 = window['doNotTrack'];
var document$1 = window['document'];
var event$1 = window['event'];
var external$1 = window['external'];
var frameElement$1 = window['frameElement'];
var frames$1 = window['frames'];
var history$1 = window['history'];
var innerHeight$1 = window['innerHeight'];
var innerWidth$1 = window['innerWidth'];
var isSecureContext$1 = window['isSecureContext'];
var length$1 = window['length'];
var location$1 = window['location'];
var locationbar$1 = window['locationbar'];
var menubar$1 = window['menubar'];
var msContentScript$1 = window['msContentScript'];
var msCredentials$1 = window['msCredentials'];
var name$1 = window['name'];
var navigator$1 = window['navigator'];
var offscreenBuffering$1 = window['offscreenBuffering'];
var onabort$1 = window['onabort'];
var onafterprint$1 = window['onafterprint'];
var onbeforeprint$1 = window['onbeforeprint'];
var onbeforeunload$1 = window['onbeforeunload'];
var onblur$1 = window['onblur'];
var oncanplay$1 = window['oncanplay'];
var oncanplaythrough$1 = window['oncanplaythrough'];
var onchange$1 = window['onchange'];
var onclick$1 = window['onclick'];
var oncompassneedscalibration$1 = window['oncompassneedscalibration'];
var oncontextmenu$1 = window['oncontextmenu'];
var ondblclick$1 = window['ondblclick'];
var ondevicelight$1 = window['ondevicelight'];
var ondevicemotion$1 = window['ondevicemotion'];
var ondeviceorientation$1 = window['ondeviceorientation'];
var ondrag$1 = window['ondrag'];
var ondragend$1 = window['ondragend'];
var ondragenter$1 = window['ondragenter'];
var ondragleave$1 = window['ondragleave'];
var ondragover$1 = window['ondragover'];
var ondragstart$1 = window['ondragstart'];
var ondrop$1 = window['ondrop'];
var ondurationchange$1 = window['ondurationchange'];
var onemptied$1 = window['onemptied'];
var onended$1 = window['onended'];
var onerror$1 = window['onerror'];
var onfocus$1 = window['onfocus'];
var onhashchange$1 = window['onhashchange'];
var oninput$1 = window['oninput'];
var oninvalid$1 = window['oninvalid'];
var onkeydown$1 = window['onkeydown'];
var onkeypress$1 = window['onkeypress'];
var onkeyup$1 = window['onkeyup'];
var onload$1 = window['onload'];
var onloadeddata$1 = window['onloadeddata'];
var onloadedmetadata$1 = window['onloadedmetadata'];
var onloadstart$1 = window['onloadstart'];
var onmessage$1 = window['onmessage'];
var onmousedown$1 = window['onmousedown'];
var onmouseenter$1 = window['onmouseenter'];
var onmouseleave$1 = window['onmouseleave'];
var onmousemove$1 = window['onmousemove'];
var onmouseout$1 = window['onmouseout'];
var onmouseover$1 = window['onmouseover'];
var onmouseup$1 = window['onmouseup'];
var onmousewheel$1 = window['onmousewheel'];
var onmsgesturechange$1 = window['onmsgesturechange'];
var onmsgesturedoubletap$1 = window['onmsgesturedoubletap'];
var onmsgestureend$1 = window['onmsgestureend'];
var onmsgesturehold$1 = window['onmsgesturehold'];
var onmsgesturestart$1 = window['onmsgesturestart'];
var onmsgesturetap$1 = window['onmsgesturetap'];
var onmsinertiastart$1 = window['onmsinertiastart'];
var onmspointercancel$1 = window['onmspointercancel'];
var onmspointerdown$1 = window['onmspointerdown'];
var onmspointerenter$1 = window['onmspointerenter'];
var onmspointerleave$1 = window['onmspointerleave'];
var onmspointermove$1 = window['onmspointermove'];
var onmspointerout$1 = window['onmspointerout'];
var onmspointerover$1 = window['onmspointerover'];
var onmspointerup$1 = window['onmspointerup'];
var onoffline$1 = window['onoffline'];
var ononline$1 = window['ononline'];
var onorientationchange$1 = window['onorientationchange'];
var onpagehide$1 = window['onpagehide'];
var onpageshow$1 = window['onpageshow'];
var onpause$1 = window['onpause'];
var onplay$1 = window['onplay'];
var onplaying$1 = window['onplaying'];
var onpopstate$1 = window['onpopstate'];
var onprogress$1 = window['onprogress'];
var onratechange$1 = window['onratechange'];
var onreadystatechange$1 = window['onreadystatechange'];
var onreset$1 = window['onreset'];
var onresize$1 = window['onresize'];
var onscroll$1 = window['onscroll'];
var onseeked$1 = window['onseeked'];
var onseeking$1 = window['onseeking'];
var onselect$1 = window['onselect'];
var onstalled$1 = window['onstalled'];
var onstorage$1 = window['onstorage'];
var onsubmit$1 = window['onsubmit'];
var onsuspend$1 = window['onsuspend'];
var ontimeupdate$1 = window['ontimeupdate'];
var ontouchcancel$1 = window['ontouchcancel'];
var ontouchend$1 = window['ontouchend'];
var ontouchmove$1 = window['ontouchmove'];
var ontouchstart$1 = window['ontouchstart'];
var onunload$1 = window['onunload'];
var onvolumechange$1 = window['onvolumechange'];
var onvrdisplayactivate$1 = window['onvrdisplayactivate'];
var onvrdisplayblur$1 = window['onvrdisplayblur'];
var onvrdisplayconnect$1 = window['onvrdisplayconnect'];
var onvrdisplaydeactivate$1 = window['onvrdisplaydeactivate'];
var onvrdisplaydisconnect$1 = window['onvrdisplaydisconnect'];
var onvrdisplayfocus$1 = window['onvrdisplayfocus'];
var onvrdisplaypointerrestricted$1 = window['onvrdisplaypointerrestricted'];
var onvrdisplaypointerunrestricted$1 = window['onvrdisplaypointerunrestricted'];
var onvrdisplaypresentchange$1 = window['onvrdisplaypresentchange'];
var onwaiting$1 = window['onwaiting'];
var opener$1 = window['opener'];
var orientation$1 = window['orientation'];
var outerHeight$1 = window['outerHeight'];
var outerWidth$1 = window['outerWidth'];
var pageXOffset$1 = window['pageXOffset'];
var pageYOffset$1 = window['pageYOffset'];
var parent$1 = window['parent'];
var performance$1 = window['performance'];
var personalbar$1 = window['personalbar'];
var screen$1 = window['screen'];
var screenLeft$1 = window['screenLeft'];
var screenTop$1 = window['screenTop'];
var screenX$1 = window['screenX'];
var screenY$1 = window['screenY'];
var scrollX$1 = window['scrollX'];
var scrollY$1 = window['scrollY'];
var scrollbars$1 = window['scrollbars'];
var self$1 = window['self'];
var speechSynthesis$1 = window['speechSynthesis'];
var status$1 = window['status'];
var statusbar$1 = window['statusbar'];
var styleMedia$1 = window['styleMedia'];
var toolbar$1 = window['toolbar'];
var top$1 = window['top'];
var window$1 = window['window'];
var alert$1 = window['alert'];
var blur$1 = window['blur'];
var cancelAnimationFrame$1 = window['cancelAnimationFrame'];
var captureEvents$1 = window['captureEvents'];
var close$1 = window['close'];
var confirm$1 = window['confirm'];
var createImageBitmap$1 = window['createImageBitmap'];
var departFocus$1 = window['departFocus'];
var focus$1 = window['focus'];
var getComputedStyle$1 = window['getComputedStyle'];
var getMatchedCSSRules$1 = window['getMatchedCSSRules'];
var getSelection$1 = window['getSelection'];
var matchMedia$1 = window['matchMedia'];
var moveBy$1 = window['moveBy'];
var moveTo$1 = window['moveTo'];
var msWriteProfilerMark$1 = window['msWriteProfilerMark'];
var open$1 = window['open'];
var postMessage$1 = window['postMessage'];
var print$1 = window['print'];
var prompt$1 = window['prompt'];
var releaseEvents$1 = window['releaseEvents'];
var requestAnimationFrame$1 = window['requestAnimationFrame'];
var resizeBy$1 = window['resizeBy'];
var resizeTo$1 = window['resizeTo'];
var scroll$1 = window['scroll'];
var scrollBy$1 = window['scrollBy'];
var scrollTo$1 = window['scrollTo'];
var stop$1 = window['stop'];
var webkitCancelAnimationFrame$1 = window['webkitCancelAnimationFrame'];
var webkitConvertPointFromNodeToPage$1 = window['webkitConvertPointFromNodeToPage'];
var webkitConvertPointFromPageToNode$1 = window['webkitConvertPointFromPageToNode'];
var webkitRequestAnimationFrame$1 = window['webkitRequestAnimationFrame'];
var toString$1 = window['toString'];
var dispatchEvent$1 = window['dispatchEvent'];
var clearInterval$1 = window['clearInterval'];
var clearTimeout$1 = window['clearTimeout'];
var setInterval$1 = window['setInterval'];
var setTimeout$1 = window['setTimeout'];
var clearImmediate$1 = window['clearImmediate'];
var setImmediate$1 = window['setImmediate'];
var sessionStorage$1 = window['sessionStorage'];
var localStorage$1 = window['localStorage'];
var console$1 = window['console'];
var onpointercancel$1 = window['onpointercancel'];
var onpointerdown$1 = window['onpointerdown'];
var onpointerenter$1 = window['onpointerenter'];
var onpointerleave$1 = window['onpointerleave'];
var onpointermove$1 = window['onpointermove'];
var onpointerout$1 = window['onpointerout'];
var onpointerover$1 = window['onpointerover'];
var onpointerup$1 = window['onpointerup'];
var onwheel$1 = window['onwheel'];
var indexedDB$1 = window['indexedDB'];
var atob$1 = window['atob'];
var btoa$1 = window['btoa'];
var fetch$1 = window['fetch'];
var addEventListener$1 = window['addEventListener'];
var removeEventListener$1 = window['removeEventListener'];




/***/ }),

/***/ "./src/demo/ts/Demo.ts":
/*!*****************************!*\
  !*** ./src/demo/ts/Demo.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_ts_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main/ts/Plugin */ "./src/main/ts/Plugin.ts");

Object(_main_ts_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"])();
tinymce.init({
    selector: 'textarea.tinymce',
    plugins: 'code tinymce-latex',
    toolbar: 'tinymce-latex',
    height: 800
});


/***/ }),

/***/ "./src/main/ts/Plugin.ts":
/*!*******************************!*\
  !*** ./src/main/ts/Plugin.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/dom-globals */ "./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");
/* harmony import */ var _spec_conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spec/conf */ "./src/main/ts/spec/conf.ts");
/* harmony import */ var _core_math_jax_holder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/math-jax-holder */ "./src/main/ts/core/math-jax-holder.ts");



/* harmony default export */ __webpack_exports__["default"] = (function () {
    tinymce.PluginManager.add('tinymce-latex', setup);
});
/**
 * 插件核心配置
 */
var conf = new _spec_conf__WEBPACK_IMPORTED_MODULE_1__["Conf"]('LaTex', 'Latex 公式录入', 'latex', 'data-latex', '\\\(', '\\\)', 'math-tex');
/**
 * 插件核心功能
 */
var setup = function (editor) {
    /**
     * 注册 Latex 按钮
     */
    editor.ui.registry.addButton('tinymce-latex', {
        text: conf.name,
        onSetup: function () {
            conf.renderId = editor.dom.uniqueId();
        },
        onAction: function () {
            onActionHandler(null);
        }
    });
    /**
     * 监听元素点击事件
     */
    editor.on('click', function (e) {
        var container = e.target.closest(conf.selector);
        if (container) {
            onActionHandler(container);
        }
    });
    /**
     * latex 插件的按钮点击响应方法
     * @param target 当前编辑的目标元素
     */
    var onActionHandler = function (target) {
        var latex = '';
        var container;
        if (target) {
            latex = target.getAttribute(conf.latexId);
        }
        /** 打开公式会话窗口 */
        openLatexDialog(latex, function (api) {
            /** 获取公式并渲染 */
            var value = getLatexValue(api);
            renderLatexInNewDocument(container.contentDocument, value);
        }, function (api) {
            /** 提交公式 */
            var value = getLatexValue(api);
            if (target) {
                normalizeElNode(target, value);
                renderInTinyMCEDocument();
            }
            else {
                var element = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('span');
                normalizeElNode(element, value);
                editor.insertContent(element.outerHTML);
            }
            api.close();
        });
        /** 获取容器并渲染 */
        container = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(conf.renderId);
        renderLatexInNewDocument(container.contentDocument, latex);
    };
    /**
     * 标准化元素节点
     * @param el    元素节点
     * @param latex 公式
     */
    var normalizeElNode = function (el, latex) {
        el.innerHTML = latex;
        el.setAttribute(conf.latexId, latex);
        el.setAttribute('contenteditable', 'false');
        el.classList.add(conf.clazz);
        el.style.cursor = 'pointer';
        el.style.display = 'inline-block';
        el.style.marginLeft = '5px';
        el.style.marginRight = '5px';
    };
    /**
     * 打开公式录入框
     * @param latex           latex 公式
     * @param onChangeHandler 公式变动处理器
     * @param onSubmitHandler 公式提交处理器
     */
    var openLatexDialog = function (latex, onChangeHandler, onSubmitHandler) {
        /** 配置初始化数据 */
        var initial = {};
        initial[conf.textarea] = latex;
        /** 点击时，弹出选择页面 */
        editor.windowManager.open({
            title: conf.title,
            body: {
                type: 'panel',
                items: [{
                        type: 'textarea',
                        name: 'latex'
                    }, {
                        type: 'htmlpanel',
                        name: 'render',
                        html: "<iframe id=\"" + conf.renderId + "\" style=\"width: 100%;\"></iframe>"
                    }]
            },
            buttons: [{
                    type: 'submit',
                    text: '保存'
                }],
            size: 'large',
            onChange: onChangeHandler,
            onSubmit: onSubmitHandler,
            initialData: initial
        });
    };
    /**
     * 在新文档中渲染公式
     * @param doc   文档对象
     * @param latex 公式
     */
    var renderLatexInNewDocument = function (doc, latex) {
        renderLatexInHTMLElement(doc.body, latex);
    };
    /**
     * 渲染 TinyMCE 编辑器文档内公式
     */
    var renderInTinyMCEDocument = function () {
        /** 渲染公式 */
        var doc = editor.getDoc();
        var elements = doc.querySelectorAll(conf.selector);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            renderHTMLElement(element);
        }
    };
    /**
     * 重置 HTML 元素公式
     * @param el 元素
     */
    var resetHTMLElement = function (el) {
        var latex = el.getAttribute(conf.latexId);
        el.removeAttribute('style');
        el.removeAttribute('contenteditable');
        el.removeAttribute('data-mce-style');
        el.removeAttribute(conf.latexId);
        el.innerHTML = normalizeLatex(latex);
    };
    /**
     * 渲染 HTML 元素公式
     * @param el 元素
     */
    var renderHTMLElement = function (el) {
        renderLatexInHTMLElement(el, el.getAttribute(conf.latexId));
    };
    /**
     * 在 HTML 元素中渲染公式
     * @param el    元素
     * @param latex 公式
     */
    var renderLatexInHTMLElement = function (el, latex) {
        /** 获取公式渲染结果 */
        var mathJax = _core_math_jax_holder__WEBPACK_IMPORTED_MODULE_2__["MathJaxHolder"].getMathJax();
        var options = mathJax.getMetricsFor(el, true);
        var node = mathJax.tex2svg(latex, options);
        var result = node.querySelector('svg');
        /** 错误处理 */
        var error = node.querySelector('merror');
        if (error) {
            result = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('strong');
            result.style.color = '#dc3545';
            result.innerHTML = '当前公式格式有误: ' + error.innerHTML;
        }
        /** 追加 */
        el.innerHTML = '';
        el.appendChild(result);
    };
    editor.on('GetContent', function (e) {
        /** 重置元素，公式 latex 化 */
        var doc = editor.getDoc();
        var div = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        div.innerHTML = doc.body.innerHTML;
        var elements = div.querySelectorAll(conf.selector);
        // @ts-ignore
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var el = elements_2[_i];
            resetHTMLElement(el);
        }
        e.content = div.innerHTML;
    });
    /** 监听 before-set-content 事件 */
    editor.on('BeforeSetContent', function (e) {
        /** 公式去 latex 化 */
        var div = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        div.innerHTML = e.content;
        var elements = div.querySelectorAll(conf.selector);
        // @ts-ignore
        for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
            var element = elements_3[_i];
            var latex = element.getAttribute(conf.latexId);
            if (!latex) {
                latex = unNormalizeLatex(element.innerHTML);
            }
            normalizeElNode(element, latex);
        }
        e.content = div.innerHTML;
    });
    /** 监听 set-content 事件 */
    editor.on('SetContent', function (e) {
        renderInTinyMCEDocument();
    });
    /**
     * 获取当前输入的公式值
     * @param api 接口对象
     */
    var getLatexValue = function (api) {
        var data = api.getData();
        return data[conf.textarea].trim();
    };
    /**
     * 将公式变更为规范化格式
     * @param latex 公式
     */
    var normalizeLatex = function (latex) {
        return "" + conf.prefix + latex + conf.suffix;
    };
    /**
     * 将公式去 latex 化
     * @param latex 去规范化
     */
    var unNormalizeLatex = function (latex) {
        if (latex.length >= (conf.prefixLength + conf.suffixLength)) {
            return latex.substr(conf.prefixLength, latex.length - (conf.prefixLength + conf.suffixLength));
        }
    };
};


/***/ }),

/***/ "./src/main/ts/core/math-jax-holder.ts":
/*!*********************************************!*\
  !*** ./src/main/ts/core/math-jax-holder.ts ***!
  \*********************************************/
/*! exports provided: MathJaxHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathJaxHolder", function() { return MathJaxHolder; });
/* harmony import */ var _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ephox/dom-globals */ "./node_modules/@ephox/dom-globals/lib/main/ts/ephox/dom-globals/api/Main.js");

/**
 * MathJax 对象持有者
 */
var MathJaxHolder = /** @class */ (function () {
    function MathJaxHolder() {
    }
    MathJaxHolder.getMathJax = function () {
        if (this.ready) {
            return this.mathJax;
        }
        // @ts-ignore
        if (!_ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["window"].MathJax) {
            return;
        }
        // @ts-ignore
        this.mathJax = _ephox_dom_globals__WEBPACK_IMPORTED_MODULE_0__["window"].MathJax;
        this.ready = true;
        return this.mathJax;
    };
    return MathJaxHolder;
}());



/***/ }),

/***/ "./src/main/ts/spec/conf.ts":
/*!**********************************!*\
  !*** ./src/main/ts/spec/conf.ts ***!
  \**********************************/
/*! exports provided: Conf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conf", function() { return Conf; });
/**
 * 全局配置
 */
var Conf = /** @class */ (function () {
    function Conf(name, title, textarea, latexId, prefix, suffix, clazz) {
        this.name = name;
        this.title = title;
        this.textarea = textarea;
        this.latexId = latexId;
        this.prefix = prefix;
        this.suffix = suffix;
        this.prefixLength = this.prefix.length;
        this.suffixLength = this.prefix.length;
        this.clazz = clazz;
        this.selector = "." + this.clazz;
    }
    return Conf;
}());



/***/ })

/******/ });
//# sourceMappingURL=demo.js.map
window.__HOST = "http://" + location.host,
    window.shareData = {
        title: "运动届表情帝花落谁家！",
        desc: "祝福有多深，我的表情就有多逼真！",
        imgUrl: __HOST + "/img/share_icon.jpg",
        link: __HOST + ""
    },
    function (window, undefined) {
        var isWeixin = function () {
                return this.__isWeiXin == undefined ? this.__isWeiXin = /MicroMessenger/i.test(navigator.userAgent) : this.__isWeiXin
            },
            getParameter = function (e) {
                var o = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                    n = window.location.search.substr(1).match(o);
                return null != n ? n[2] : null
            },
            _extend = function (e, o) {
                o = o || {};
                for (var n in o) e.hasOwnProperty(n) && (e[n] = o[n]);
                return e
            },
            showQrcode = function (text, x, y, w, h) {
                var canvas = document.querySelector(".egret-player").querySelector("canvas"),
                    qrcode = document.createElement("div"),
                    ratio = parseFloat(canvas.style.width) / canvas.width,
                    bound = canvas.getBoundingClientRect();
                with (qrcode) style.position = "absolute",
                    style.left = x * ratio + (bound.left || 0) + "px",
                    style.top = y * ratio + (bound.top || 0) + "px",
                    style.zIndex = 3e3;
                return $(qrcode).qrcode({
                    width: w * ratio,
                    height: h * ratio,
                    text: text,
                    render: "table"
                }),
                    document.body.appendChild(qrcode),
                    document.body.addEventListener("touchmove",
                        function (e) {
                            e.preventDefault()
                        },
                        !1),
                    {
                        hide: function () {
                            qrcode.parentNode.removeChild(qrcode)
                        },
                        show: function (e) {
                            qrcode.style.opacity = e
                        }
                    }
            },
            showPic = function (src, x, y, w, h) {
                var canvas = document.querySelector(".egret-player").querySelector("canvas"),
                    qrcode = document.createElement("div"),
                    ratio = parseFloat(canvas.style.width) / canvas.width,
                    bound = canvas.getBoundingClientRect();
                with (qrcode) style.position = "absolute",
                    style.left = x * ratio + (bound.left || 0) + "px",
                    style.top = y * ratio + (bound.top || 0) + "px",
                    style.width = w * ratio + "px",
                    style.height = h * ratio + "px",
                    style.zIndex = 3e3;
                return qrcode.innerHTML = '<img src="' + src + '" style="width:100%; height:auto; transition: opacity 3s; -webkit-transition: opacity 3s;" />',
                    document.body.appendChild(qrcode),
                    document.body.addEventListener("touchmove",
                        function (e) {
                            e.preventDefault()
                        },
                        !1),
                    {
                        hide: function () {
                            qrcode.parentNode.removeChild(qrcode)
                        },
                        show: function (e) {
                            qrcode.style.opacity = e
                        }
                    }
            },
            showTxt = function (src, x, y, w, h, c, f) {
                var canvas = document.querySelector(".egret-player").querySelector("canvas"),
                    qrcode = document.createElement("div"),
                    ratio = parseFloat(canvas.style.width) / canvas.width,
                    bound = canvas.getBoundingClientRect();
                with (qrcode) style.position = "absolute",
                    style.textAlign = "center",
                    style.width = w * ratio + "px",
                    style.height = h * ratio + "px",
                    style.left = x * ratio + (bound.left || 0) + bound.width / 2 - w * ratio / 2 + "px",
                    style.top = y * ratio + (bound.top || 0) + "px",
                    style.color = c,
                    style.fontWeight = f,
                    style.zIndex = 3e3,
                    console.log(bound);
                return qrcode.innerHTML = '<p style=" font-size:14px; line-height:20px; transition: opacity 3s; -webkit-transition: opacity 3s;" >' + src + "</p>",
                    document.body.appendChild(qrcode),
                    console.log(qrcode),
                    {
                        hide: function () {
                            qrcode.parentNode.removeChild(qrcode)
                        },
                        show: function (e) {
                            qrcode.style.opacity = e
                        }
                    }
            },
            loadScript = function (e, o, n) {
                var t = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                i.type = "text/javascript",
                    i.charset = "utf-8",
                    i.src = e,
                    i.onload = i.onreadystatechange = function () {
                        i.onload = i.onreadystatechange = new Function,
                        this.readyState && !/loaded|complete/.test(this.readyState) || (i.parentNode.removeChild(i), "function" == typeof o && o(i))
                    },
                    i.onerror = function () {
                        i.onerror = new Function,
                        "function" == typeof n && n(null, "404")
                    },
                    t.insertBefore(i, t.firstChild)
            },
            loadJsonp = function (e, o, n) {
                var t = /callback=([^&]+)/.exec(e);
                t && (t = t[1], "?" == t && (t = "jsonp" + (new Date).getTime() + Math.floor(1e8 * Math.random()), e = e.replace("callback=?", "callback=" + t)), window[t] = function (e) {
                    o(e),
                        delete window[t]
                },
                    loadScript(e, null, n))
            },
            Request = function () {
                var e = function (e, o, n, t, i, a) {
                    var s = new XMLHttpRequest;
                    s.onload = function () {
                        s.onload = new Function,
                            s.status >= 200 && s.status < 300 || 304 == s.status ? t && t(s.responseText) : i && i(s, s.status)
                    };
                    var r, e = e.toUpperCase();
                    if (a = a == undefined || a, "object" == typeof n) {
                        r = [];
                        for (var c in n) r.push(c + "=" + n[c]);
                        r = r.join("&")
                    } else "string" == typeof n && (r = n);
                    "GET" == e && r && (o += o.indexOf("?") > 0 ? "&" + r : "?" + r),
                        s.open(e, o, a),
                        s.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    "POST" == e && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
                        s.send("GET" == e ? null : r)
                };
                return {
                    get: function (o, n, t, i, a) {
                        e("GET", o, n, t, i, a)
                    },
                    post: function (o, n, t, i, a) {
                        e("POST", o, n, t, i, a)
                    }
                }
            }();
        window.__config = window.__config || {},
            window.WXApi = function () {
                var setOption = function (e, o, n) {
                        var t = {
                            title: "",
                            desc: "",
                            link: "",
                            imgUrl: "",
                            type: "",
                            dataUrl: "",
                            success: function () {
                            },
                            cancel: function () {
                            }
                        };
                        return _extend(t, e),
                        o && (t.success = o),
                        n && (t.cancel = n),
                            t
                    },
                    shareToTimeline = function () {
                        option = setOption.apply(null, arguments),
                            wx.onMenuShareTimeline(option)
                    },
                    sendToFriend = function () {
                        option = setOption.apply(null, arguments),
                            wx.onMenuShareAppMessage(option)
                    },
                    shareToQQ = function () {
                        option = setOption.apply(null, arguments),
                            wx.onMenuShareQQ(option)
                    },
                    shareToWeibo = function () {
                        option = setOption.apply(null, arguments),
                            wx.onMenuShareWeibo(option)
                    },
                    getNetWork = function (e) {
                        wx.getNetworkType({
                            success: function (o) {
                                var n = o.networkType;
                                e && e(n)
                            }
                        })
                    },
                    scanQRCode = function (e) {
                        wx.closeWindow(),
                            wx.scanQRCode({
                                desc: "scanQRCode desc",
                                needResult: 0,
                                scanType: ["qrCode", "barCode"],
                                success: function (o) {
                                    var n = o.resultStr;
                                    e && e(n)
                                }
                            })
                    },
                    getLocation = function (e) {
                        wx.getLocation({
                            success: function (o) {
                                e && e(o)
                            }
                        })
                    },
                    openLocation = function (e) {
                        wx.openLocation(_extend({
                                latitude: 0,
                                longitude: 0,
                                name: "",
                                address: "",
                                scale: 1,
                                infoUrl: ""
                            },
                            e))
                    },
                    jsApiList = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
                    checkJsApi = function (e, o) {
                        wx.checkJsApi({
                            jsApiList: e,
                            success: function (e) {
                                o && o(e)
                            }
                        })
                    },
                    config = function (e) {
                        e.jsApiList == undefined && (e.jsApiList = jsApiList),
                            wx.config(e)
                    },
                    setConfig = function (proxy) {
                        var isJsonp = !1;
                        proxy.indexOf("callback=") > -1 && (isJsonp = !0),
                        proxy.indexOf("url=") == -1 && (proxy += proxy.indexOf("?") == -1 ? "?url=" : "&url="),
                            proxy += encodeURIComponent(location.href.split("#")[0]);
                        var doSuc = function (res) {
                                res = eval(res),
                                    res = eval("(" + res + ")"),
                                    config(res)
                            },
                            doErr = function (e, o) {
                                console.error("WeiXin config get fail:" + o)
                            };
                        isJsonp ? loadJsonp(proxy, doSuc, doErr) : Request.get(proxy, {},
                                doSuc, doErr)
                    },
                    __readyFuns = [],
                    __errorFuns = [];
                return {
                    ready: function (e) {
                        __readyFuns.push(e)
                    },
                    bindReady: function () {
                        var e = function () {
                            for (var e = 0; e < __readyFuns.length; e++) __readyFuns[e].apply(wx, arguments)
                        };
                        isWeixin() ? wx.ready(e) : document.addEventListener("DOMContentLoaded", e, !1)
                    },
                    error: function (e) {
                        __errorFuns.push(e)
                    },
                    bindError: function () {
                        var e = function () {
                            for (var e = 0; e < __errorFuns.length; e++) __errorFuns[e].apply(wx, arguments)
                        };
                        wx.error(e)
                    },
                    checkJsApi: checkJsApi,
                    shareToTimeline: shareToTimeline,
                    sendToFriend: sendToFriend,
                    shareToQQ: shareToQQ,
                    shareToWeibo: shareToWeibo,
                    getNetWork: getNetWork,
                    scanQRCode: scanQRCode,
                    getLocation: getLocation,
                    openLocation: openLocation,
                    hideOptionMenu: function () {
                        wx.hideOptionMenu.apply(wx, arguments)
                    },
                    showOptionMenu: function () {
                        wx.showOptionMenu.apply(wx, arguments)
                    },
                    closeWindow: function () {
                        wx.closeWindow.apply(wx, arguments)
                    },
                    hideMenuItems: function () {
                        wx.hideMenuItems.apply(wx, arguments)
                    },
                    showMenuItems: function () {
                        wx.showMenuItems.apply(wx, arguments)
                    },
                    hideAllNonBaseMenuItem: function () {
                        wx.hideAllNonBaseMenuItem.apply(wx, arguments)
                    },
                    showAllNonBaseMenuItem: function () {
                        wx.showAllNonBaseMenuItem.apply(wx, arguments)
                    },
                    chooseImage: function (e) {
                        e = e ||
                            function () {
                            },
                            wx.chooseImage({
                                count: 1,
                                sizeType: ["original", "compressed"],
                                sourceType: ["album", "camera"],
                                success: function (o) {
                                    var n = o.localIds[0];
                                    e(n)
                                }
                            })
                    },
                    uploadImage: function (e, o) {
                        o = o ||
                            function () {
                            },
                            wx.uploadImage({
                                localId: e,
                                isShowProgressTips: 1,
                                success: function (e) {
                                    var n = e.serverId;
                                    o(n)
                                }
                            })
                    },
                    downloadImage: function (e, o) {
                        o = o ||
                            function () {
                            },
                            wx.downloadImage({
                                serverId: e,
                                isShowProgressTips: 1,
                                success: function (e) {
                                    var n = e.localId;
                                    o(n)
                                }
                            })
                    },
                    jsApiList: jsApiList,
                    config: config,
                    setConfig: setConfig,
                    isWeixin: isWeixin,
                    getParameter: getParameter,
                    request: Request,
                    loadJsonp: loadJsonp,
                    loadScript: loadScript,
                    showQrcode: showQrcode,
                    showPic: showPic,
                    showTxt: showTxt,
                    pushState: function () {
                        __config.pushState && window.shareData && shareData.link && window.history.pushState({},
                            window.shareData.title, window.shareData.link)
                    },
                    setDesc: function (e) {
                        "object" == typeof window.shareData && (window.shareData.desc = e)
                    },
                    setTitle: function (e) {
                        "object" == typeof window.shareData && (window.shareData.title = e)
                    },
                    deploy: function (e) {
                        e = e ||
                            function () {
                            },
                            WXApi.sendToFriend(window.shareData,
                                function () {
                                    e(1)
                                }),
                            WXApi.shareToTimeline(window.shareData,
                                function () {
                                    e(2)
                                }),
                            WXApi.shareToQQ(window.shareData,
                                function () {
                                    e(3)
                                }),
                            WXApi.shareToWeibo(window.shareData,
                                function () {
                                    e(4)
                                })
                    }
                }
            }(),
        __config.openId != undefined && null != __config.openId && "" != __config.openId || (__config.openId = WXApi.getParameter("openId"));
        var loadCallback = function () {
            WXApi.setConfig(__config.signProxy ? __config.signProxy : "http://multiscreen.trustingme.cn/sypro/service/getWeiXinCode/getwxjsConfig"),
                WXApi.ready(function () {
                    document.getElementById("music").play();
                    var e = null;
                    __config.recordShare && (e = function (e) {
                        Request.get(__config.recordShare, {
                            openId: __config.openId,
                            eventId: __config.eventId,
                            type: e
                        })
                    }),
                        WXApi.deploy(e),
                        setTimeout(WXApi.pushState, 800)
                }),
                WXApi.error(function (e) {
                }),
                WXApi.bindReady(),
                WXApi.bindError()
        };
        WXApi.isWeixin() && ("undefined" != typeof wx ? loadCallback() : loadScript("http://res.wx.qq.com/open/js/jweixin-1.0.0.js", loadCallback))
    }(this);
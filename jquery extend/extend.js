(function ($,document) {
    $(document).on("click",function(event){
        var modalLeft=$("#myModal-left");
        if(modalLeft.length>0 && $(event.target).parents(".modal-left").length<=0 && !$(event.target).hasClass("alert_bihu") && $(event.target).parents(".ycf-alert").length<=0  && $(event.target).attr("id")!="ycf-alert" && $(event.target).attr("id")!="ycf-confirm") {
            modalLeft.modal("hide");
            modalLeft.removeAttr("trIndex");
            $(".tr-bihu-active").removeClass("tr-bihu-active");
        }
    });
    $.extend({
        setCss: function ($obj, attr) {
            for (var i in attr) {
                var newI = i;
                if (newI.indexOf('-') > 0) {
                    var num = newI.indexOf('-');
                    newI = newI.replace(newI.substr(num, 2), newI.substr(num + 1, 1).toUpperCase())
                }
                $obj.css(newI, attr[i]);
                newI = newI.replace(newI.charAt(0), newI.charAt(0).toUpperCase());
                $obj.css("webkit" + newI, attr[i]);
                $obj.css("moz" + newI, attr[i]);
                $obj.css("ms" + newI, attr[i]);
                $obj.css("o" + newI, attr[i])
            }
            return $obj;//返回当前操作对象，方便链式操作。
        },
        animate_tad: [
            {
                animateName1:"fadeInLeft",
                animateName2:"fadeOutLeft"
            },
            {
                animateName1:"fadeInRight",
                animateName2:"fadeOutRight"
            },
            {
                animateName1:"fadeInUp",
                animateName2:"fadeOutUp"
            },
            {
                animateName1:"fadeInDown",
                animateName2:"fadeOutDown"
            },
            {
                animateName1:"fadeInLeftBig",
                animateName2:"fadeOutLeftBig"
            },
            {
                animateName1:"fadeInRightBig",
                animateName2:"fadeOutRightBig"
            },
            {
                animateName1:"fadeInUpBig",
                animateName2:"fadeOutUpBig"
            },
            {
                animateName1:"fadeInDownBig",
                animateName2:"fadeOutDownBig"
            },
            {
                animateName1:"bounceInLeft",
                animateName2:"bounceOutLeft"
            },
            {
                animateName1:"bounceInRight",
                animateName2:"bounceOutRight"
            },
            {
                animateName1:"bounceInUp",
                animateName2:"bounceOutUp"
            },
            {
                animateName1:"bounceInDown",
                animateName2:"bounceOutDown"
            },
            {
                animateName1:"bounceIn",
                animateName2:"bounceOut"
            },
            {
                animateName1:"rotateInDownLeft",
                animateName2:"rotateOutDownLeft"
            },
            {
                animateName1:"rotateInDownRight",
                animateName2:"rotateOutDownRight"
            },
            {
                animateName1:"rotateInUpLeft",
                animateName2:"rotateOutUpLeft"
            },
            {
                animateName1:"rotateInUpRight",
                animateName2:"rotateOutUpRight"
            },
            {
                animateName1:"lightSpeedIn",
                animateName2:"lightSpeedOut"
            },
            {
                animateName1:"wobble",
                animateName2:"lightSpeedOut"
            },
            {
                animateName1:"rollIn",
                animateName2:"rollOut"
            },
            {
                animateName1:"bounce",
                animateName2:"rollOut"
            },
            {
                animateName1:"shake",
                animateName2:"rollOut"
            },
            {
                animateName1:"tada",
                animateName2:"rollOut"
            },
            {
                animateName1:"swing",
                animateName2:"rollOut"
            },
            {
                animateName1:"rubberBand",
                animateName2:"rollOut"
            },
            {
                animateName1:"pulse",
                animateName2:"rollOut"
            }
        ],
        showDialog: function (obj) {
            var defaults = {
                init: function () {
                },//初始化
                className: "",//自定义class类
                content: "",//填充内容
                buttons: null,//显示按钮的名称
                width: 600,//窗体的宽
                height: "auto",//窗体的高
                hideHeader: false,//是否隐藏header
                headerTitle: "消息提示",//header 显示的提示内容标题
                animateIndex: 3,
                html: '<div id="myModal-bihu-showdialog" class="myModal modal modal-bihu-showDialog" data-easein="fadeInDown" data-easeout="fadeOutDown"  role="dialog" aria-labelledby="gridSystemModalLabel" style="z-index: 99999;">\
                <div class="modal-dialog show-dialog-margin-top10" role="document">\
                <div class="modal-content">\
                <div class="modal-header modal-header-hieght">\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
            <h4 class="modal-title" id="gridSystemModalLabel-bihushow">消息提示</h4>\
            </div>\
            <div class="modal-body">\
                <div class="container-fluid">\
                <form id="modal-form-bihu-showdialog" class="form-inline" role="form"></form>\
                </div>\
                </div>\
                <div class="modal-footer" id="modal-footer-bihu-showdialog">\
                </div>\
            </div>\
            </div>\
            </div>'
            };
            obj = $.extend(defaults, obj);
            if ($("#myModal-bihu-showdialog").length <= 0) {
                $("body").append(obj.html);
            }
            var data = {
                myModal: $("#myModal-bihu-showdialog"),
                modal_content: $("#myModal-bihu-showdialog").find(".modal-content"),
                btns: $("#myModal-bihu-showdialog").find("button[name='btn_tad_bihu']"),
                header: $("#myModal-bihu-showdialog").find(".modal-header"),
                gridSystemModalLabel: $("#gridSystemModalLabel-bihushow"),
                closeBtn: $("button[class='close']"),
                modalFooter: $("#modal-footer-bihu-showdialog"),
                modalDialog: $("#myModal-bihu-showdialog").find(".modal-dialog"),
                modalBody: $("#myModal-bihu-showdialog").find(".modal-body"),
                form: $("#modal-form-bihu-showdialog")
            };
            var initData = {
                setDefault: function () {
                    data.modalFooter.html("");
                    var that = this;

                    obj.hideHeader && data.header.hide();
                    !obj.buttons && data.modalFooter.hide();

                    data.modalDialog.css({
                        width: obj.width
                    });
                    data.modalBody.css({
                        height: obj.height
                    });
                    obj.content && (data.form.html(obj.content));
                    obj.headerTitle && (data.gridSystemModalLabel.html(obj.headerTitle));
                    obj.className && (data.modal_content.addClass(obj.className));//添加自定义className
                    that.setTop();
                    that.setButtons();
                    obj.init();//初始化
                },
                setAnimate:function(){
                    if(obj.animateIndex!=3 && obj.animateIndex>=0 && obj.animateIndex<=$.animate_tad.length-1) {
                        data.myModal.attr("data-easein", $.animate_tad[obj.animateIndex].animateName1);
                        data.myModal.attr("data-easeout", $.animate_tad[obj.animateIndex].animateName2);
                    }
                },
                setButtons:function() {
                    for (var btn in obj.buttons) {
                        var b = '<button type="button" id="' + btn + '" class="btn btn-primary"  autocomplete="off" data-loading-text="' + btn + '">' + btn + '</button>';
                        data.modalFooter.append(b);
                        $("#" + btn).click("click", function (e) {
                            e.stopPropagation();
                            $(this).button("loading");
                            obj.buttons[$(this).attr("id")].bind(data.myModal)();
                        });
                    }
                },
                setTop:function() {
                    if (obj.height == "auto") {
                        obj.height = data.modalBody.height();
                    }
                    if (obj.height >= 600) {
                        data.modalDialog.addClass("show-dialog-margin-top2");
                    }
                    else if (obj.height >= 550 && obj.height < 600) {
                        data.modalDialog.addClass("show-dialog-margin-top3");
                    }
                    else if (obj.height >= 500 && obj.height < 550) {
                        data.modalDialog.addClass("show-dialog-margin-top5");
                    }
                    else if (obj.height < 500 && obj.height > 400) {
                        data.modalDialog.addClass("show-dialog-margin-top7");
                    }
                    else if (obj.height <= 400 && obj.height >= 300) {
                        data.modalDialog.addClass("show-dialog-margin-top10");
                    }

                },
                init: function () {
                    var that = this;
                    data.myModal.modal({
                        show: true,
                        backdrop: false
                    });
                    that.setDefault();
                }
            };
            initData.setAnimate();
            initData.init();
        },
        showDialogLeft:function(obj){
            var defaults = {
                init: function () {
                },//初始化
                content: "",//填充内容
                headerTitle: "消息提示",//header 显示的提示内容标题
                action: "",
                method: "",
                width: 40,
                html: '<div id="myModal-left" class="modal-left modal modal-bihu-showDialog-left animated" data-easein="bounceInRight" data-easeout="bounceOutRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
                <div class="modal-dialog">\
                <div class="modal-content">\
                <div class="modal-header">\
                <a id="chevronRight" href="javascript:void(0);" class="active"><i class="icon-chevron-right"></i></a>\
                <button type="button" id="modal-left-btn-close-bihu" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
                <h4 class="modal-title" id="modal-title-tad">Modal header 2</h4>\
                </div>\
                <div id="modal-body-bihu" class="modal-body">\
                <div class="container container-fluid">\
                <form id="bihu-tool-modal" class="form-inline" role = "form">\
                </form>\
                </div>\
                </div>\
                </div>\
                </div>\
                </div>'
            };
            obj = $.extend(defaults, obj);
            if ($("#myModal-left").length <= 0) {
                $("body").append(obj.html);
            }
            var data = {
                myModal: $("#myModal-left"),
                title: $("#modal-title-tad"),
                form: $("#bihu-tool-modal"),
                chevronRight: $("#chevronRight"),
                close: $("#modal-left-btn-close-bihu")
            };

            var initData = {
                setDefault: function () {
                    var that = this;
                    if (obj.action) {
                        data.form.attr("action", obj.action);
                    }
                    else {
                        data.form.removeAttr("action");
                    }
                    if (obj.method) {
                        data.form.attr("method", obj.method);
                    }
                    else {
                        data.form.removeAttr("method");
                    }
                    obj.content && (data.form.html(obj.content));
                    obj.headerTitle && (data.title.html(obj.headerTitle));
                    data.myModal.css("width", obj.width + "%");
                    that.setData();
                    that.setDateTime();
                    obj.init.bind(data.myModal)(data.form);//初始化
                    that.setBindClick();
                },
                setData:function() {
                    data.bihu_datatime = $("#myModal-left .bihu-datatime");
                },
                setDateTime:function(){
                    if (data.bihu_datatime.length > 0) {
                        data.bihu_datatime.datetimepicker({
                            language: 'zh-CN',
                            weekStart: 1,
                            autoclose: true,
                            minView: "month",
                            forceParse: false,
                            todayBtn: 1,
                            clearBtn: 1
                        });
                    }
                },
                clear:function () {
                    data.myModal.modal("hide");
                    data.myModal.removeAttr("trIndex");
                    $(".tr-bihu-active").removeClass("tr-bihu-active");
                },
                setBindClick:function(){
                    var that=this;
                    data.chevronRight.off("click").on("click",function(e){
                        e.stopPropagation();
                       that.clear();
                        return !1;
                    });
                    data.close.off("click").on("click",function(e){
                        e.stopPropagation();
                        that.clear();
                        return !1;
                    });
                },
                init: function () {
                    var that = this;
                    data.myModal.modal({
                        show: true,
                        backdrop: false
                    });
                    that.setDefault();
                }
            };
            initData.init();
            return data.myModal;
        },
        getQueryString:function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        startLoading:function(content){
            if(content) {
                $("#waitContent").text(content);
            }
            $("#myModal-loading").modal({
                show:true,
                backdrop:false
            });
        },
        endLoading:function() {
            $("#myModal-loading").modal("hide");
            setTimeout(function(){
                $("#waitContent").text("正在获取，请稍等...");
            },1000);
        },
        alert:function(options) {
            var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm');
            var alr = $("#ycf-alert");
            if (alr.length <= 0) {
                var html = '<div id="ycf-alert" class="modal ycf-alert" data-easein="fadeInDown" data-easeout="fadeOutDown" style="z-index: 999991;">\
                    <div class="modal-dialog modal-sm">\
                    <div class="modal-content">\
                    <div class="modal-header">\
                    <button type="button" class="close displayNone" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>\
                    <h5 class="modal-title"><i class="fa fa-exclamation-circle"></i> [Title]</h5>\
                    </div>\
                    <div class="modal-body small">\
                    <p id="msg_bihu" style="font-size: 16px;font-weight: normal;font-family: fantasy;">[Message]</p>\
                    </div>\
                    <div class="modal-footer">\
                    <button type="button" class="btn btn-primary ok alert_bihu" data-dismiss="modal">[BtnOk]</button>\
                    <button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>\
                    </div>\
                    </div>\
                    </div>\
                    </div>';
                $("body").append(html);
                alr = $("#ycf-alert");
            }
            var ahtml = alr.html();

            /* html 复原不在 _init() 里面做了，重复调用时会有问题，直接在 _alert/_confirm 里面做 */
            var _alert = function (options) {
                alr.html(ahtml);	// 复原
                alr.find('.ok').removeClass('btn-success').addClass('btn-primary');
                alr.find('.cancel').hide();
                _dialog(options);
                return {
                    on: function (callback) {
                        if (callback && callback instanceof Function) {
                            alr.find('.ok').click(function () {
                                callback(true)
                            });
                        }
                    }
                };
            };

            var _dialog = function (options) {
                var ops = {
                    msg: "提示内容",
                    title: "提示",
                    btnok: "确定"
                };
                if(typeof options=="string") {
                    ops.msg=options;
                }
                else{
                    $.extend(ops, options);
                }
                var html = alr.html().replace(reg, function (node, key) {
                    return {
                        Title: ops.title,
                        Message: ops.msg,
                        BtnOk: ops.btnok
                    }[key];
                });
                alr.html(html);
                $("#msg_bihu").html(ops.msg);
                alr.modal({
                    width: 500,
                    backdrop: false
                });
            };
            return _alert(options);
        },
        confirm:function(options) {
            var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm');
            var alr = $("#ycf-confirm");
            if (alr.length <= 0) {
                var html = '<div id="ycf-confirm" class="modal ycf-alert" data-easein="fadeInDown" data-easeout="fadeOutDown" style="z-index: 999991;">\
                    <div class="modal-dialog modal-sm">\
                    <div class="modal-content">\
                    <div class="modal-header" style="border-bottom:none;">\
                    <button type="button" class="close" style="margin-top:-14px;" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>\
                    <h5 class="modal-title"><i class="fa fa-exclamation-circle"></i> [Title]</h5>\
                    </div>\
                    <div class="modal-body small">\
                    <p id="msg_bihu_confirm" class="text-center font-size16">[Message]</p>\
                    </div>\
                    <div class="modal-footer" style="border-top:none;">\
                    <button type="button" class="btn btn-primary ok alert_bihu" data-dismiss="modal">[BtnOk]</button>\
                    <button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>\
                    </div>\
                    </div>\
                    </div>\
                    </div>';
                $("body").append(html);
                alr = $("#ycf-confirm");
            }
            var ahtml = alr.html();

            var _confirm = function (options) {
                alr.html(ahtml); // 复原
                 alr.find('.ok').removeClass('btn-success').addClass('btn-primary');
                alr.find('.cancel').hide();
                _dialog(options);
                return {
                    on: function (callback) {
                        if (callback && callback instanceof Function) {
                            alr.find('.ok').click(function () {
                                callback(true)
                            });
                            alr.find('.cancel').click(function () {
                                callback(false)
                            });
                        }
                    }
                };
            };
            var _dialog = function (options) {
                var ops = {
                    msg: "提示内容",
                    title: "",
                    btnok: "确定",
                    btncancel:"取消",
                    width:300
                };
                if(typeof options=="string") {
                    ops.msg=options;
                }
                else{
                    $.extend(ops, options);
                }
                var html = alr.html().replace(reg, function (node, key) {
                    return {
                        Title: ops.title,
                        Message: ops.msg,
                        BtnOk: ops.btnok,
                        BtnCancel:ops.btncancel
                    }[key];
                });
                alr.html(html);
                $("#msg_bihu_confirm").html(ops.msg);
                $(".modal-content",alr).width(ops.width);
                alr.modal({
                    width: 500,
                    backdrop: false
                });
            };
            return _confirm(options);
        },
        checkEndTime:function(startTime,endTime){
            var start=new Date(startTime.replace("-", "/").replace("-", "/"));
            var end=new Date(endTime.replace("-", "/").replace("-", "/"));
            if(end<start) {
                return false;
            }
            return true;
        },
        setBihuTime:function(pickerPosition){
            var data = {
                bihu_datatime:$("#myModal").find(".bihu-datatime"),
                bihu_datatimeDay:$("#myModal").find(".bihu-datatime-day")
            };
            if (data.bihu_datatime.length > 0) {
                data.bihu_datatime.datetimepicker({
                    language: 'zh-CN',
                    weekStart: 1,
                    autoclose: true,
                    minView: "month",
                    forceParse: false,
                    todayBtn: 1,
                    clearBtn: 1,
                    pickerPosition:pickerPosition || "bottom-left"
                }).on("changeDate", function (e) {
                    var _this=$(this);
                    var type=_this.attr("bihu-type");
                    var id=_this.attr("bihu-id");
                    if(type=="start") {
                        $("#"+id).datetimepicker("setStartDate", _this.val());
                    }
                    else if(type=="end"){
                        $("#"+id).datetimepicker("setEndDate",  _this.val());
                    }
                }).on("hide",function(e){
                    var _this=$(this);
                    if(!$.trim(_this.val())) {
                        var type = _this.attr("bihu-type");
                        var id = _this.attr("bihu-id");
                        if (type == "start") {
                            $("#" + id).datetimepicker("setStartDate", _this.val());
                        }
                        else if (type == "end") {
                            $("#" + id).datetimepicker("setEndDate", _this.val());
                        }
                    }
                    _this.blur();
                });
            }
            if (data.bihu_datatimeDay.length > 0) {
                data.bihu_datatimeDay.datetimepicker({
                    language: 'zh-CN',
                    weekStart: 1,
                    autoclose: true,
                    minView: "0",
                    forceParse: false,
                    todayBtn: 1,
                    clearBtn: 1
                });
            }
        }
    });
    $.fn.extend({
        tools:function(obj) {
            var defaults = {
                init: function () {
                },
                trClickInit: function () {
                },
                action: "",
                method: "",
                id: "",
                title: "",
                disableIndex: -1,
                disableBool: true,
                width: 40,
                td: []
            };
            obj = $.extend(defaults, obj);
            obj.content = "";
            obj.modal = "";
            var that = this;
            var tr=that.find("tbody tr");
            if(obj.td.length>0) {
                for(var j=0;j<tr.length;j++) {
                    for (var i = 0; i < obj.td.length; i++) {
                        $(tr[j]).find("td").eq(obj.td[i]).css("color", "#3a72af");
                    }
                }
            }
            tr.off("click").on("click", function (e) {
                e.stopPropagation();
                var _this = $(this);
                if (obj.disableIndex != -1 && $(e.target).index() == obj.disableIndex) {
                    obj.disableBool = false;
                    if (obj.modal) {
                        _this.removeClass("tr-bihu-active").siblings().removeClass("tr-bihu-active");
                        obj.modal.modal("hide");
                        $("#" + obj.id).html(obj.content);
                        obj.modal.removeAttr("trIndex");
                    }
                }
                else{
                    obj.disableBool=true;
                }
                if(obj.disableBool) {
                    // _this.toggleClass("tr-bihu-active").siblings().removeClass("tr-bihu-active");
                    if (obj.modal && obj.modal.attr("trIndex") == _this.index())//点击的是同一行
                    {
                        // obj.modal.modal("hide");
                        // $("#" + obj.id).html(obj.content);
                        // obj.modal.removeAttr("trIndex");
                    }
                    else {
                        _this.toggleClass("tr-bihu-active").siblings().removeClass("tr-bihu-active");
                        if (obj.id) {
                            obj.content = $("#" + obj.id).html();
                            $("#" + obj.id).html("");
                        }
                        obj.modal = $.showDialogLeft({
                            headerTitle: obj.title,
                            content: obj.content,
                            action: obj.action,
                            method: obj.method,
                            width: obj.width,
                            init: obj.init.bind(this)
                        });
                        obj.modal.attr("trIndex",_this.index());

                        if (!obj.myScroll) {
                            obj.myScroll = new IScroll('#modal-body-bihu', {
                                scrollbars: true,
                                mouseWheel: true,
                                interactiveScrollbars: true,
                                shrinkScrollbars: 'scale',
                                fadeScrollbars: true
                            });
                        }
                        obj.trClickInit.bind(this)(obj.myScroll);
                        obj.myScroll.refresh();
                    }
                }
            });
        },
        dialog: function (obj) {
            var defaults = {
                init: function () {
                },//初始化
                className: "",//自定义class类
                content: "",//填充内容
                buttons: null,//显示按钮的名称
                width: 600,//窗体的宽
                height: "auto",//窗体的高
                hideHeader: false,//是否隐藏header
                headerTitle: "消息提示",//header 显示的提示内容标题
                animateIndex: 3,
                tableHeaderFixed: false,
                setFixedHeader:function () { },
                html: '<div id="myModal" class="myModal modal modal-bihu-dialog" data-easein="fadeInDown" data-easeout="fadeOutDown"  role="dialog" aria-labelledby="gridSystemModalLabel" style="z-index: 99999;">\
                <div class="modal-dialog show-dialog-margin-top6" role="document">\
                    <div class="modal-content">\
                    <div class="modal-header modal-header-hieght">\
                    <button type="button" class="close close_bihu" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                <h4 class="modal-title" id="gridSystemModalLabel">消息提示</h4>\
                </div>\
                <div class="modal-body">\
                    <div class="container-fluid" style="height:100%;">\
                    <form id="modal-form" class="form-inline" style="height:100%;" role = "form"></form>\
                    </div>\
                    </div>\
                    <div class="modal-footer" id="modal-footer">\
                    </div>\
                </div>\
                    </div>\
                </div>'
            };
            obj = $.extend(defaults, obj);
            if ($("#myModal").length <= 0) {
                $("body").append(obj.html);
            }
            var _this=$(this);
            if($.trim(_this.html()).length>0) {
                obj.content = _this.html();
                _this.html("");
            }
            var data = {
                myModal: $("#myModal"),
                modal_content: $("#myModal").find(".modal-content"),
                btns: $("#myModal").find("button[name='btn_tad_bihu']"),
                header: $("#myModal").find(".modal-header"),
                gridSystemModalLabel: $("#gridSystemModalLabel"),
                closeBtn: $("button[class='close']"),
                modalFooter: $("#modal-footer"),
                modalDialog: $("#myModal").find(".modal-dialog"),
                modalBody: $("#myModal").find(".modal-body"),
                form: $("#modal-form"),
                containerFluid: $("#myModal").find(".container-fluid"),
                tableResponsive: $("#myModal").find(".table-responsive"),
                bihu_datatime:$("#myModal").find(".bihu-datatime"),
                bihu_datatimeDay:$("#myModal").find(".bihu-datatime-day")
            };
            var initData = {
                setDefault: function () {
                    $("body.modal-open-bihu").css("overflow","hidden");
                    data.modalFooter.html("");
                    if(obj.content) {
                        data.form.html("");
                    }
                    var that = this;
                    if(obj.hideHeader){
                        data.header.hide();
                    }
                     else{
                        data.header.show();
                    }
                    if(!obj.buttons){
                        data.modalFooter.hide();
                    }
                    else{
                        data.modalFooter.show();
                    }
                    data.modalDialog.css({
                        width: obj.width
                    });
                    data.modalBody.css({
                        height: obj.height
                    });
                    if(obj.content) {
                        data.form.html(obj.content);
                    }

                    obj.headerTitle && (data.gridSystemModalLabel.html(obj.headerTitle));
                    obj.className && (data.modal_content.addClass(obj.className));//添加自定义className
                    that.setTop();
                    that.setButtons();
                    that.setDateTime();
                    obj.init.bind(data.myModal)();//初始化
                    if(obj.tableHeaderFixed){
                        data.containerFluid.css("overflow","visible");
                    }
                },
                setDateTime:function(){
                    if (data.bihu_datatime.length > 0) {
                        data.bihu_datatime.datetimepicker({
                            language: 'zh-CN',
                            weekStart: 1,
                            autoclose: true,
                            minView: "month",
                            forceParse: false,
                            todayBtn: 1,
                            clearBtn: 1
                        }).on("changeDate", function (e) {
                            var _this=$(this);
                            var type=_this.attr("bihu-type");
                            var id=_this.attr("bihu-id");
                            if(type=="start") {
                                $("#"+id).datetimepicker("setStartDate", _this.val());
                            }
                            else if(type=="end"){
                                $("#"+id).datetimepicker("setEndDate",  _this.val());
                            }
                        }).on("hide",function(e){
                            var _this=$(this);
                            if(!$.trim(_this.val())) {
                                var type = _this.attr("bihu-type");
                                var id = _this.attr("bihu-id");
                                if (type == "start") {
                                    $("#" + id).datetimepicker("setStartDate", _this.val());
                                }
                                else if (type == "end") {
                                    $("#" + id).datetimepicker("setEndDate", _this.val());
                                }
                            }
                            _this.blur();
                        });
                    }
                    if (data.bihu_datatimeDay.length > 0) {
                        data.bihu_datatimeDay.datetimepicker({
                            language: 'zh-CN',
                            weekStart: 1,
                            autoclose: true,
                            minView: "0",
                            forceParse: false,
                            todayBtn: 1,
                            clearBtn: 1
                        });
                    }
                },
                setAnimate:function(){
                    if(obj.animateIndex!=3 && obj.animateIndex>=0 && obj.animateIndex<=$.animate_tad.length-1) {
                        data.myModal.attr("data-easein", $.animate_tad[obj.animateIndex].animateName1);
                        data.myModal.attr("data-easeout", $.animate_tad[obj.animateIndex].animateName2);
                    }
                },
                setButtons:function() {
                    for (var btn in obj.buttons) {
                        var b = '<button type="button" id="' + btn + '" class="btn btn-primary"  autocomplete="off" data-loading-text="' + btn + '...">' + btn + '</button>';
                        data.modalFooter.append(b);
                        $("#" + btn).click("click", function (e) {
                            e.stopPropagation();
                            $(this).button("loading");
                            _this.html("");
                            obj.buttons[$(this).attr("id")].bind(data.myModal)($(this));
                            _this.html(obj.content);
                            $("body.modal-open-bihu").css("overflow","auto");
                        });
                    }
                    $(".close_bihu").on("click",function(e) {
                        e.stopPropagation();
                        _this.html(obj.content);
                        $("body.modal-open-bihu").css("overflow","auto");
                        data.myModal.modal("hide");
                        return !1;
                    });
                },
                setTop:function() {
                    if (obj.height == "auto") {
                        obj.height = data.modalBody.height();
                    }
                    if (obj.height >= 600) {
                        data.modalDialog.addClass("show-dialog-margin-top2");
                    }
                    else if (obj.height >= 550 && obj.height < 600) {
                        data.modalDialog.addClass("show-dialog-margin-top3");
                    }
                    else if (obj.height >= 500 && obj.height < 550) {
                        data.modalDialog.addClass("show-dialog-margin-top5");
                    }
                    else if (obj.height < 500 && obj.height > 400) {
                        data.modalDialog.addClass("show-dialog-margin-top7");
                    }
                    else if (obj.height <= 400 && obj.height >= 300) {
                        data.modalDialog.addClass("show-dialog-margin-top10");
                    }

                },
                init: function () {
                    var that = this;
                    data.myModal.modal({
                        show: true,
                        backdrop: false
                    });
                    initData.setDefault();
                    if(obj.isIE) {
                        obj.fixed();
                    }
                }
            };
            initData.setAnimate();
            obj.isIE=false;
            if(obj.tableHeaderFixed) {
                var fixedObj = obj.setFixedHeader.bind(data.myModal)();
                obj.isIE = fixedObj.isIE;
                obj.fixed = fixedObj.fixed;
            }
            initData.init();
             return {
                 close: function (callback) {
                     if (callback && callback instanceof Function) {
                     }
                     _this.html(obj.content);
                     data.myModal.modal("hide");
                 }
             };
        },
        isCheckLicenseNo:function() {
            var that = $(this);
            var reg = /^[\u4e00-\u9fa5]{1}[A-z]{1}[\da-zA-Z]{4,5}$/;
            return !reg.test($.trim(that.val()));
        },
        isPhone:function() {//是否是座机
            var that = $(this);
            var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
            return isPhone.test(that.val());
        },
        isMob:function() {//是否是手机号
            var that = $(this);
            var isMob = /^1\d{10}$/;
            return isMob.test(that.val());
        },
        isNum:function(){//只能输入数字
            var _this=$(this);
            _this.on("keyup",function(e) {
                e.stopPropagation();
                var that = $(this);
                that.val(that.val().replace(/[^\d]/g, ''));
            });
        },
        isCheckDoubleNum: function () {//只能输入double数字
            var that = $(this);
            var reg = /^\d+(\.\d{2})?$/;
            return !reg.test(that.val());
        },
        isCheckNumAndLetter:function() {//验证输入的是否是 数字  字母 数字+字母
            var that = $(this);
            var v = that.val();
            // var reg=/^[A-Za-z0-9]+$/;
            var reg = /^[A-Za-z0-9\u4E00-\u9FA5]+$/;
            return reg.test(v);
        },
        isCheckNumAndLetterAndSpecial:function(){//验证输入的是否是汉字
            var reg=/[\u4E00-\u9FA5]/i;
            var v=$(this).val();
            return reg.test(v);
        },
        bihuDialog:function(obj){
            var defaults = {
                animateIndex: 3
            };
            obj = $.extend(defaults, obj);
            var _thisDialog=this;
            var initData = {
                setDefault: function () {
                },
                setAnimate:function(){
                    if(obj.animateIndex!=3 && obj.animateIndex>=0 && obj.animateIndex<=$.animate_tad.length-1) {
                        _thisDialog.attr("data-easein", $.animate_tad[obj.animateIndex].animateName1);
                        _thisDialog.attr("data-easeout", $.animate_tad[obj.animateIndex].animateName2);
                    }
                },
                init: function () {
                    var that = this;
                    that.setDefault();
                    _thisDialog.addClass("myModal").prop("data-easein","fadeInDown").prop("data-easeout","fadeOutDown")
                        .prop("role","dialog").prop("aria-labelledby","gridSystemModalLabel").css({
                        "z-index":999999
                    });
                    that.setAnimate();
                    _thisDialog.modal({
                        show: true,
                        backdrop: false
                    });
                }
            };
            initData.init();
            return {
                close: function (callback) {
                    if (callback && callback instanceof Function) {
                    }
                    _thisDialog.modal("hide");
                    return _thisDialog;
                }
            };
        }
    });
})(jQuery,document);
(function($) {
    $.fn.fixedHeader = function (options) {
        var config = {
            topOffset: 0,
            leftOffset: 0
            //bgColor: 'white'
        };
        if (options){ $.extend(config, options); }

        return this.each( function() {
            var o = $(this);

            var $win = $(window)
                , $head = $('thead.header', o)
                , isFixed = 0;
            var headTop = $head.length && $head.offset().top - config.topOffset;

            function processScroll() {
                if (!o.is(':visible')) return;
                if ($('thead.header-copy').size()) {
                    $('thead.header-copy').width($head.width());
                    var i, scrollTop = $win.scrollTop();
                }
                var t = $head.length && $head.offset().top - config.topOffset;
                if (!isFixed && headTop != t) { headTop = t; }
                if (scrollTop >= headTop && !isFixed) {
                    isFixed = 1;
                } else if (scrollTop <= headTop && isFixed) {
                    isFixed = 0;
                }
                // isFixed ? $('thead.header-copy', o).show().offset({ left: $head.offset().left })
                //     : $('thead.header-copy', o).hide();

                $('thead.header-copy', o).show().offset({ left: config.leftOffset })
                // NG: dislocate while iframe page resized. fixed by jeffen@pactera 2015/7/8
                headerCopyRectify();
            }
            // set a broken bone when header copy dislocated
            function headerCopyRectify() {
                o.find('thead.header > tr > th').each(function (i, h) {
                    var w = $(h).width();
                    o.find('thead.header-copy> tr > th:eq(' + i + ')').width(w)
                });
            }

            //$win.on('scroll', processScroll);
            // NG: dislocate while body resized. fixed by jeffen@pactera 2015/7/9
            //$win.on('resize', processScroll);

            // hack sad times - holdover until rewrite for 2.1
            // $head.on('click', function () {
            //     if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10);
            // });
            $head.clone(true).removeClass('header').addClass('header-copy header-fixed').css({'position': 'fixed', 'top':config.topOffset}).appendTo(o);
            o.find('thead.header-copy').offset({ left: config.leftOffset }).css({
                "top":config.topOffset
            }).width($head.width()).attr("id","AgentSelectTable_header1");
            headerCopyRectify();
            $head.css({ margin:'0 auto',
                width: o.width(),
                'background-color':config.bgColor });
            processScroll();
        });
    };
})(jQuery);

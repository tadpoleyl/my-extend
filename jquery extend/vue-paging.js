(function () {
    var tm = '<nav class="nav-paging width">' +
                '<ul class="pagination" id="test">' +
                '<li><a v-on:click="btnClick(1)" aria-label="Previous" class="pagePrev"><span aria-hidden="true">首页</span></a></li>' +
                '<li v-if="pagination.cur!=1" ><a v-on:click="beforePage()" aria-label="Previous" class="pagePrev0"> <span aria-hidden="true">上一页</span></a></li>' +
                '<li v-for="index in indexs"  v-bind:class="{ active: pagination.cur == index}">' +
                    '<a v-on:click="btnClick(index)" class="pagePrev">{{ index }}</a>' +
                    '</li>' +
                '<li v-if="pagination.cur!=pagination.all"><a v-on:click="nextPage()" aria-label="Previous" class="pagePrev0"><span aria-hidden="true">下一页</span></a></li>' +
                '<li><a aria-label="Previous" class="pagePrev" v-on:click="btnClick(pagination.all)"><span aria-hidden="true">末页</span></a></li>' +
                '<div class="col-lg-2" style="width:132px;padding-left: 15px; padding-right:0px;float:left;"><div class="input-group"><input type="text" name="goNum" class="form-control form-control-padding form-control-height isNumPage" style="min-width:70px;" v-model="page" placeholder="页码"><span class="input-group-btn"> <button class="btn btn-default form-control-padding form-control-height btn-width-40" type="button" v-on:click="goPage(page)">Go</button></span></div></div>' +
                '<div class="col-lg-3" style="width:auto;text-align: left;height: 34px;line-height:34px;padding-left: 0px; padding-right:0px;float:left;"><label style="font-weight: normal;color: black;margin-left:5px;">总共&ensp;{{pagination.totalCount}}&ensp;条记录</label></div>' +
                '</ul>' +
            '</div>';

    var navBar = Vue.extend({
        template: tm,
        props: ['pagination'],
        data:  {
            page:0
        },
        computed: {
            indexs: function () {
                var left = 1;
                var right = this.pagination.all;
                var ar = [];
                if (this.pagination.all >= 11) {
                    if (this.pagination.cur > 5 && this.pagination.cur < this.pagination.all - 4) {
                        left = this.pagination.cur - 5
                        right = this.pagination.cur + 4
                    } else {
                        if (this.pagination.cur <= 5) {
                            left = 1
                            right = 10
                        } else {
                            right = this.pagination.all
                            left = this.pagination.all - 9
                        }
                    }
                }
                while (left <= right) {
                    ar.push(left)
                    left++
                }
                return ar
            }
        },
        watch: {
            cur: function (oldValue, newValue) {
                console.log(arguments);
            }

        },
        methods: {
            btnClick: function (data) {
                if (data != this.pagination.cur) {
                    this.pagination.cur = data;
                    this.$dispatch('btn-click', data);

                }
            },
            nextPage: function () {

                var page = parseInt(this.pagination.cur) + 1;
                this.$dispatch('btn-click', page);
                this.pagination.cur = page;
            },
            beforePage: function () {
                var page = parseInt(this.pagination.cur) - 1;
                this.$dispatch('btn-click', page);
                this.pagination.cur = page;
            },
            goPage: function (data) {

                if (data != this.pagination.cur && data <= this.pagination.all && data >= 1) {
                    var page = parseInt(data);
                    this.pagination.cur = page;
                    this.$dispatch('btn-click', page);
                }
            }
        }

    })

    window.Vnav = navBar;
})();
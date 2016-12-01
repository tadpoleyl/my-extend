/**
 * Created by Administrator on 2016/11/10.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
            },
            dist: {
                src: [
                    'Content/bootstrap/js/bootstrap.js',
                    'Content/bootstrap/js/bootstrap-datetimepicker.js',
                    'Content/bootstrap/js/bootstrap-datetimepicker.zh-CN.js',
                    'Scripts/bihu_js/extend.js',
                    'Scripts/bihu_js/bihu-class.js',
                    'Scripts/core.js',
                    'Scripts/session.js',
                    'Scripts/tools/jquery.cookie.js',
                    'Scripts/bihu_js/iscroll.js',
                    'Scripts/bihu_js/menu.js',
                    'Scripts/bihu_js/bihu-datatime.js',
                    'Scripts/jquery.signalR-2.2.1.js'
                    ],//src文件夹下包括子文件夹下的所有文件
                dest: 'Scripts/bihu_js/bihu.js'//合并文件在dist下名为bihu.js的文件
            },
            css: {
                src: [
                    'Content/bootstrap/css/bootstrap-datetimepicker.css',
                    'Content/style/showDialog.css',
                    'Content/style/index.css',
                    'Content/style/animate.css',
                ],//当前grunt项目中路径下的src/css目录下的所有css文件
                dest: 'Content/style/all.css'  //生成到grunt项目路径下的dist文件夹下为all.css
            }
        },
        uglify: {
            build: {
                src: 'Scripts/bihu_js/bihu.js',//压缩源文件是之前合并的bihu.js文件
                dest: 'Scripts/bihu_js/bihu.min.js'//压缩文件为bihu.min.js
            }
        },
        cssmin: { //css文件压缩
            css: {
                src: 'Content/style/all.css',//将之前的all.css
                dest: 'Content/style/all.min.css'  //压缩
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat','uglify','cssmin']);
}
﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: May 29 18:24
*/
KISSY.add("editor/plugin/underline/index", function (S, Editor, ui, cmd) {
    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:"underline",
                contentCls:"ke-toolbar-underline",
                title:"下划线 "
            }, undefined, ui.Button);
        }
    };
}, {
    requires:['editor', '../font/ui', './cmd']
});

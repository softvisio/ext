import Ext_panel_Tool_Component from './Ext/panel/Tool'

export class ExtPaneltoolComponent extends Ext_panel_Tool_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-paneltool', ExtPaneltoolComponent);
    });
})();

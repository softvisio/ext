import Ext_grid_column_Template_Component from './Ext/grid/column/Template'

export class ExtTemplatecolumnComponent extends Ext_grid_column_Template_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-templatecolumn', ExtTemplatecolumnComponent);
    });
})();
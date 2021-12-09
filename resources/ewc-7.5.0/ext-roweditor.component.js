import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRoweditor extends Ext_grid_rowedit_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'roweditor';
  }
}
try {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', EWCRoweditor);
  }
}

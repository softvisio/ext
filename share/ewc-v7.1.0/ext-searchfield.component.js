import Ext_form_Search from './Ext/form/Search.js';
import ElementParser from './ElementParser.js';

export default class EWCSearchfield extends Ext_form_Search {
  constructor() {
    super ([], []);
    this.xtype = 'searchfield';
  }
}
window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));

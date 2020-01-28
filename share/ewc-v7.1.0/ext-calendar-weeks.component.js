import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_weeks extends Ext_calendar_panel_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeks';
  }
}
window.customElements.define('ext-calendar-weeks', ElementParser.withParsedCallback(EWCCalendar_weeks));

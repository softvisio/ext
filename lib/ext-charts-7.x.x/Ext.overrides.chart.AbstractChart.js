import themeRegistry from "#vue/theme";

const DEFAULT_THEME = "green";
const DARK_MODE_THEME = "midnight";
const THEMES = {
    "red": "red",
    "pink": "red",
    "purple": "purple",
    "deep-purple": "purple",
    "indigo": "muted",
    "blue": "blue",
    "light-blue": "sky",
    "cyan": "sky",
    "teal": "blue",
    "green": "green",
    "light-green": "green",
    "lime": "yellow",
    "yellow": "yellow",
    "amber": "yellow",
    "orange": "red",
    "deep-orange": "red",
    "brown": "purple",
    "grey": "purple",
    "blue-grey": "blue",
};

Ext.define( "Ext.overrides.chart.AbstractChart", {
    "override": "Ext.chart.AbstractChart",

    "config": {
        "downloadServerUrl": "https://",
    },

    initialize () {
        if ( themeRegistry ) {
            this._setTheme( themeRegistry.theme );

            this._themeListener = theme => this._setTheme( theme );

            themeRegistry.on( "theme", this._themeListener );
        }

        this.callParent( arguments );
    },

    doDestroy () {
        if ( this._themeListener ) {
            themeRegistry.off( "theme", this._themeListener );

            this._themeListener = null;
        }

        this.callParent( arguments );
    },

    _setTheme ( theme ) {
        if ( theme.darkMode ) {
            this.setTheme( DARK_MODE_THEME );
        }
        else {
            this.setTheme( THEMES[theme.base] || DEFAULT_THEME );
        }
    },
} );

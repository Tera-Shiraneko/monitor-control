const SettingsUI = require('tera-mod-ui').Settings;

module.exports = function Monitorcontrol(mod) {

    if (mod.proxyAuthor !== 'caali' || !global.TeraProxy) {
        mod.warn('You are trying to use this module on an unsupported legacy version of tera-proxy.');
        mod.warn('The module may not work as expected, and even if it works for now, it may break at any point in the future!');
        mod.warn('It is highly recommended that you download the latest official version from the #proxy channel in http://tiny.cc/caalis-tera-proxy');
    }

    mod.command.add('blockconfig', () => {
        if (ui) {
            ui.show();
        }
    });

    mod.command.add('blockscene', () => {
        mod.settings.blockscene = !mod.settings.blockscene;
        mod.command.message(`Blocking of cutscenes is now ${mod.settings.blockscene ? "enabled" : "disabled"}.`);
    });

    mod.command.add('blockzoom', () => {
        mod.settings.blockzoom = !mod.settings.blockzoom;
        mod.command.message(`Blocking of zoom scripts is now ${mod.settings.blockzoom ? "enabled" : "disabled"}.`);
    });
	
    mod.command.add('blockabnormality', () => {
        mod.settings.blockabnormality = !mod.settings.blockabnormality;
        mod.command.message(`Blocking screen abnormalities is now ${mod.settings.blockabnormality ? "enabled" : "disabled"}.`);
    });
	
    mod.command.add('blockcrystal', () => {
        mod.settings.blockcrystal = !mod.settings.blockcrystal;
        mod.command.message(`Blocking crystal refresh messages is now ${mod.settings.blockcrystal ? "enabled" : "disabled"}.`);
    });

    mod.command.add('blockskill', () => {
        mod.settings.blockskill = !mod.settings.blockskill;
        mod.command.message(`Blocking skill refresh effects is now ${mod.settings.blockskill ? "enabled" : "disabled"}.`);
    });

    mod.hook('S_PLAY_MOVIE', 1, (event) => {
        if (mod.settings.blockscene) {
            mod.send('C_END_MOVIE', 1, Object.assign({unk: 1}, event));
            return false;
        }
    });

    mod.hook('S_START_ACTION_SCRIPT', 3, (event) => {
        if (mod.settings.blockzoom && event.script > 0) return false;
    });

    mod.hook('S_ABNORMALITY_BEGIN', 3, {order: 1000, filter: {fake: null}}, (event) => {
        if (mod.settings.blockabnormality && mod.settings.abnormalblock.includes(event.id)) return false;
    });

    mod.hook('S_ABNORMALITY_REFRESH', 1, (event) => {
        if (mod.settings.blockcrystal && mod.settings.crystalblock.includes(event.id)) return false;
        if (mod.settings.blockskill && mod.settings.skillblock.includes(event.id)) return false;
    });

    let ui = null;
    if (global.TeraProxy.GUIMode) {
        ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 255 }, { alwaysOnTop: true });
        ui.on('update', settings => { mod.settings = settings; });

        this.destructor = () => {
            if (ui) {
                ui.close();
                ui = null;
            }
        };
    }
};

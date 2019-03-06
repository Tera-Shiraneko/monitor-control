const DefaultSettings = {
    "blockzoom": true,
    "blockskill": true,
    "blockscene": true,
    "blockcrystal": true,
    "blockabnormality": true,
    "abnormalblock": [4850, 48732, 48734, 48735, 48736, 48737, 48738, 70251, 70252, 70253, 70254, 70255, 70256, 70465, 476806, 630201, 630202, 630411, 630511, 631002, 631003, 631201, 631202, 776017, 806001, 806002, 811061, 821101, 905656, 905657, 7102001, 45000011, 45000012, 47660800, 47660900, 47661000, 47662300, 999001011],
    "crystalblock": [10306, 10316, 12001, 12003, 12120, 12130],
    "skillblock": [101300, 101301],
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        throw new Error('So far there is only one settings version and this should never be reached!');
    }
}
## Tera proxy module to remove useless screen effects.

---

## Console Command
- Type `/8 blockabnormality` to enable or disable screen abnormalities. Enabled by default.
- Type `/8 blockcrystal` to enable or disable crystal refresh messages. Enabled by default.
- Type `/8 blockzoom` to enable or disable blocking of zoom scripts. Enabled by default.
- Type `/8 blockscene` to enable or disable blocking of cutscenes. Enabled by default.
- Type `/8 blockskill` to enable or disable skill refresh effects. Enabled by default.
    - Should only be enabled with custom cooldown interface.

---

## Interface Command
- Type `/8 blockconfig` to enable or disable the functions written above.

---

## Configuration
- If you want to edit the config you need to start proxy and go to server selection.
    - Will be generated afterwards in the modules folder.
- A list of things that can be edited can be found here only for experienced users.
	- Abnormalblock => blacklist for blocking effects on your screen.
    - Crystalblock => blacklist for blocking messages on your screen.
    - Skillblock => blacklist for blocking messages on your screen.

---

## Note
- An abnormality overview for the default abnormals can be found here [Abnormality Overview](https://github.com/Tera-Shiraneko/monitor-control/tree/master/Abnormalities).
- An download link for tera custom cooldowns can be found here [Tera Custom Cooldowns](https://github.com/Foglio1024/Tera-custom-cooldowns/releases).
- If you are using blockskill without custom cooldown interface skill stacks wont be shown.
    - Only if the id is added in the blacklist. Can be disabled via command above.

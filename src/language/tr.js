const languageData = {
    PREFIX: (prefix) => `Bu sunucunun prefixi: ${prefix}` /* ./src/commands/admin/prefix üzerinden kontrol edin! */
}

module.exports = translate = (key, ...args) => {
    const translation = languageData[key];
    if (typeof translation === "function") return translation(args);
    else return translation;
}

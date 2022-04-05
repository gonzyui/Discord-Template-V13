const languageData = {
    PREFIX: (prefix) => `Das Präfix dieses Servers ist: ${prefix}` /* Check in ./src/commands/admin/prefix */
}

module.exports = translate = (key, ...args) => {
    const translation = languageData[key];
    if (typeof translation === "function") return translation(args);
    else return translation;
}

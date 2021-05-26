module.exports = ({ types: t }) => ({
    name: "i18n",
    visitor: {
        StringLiteral: {
            enter(path) {
              console.log(path);
            },
        },
    }
})
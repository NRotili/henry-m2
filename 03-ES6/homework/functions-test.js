var selectorTypeMatcher = function (selector) {
    // tu código aquí
    const firstChar = selector.charAt(0);
    if (firstChar === "#") {
        return "id";
    } else if (firstChar === ".") {
        return "class";
    } else if (selector.match(/\./g)) {
        return "tag.class";
    } else {
        return "tag";
    }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
    var selectorType = selectorTypeMatcher(selector);
    var matchFunction;
    if (selectorType === "id") {
        return function (el) {
            return el.id && (("#" + el.id.toLowerCase()) === selector.toLowerCase());
        };
    } else if (selectorType === "class") {
        return function (el) {
            return el.className && (("." + el.className.toLowerCase()) === selector.toLowerCase());
        };
    } else if (selectorType === "tag.class") {
        return function (el) {
            return el.tagName && el.className && (`{el.tagName}.{el.className}`.toLowerCase() === selector.toLowerCase());
        };
    } else if (selectorType === "tag") {
        return function (el) {
            return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
        };
    }
    return matchFunction;
};


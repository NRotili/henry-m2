var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let level = [];
  function bfs() {
    const newLevel = [];

    // Process nodes per level
    level.forEach(node => {

      if (matchFunc(node)) resultSet.push(node);

      // Next level
      for (let i = 0; i < node.children.length; i++) {
        newLevel.push(node.children[i]);
      }
    });

    // New level
    level = newLevel;
    if (level.length > 0) bfs();
  }
  level.push(startEl);
  bfs();

  // Imple de Franco!   // Qué ordenamiento estaría usando ? 
  // if(matchFunc(startEl)) resultSet.push(startEl);

  // for (let i = 0; i < startEl.children.length; i++) {
  //   let child = startEl.children[i];
  //   let elementsFound = traverseDomAndCollectElements(matchFunc, child);
  //   resultSet = [...resultSet, ...elementsFound]; // Usa el spread operator ...
    
  // }

  console.log(`resultSet: ${resultSet}`);
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // const firstChar = selector.charAt(0);
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.match(/\./g)) return "tag.class";

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (el) {
      return el.id && (`#${el.id.toLowerCase()}` === selector.toLowerCase());
    };
  } else if (selectorType === "class") {
    matchFunction = function (el) {
      return el.className && el.classList.contains(selector.substr(1));
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (el) {
      // Imple mía
      // const tagClass = selector.split(".");
      // return el.tagName && el.className && (el.tagName.toLowerCase() === tagClass[0].toLowerCase()) && el.classList.contains(tagClass[1]);
      
      // Imple de Franco
      let [t, c] = selector.split("."); // aplica Destructuring
      return matchFunctionMaker(t)(el) && matchFunctionMaker(`.${c}`)(el);  // llama a la función para reutilizar código

    };
  } else if (selectorType === "tag") {
    // child combinator
    let regExp = />/g;
    if (regExp.test(selector)) {
      // Selector has a child combinator
      const tags = selector.split(" > ");
      console.log(`padre: ${tags[0]} , hijo: ${tags[1]}`);
      matchFunction = function (el) {
        return el.tagName && (el.tagName.toLowerCase() === tags[1].toLowerCase()) &&
          el.parentNode.tagName && (el.parentNode.tagName.toLowerCase() === tags[0].toLowerCase());
      };
    }

    // descendant combinator
    regExp = /\s/g;
    if (!matchFunction && regExp.test(selector)) {
      // Selector has a descendant combinator
      console.log(`${selector} has a descendant combinator`);
      function hasAncestor(node, parentTagName) {
        console.log(`hasParent(), node: ${node}, parentTagName: ${parentTagName}`);
        if (node) {
          if (node.tagName.toLowerCase() === parentTagName.toLowerCase()) return true;
          return hasAncestor(node.parentNode, parentTagName);
        } else {
          return false;
        }
      };

      const tags = selector.split(" ");

      console.log(`Descendant combinator -> padre: ${tags[0]} , hijo: ${tags[1]}`);
      matchFunction = function (el) {
        return el.tagName && (el.tagName.toLowerCase() === tags[1].toLowerCase()) && hasAncestor(el.parentNode, tags[0]);
      };
    }

    if (!matchFunction) {
      matchFunction = function (el) {
        return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
      };
    }
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

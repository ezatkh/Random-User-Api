function handleTemplate(idTemplateScript, data, idAppendDiv) {
  $(idAppendDiv).empty();
  const source = $(idTemplateScript).html();
  const template = Handlebars.compile(source);
  if (isNaN(data.length)) {
    var newHTML = template(data);
  } else {
    var newHTML = template({ data });
  }
  $(idAppendDiv).append(newHTML);
}

class Renderer {
  friendsRender(friendsArray) {
    const idTemplateScript = "#friends-template";
    const idAppendDiv = ".friends-container";
    handleTemplate(idTemplateScript, friendsArray, idAppendDiv);
  }

  userRender(userTemplate) {
    const idTemplateScript = "#users-template";
    const idAppendDiv = ".user-container";
    handleTemplate(idTemplateScript, userTemplate, idAppendDiv);
  }

  quoteRender(quoteTemplate) {
    const idTemplateScript = "#quote-template";
    const idAppendDiv = ".quote-container";
    handleTemplate(idTemplateScript, quoteTemplate, idAppendDiv);
  }

  pokemonRender(pokemonTemplate) {
    const idTemplateScript = "#pokemon-template";
    const idAppendDiv = ".pokemon-container";
    handleTemplate(idTemplateScript, pokemonTemplate, idAppendDiv);
  }
  paconRender(bacon) {
    const idTemplateScript = "#bacon-template";
    const idAppendDiv = ".meat-container";
    handleTemplate(idTemplateScript, bacon, idAppendDiv);
  }
  dropDownRender(usersSaved) {
    const idTemplateScript = "#list-template";
    const idAppendDiv = "#option";
    handleTemplate(idTemplateScript, usersSaved, idAppendDiv);
  }
}

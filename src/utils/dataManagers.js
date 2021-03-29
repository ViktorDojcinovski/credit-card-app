export class LocalStorageManager {
  constructor() {}
  static save(data) {
    const cards = localStorage.getItem("cards");

    cards.push(data);

    localStorage.setItem("cards", cards);
  }
}

export class SessionStorageManager {
  static save(data) {
    let elements = JSON.parse(sessionStorage.getItem("cards"));
    let newElements = [];

    if (Array.isArray(elements)) {
      elements.push({ id: elements ? elements.length + 1 : 1, ...data });
      newElements = [...elements];
    } else {
      newElements.push({ id: elements ? elements.length + 1 : 1, ...data });
    }

    sessionStorage.setItem("cards", JSON.stringify(newElements));
  }

  static edit(id, data) {
    let elements = JSON.parse(sessionStorage.getItem("cards"));
    let newElements = [];

    elements.splice(
      elements.findIndex((el) => el.id === id),
      1,
      { id, ...data }
    );
    newElements = [...elements];

    sessionStorage.setItem("cards", JSON.stringify(newElements));
  }

  static getElement(id) {
    return JSON.parse(sessionStorage.getItem("cards")).find((el) => {
      return el.id == id;
    });
  }

  static get data() {
    return JSON.parse(sessionStorage.getItem("cards"));
  }
}

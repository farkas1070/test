import { edit, save, dismiss } from "../controllers/TodoController";

class PoiModel {
  constructor(name, longitude, latitude, type) {
    this.name = name;
    this.longitude = longitude;
    this.latitude = latitude;
    this.type = type;

    // save function adds id property later
  }

  async save() {
    // save the todo to Strapi
    const id = await save(this);

    // should no id be returned throw an error
    if (!id) {
      throw new Error("Todo could not be saved");
    }

    // set id and return true
    this.id = id;
    return true;
  }

  async edit() {
    if (!this.id) {
      throw new Error("Cannot edit TODO before it was saved.");
    }

    const edited = await edit(this);

    // check if the edit returned false
    if (!edited) {
      throw new Error("Todo could not be edited.");
    }

    return true;
  }

  async dismiss() {
    if (!this.id) {
      throw new Error("Cannot delete TODO before it was saved.");
    }

    const dismissed = await dismiss(this);

    // check if the dismiss returned false
    if (!dismissed) {
      throw new Error("Todo could not be deleted.");
    }

    return true;
  }
}

export default PoiModel;

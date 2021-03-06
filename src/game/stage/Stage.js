const CellController = require('../controller/CellController');
const ItemController = require('../controller/ItemController');
const PlayerCellController = require('../controller/PlayerCellController');

class Stage {
  constructor(width = 512, height = 512) {
    this.width = width;
    this.height = height;
    this.ticktock = () => {
      if (this.cellController instanceof CellController) {
        this.cellController.update();
      }
      if (this.itemController instanceof ItemController) {
        this.itemController.update();
      }
    };
    this.playerMove = (data) => {
      if (this.playerCellController instanceof PlayerCellController) {
        this.playerCellController.update(data);
      }
    };
  }

  getCellController() {
    return this.cellController;
  }

  getHeight() {
    return this.height;
  }

  getItemController() {
    return this.itemController;
  }

  getPlayerCellController() {
    return this.playerCellController;
  }

  getWidth() {
    return this.width;
  }

  setCellController(cellController) {
    if (cellController instanceof CellController) {
      this.cellController = cellController;
    }
  }

  setHeight(height) {
    this.height = height;
  }

  setItemController(itemController) {
    if (itemController instanceof ItemController) {
      this.itemController = itemController;
    }
  }

  setPlayerCellController(playerCellController) {
    if (playerCellController instanceof PlayerCellController) {
      this.playerCellController = playerCellController;
    }
  }

  setUpdater(func) {
    this.updater = func;
  }

  setWidth(width) {
    this.width = width;
  }

  update(entityName, key, values) {
    if (typeof this.updater === 'function') {
      this.updater(entityName, key, values);
    }
  }
}

module.exports = Stage;

const uuid = require("uuid");
const { Router } = require("express");

const { DB_CONNECTION } = require("../configs/connections");

const router = Router();

async function getItemById(id) {
  let response = [];
  try {
    const query = `SELECT * FROM shopping_list WHERE id = ?`;
    const params = [id];
    const result = await new Promise((resolve, reject) => {
      DB_CONNECTION.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (Array.isArray(result) && result.length > 0) {
      response = JSON.parse(result[0].value);
    }
  } catch (err) {
    console.error("Error en la consulta:", err);
  }

  return response;
}

router.get("/shopping-list", (req, res) => {
  const query = "SELECT * FROM shopping_list";

  DB_CONNECTION.query(query, (err, result) => {
    if (err) {
      const response = {
        success: false,
        error: "Error al hacer la consulta: " + err,
      };

      res.status(500).json(response);
    } else {
      const response = {
        success: true,
        message: "¡Consulta exitosa!",
        data: body,
      };
      res.json(response);
    }
  });
});

router.get("/shopping-list/:id", async (req, res) => {
  let response = {};
  try {
    const item = await getItemById(req.params.id);

    if (item.length > 0) {
      response = {
        success: true,
        message: "¡Consulta exitosa!",
        data: item,
      };
      res.json(response);
    } else {
      response = {
        success: false,
        error: "No se encontró item con el ID proporcionado",
      };
      res.status(404).json(response);
    }
  } catch (err) {
    const response = {
      success: false,
      error: "Error al obtener el item: " + err,
    };
    res.status(500).json(response);
  }
});

router.post("/shopping-list/new", (req, res) => {
  const id = uuid.v6();
  const body = { id, ...req.body };
  const query = `INSERT INTO shopping_list (id, value) VALUES (?, ?)`;
  const params = [body.id, JSON.stringify(body)];

  DB_CONNECTION.query(query, params, (err, result) => {
    if (err) {
      const response = {
        success: false,
        error: "Error al hacer el registro: " + err,
      };

      res.status(500).json(response);
    } else {
      const response = {
        success: true,
        message: "¡Registro exitoso!",
        data: body,
      };
      res.json(response);
    }
  });
});

router.put("/shopping-list/update/:id", async (req, res) => {
  try {
    const query = `UPDATE shopping_list SET value = JSON_MERGE_PATCH(value, ?) WHERE id = ?`;

    const params = [JSON.stringify(req.body), req.params.id];

    const result = await new Promise((resolve, reject) => {
      DB_CONNECTION.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (result.affectedRows === 0) {
      const response = {
        success: false,
        error: "No se encontró ningún item con el ID proporcionado",
      };
      res.status(404).json(response);
    } else {
      const item = await getItemById(req.params.id);
      const response = {
        success: true,
        message: "¡Actualización exitosa!",
        data: item,
      };
      res.json(response);
    }
  } catch (err) {
    const response = {
      success: false,
      error: "Error en la actualización: " + err,
    };
    res.status(500).json(response);
  }
});

router.delete("/shopping-list/delete/:id", async (req, res) => {
  try {
    const item = await getItemById(req.params.id);

    const query = `DELETE FROM shopping_list WHERE id = ?`;
    const params = [req.params.id];
    const result = await new Promise((resolve, reject) => {
      DB_CONNECTION.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    if (result.affectedRows === 0) {
      const response = {
        success: false,
        error: "No se encontró ningún item con el ID proporcionado",
      };
      res.status(404).json(response);
    } else {
      const response = {
        success: true,
        message: "¡Eliminación exitosa!",
        data: item,
      };
      res.json(response);
    }
  } catch (err) {
    const response = {
      success: false,
      error: "Error en la eliminación: " + err,
    };
    res.status(500).json(response);
  }
});

module.exports = router;

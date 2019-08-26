const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// Update number of likes for image
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    let sqlText = '';
    sqlText = `UPDATE images SET likes=likes+1 WHERE id=$1`;
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
});


// Setup a GET route to get all the images from the database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM images ORDER BY id ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;
const conexion = require('../database/db')

exports.ConsultProducts = async (req, res) => {
    try {
        conexion.query('SELECT * FROM productos', async (err, results) =>{
            res.send(results)
        })
    } catch (error) {
        console.log(error)
    }
        
}

exports.CreateProduct = async (req, res) => {
    try {
        const nombre = req.body.nombre
        const cantidad = req.body.cantidad
        const costoUnidad = req.body.costo
        const precioVenta = req.body.precioVenta
        const costo = costoUnidad*cantidad
        const data = {
            nombre,
            cantidad,
            costo,
            precioVenta
        }
        conexion.query('INSERT INTO productos SET ?', data, (err, conn) =>{
            if(err) {console.log(err)}
            res.send('Product create successfully')
        })
    } catch (error) {
        console.log(error)
    }
        
}

exports.EditProduct = async (req, res) => {
    try {
        const nombre = req.body.nombre
        const cantidad = req.body.cantidad
        const costoUnidad = req.body.costo
        const precioVenta = req.body.precioVenta
        const costo = costoUnidad*cantidad
        const data = {
            nombre,
            cantidad,
            costo,
            precioVenta
        }
        conexion.query('UPDATE productos set ? WHERE id = ?', [data, req.params.id], (err, conn)=>{
            if(err) return res.send(err)

            res.send('Product edit successfully')
        })
    } catch (error) {
        console.log(error)
    }
        
}

exports.DeleteProduct = async (req, res) => {
    try {
        conexion.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err, conn)=>{
            if(err) return res.send(err)

            res.send('Product delete successfully')
        })
    } catch (error) {
        console.log(error)
    }
        
}

exports.obtenerCostoTotal = async (req, res) => {
    try {
        conexion.query('SELECT * FROM productos', async (err, results) =>{
            let costoTotal = 0
            console.log(results)
            results.map(p => {
                costoTotal += p.costo
            })
            let costoString = "" + costoTotal
            res.send(costoString)
        })
    } catch (error) {
        console.log(error)
    }
        
}

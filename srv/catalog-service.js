const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {

    this.on('InsertBulk', async () => {
        try {
            let dbQuery = ' Call "InsertBulk"( )'
            let result = await cds.run(dbQuery, { })    
            console.log(result)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }),
    this.on('InsertBook', async (req) => {
        try {
                const { id, name } = req.data;
                let dbQuery = `Call "InsertBook"("ID" => ${id}, "NAME" => '${name}')`;
                let result = await cds.run(dbQuery, { })
                console.log(result)
                return true
            } catch (error) {
                console.error(error)
                return false
            }
    })
});
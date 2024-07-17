const database = require('../lib/database')

class Professional{
    constructor(props){
        this.props = props;
        this.collection = database.db.collection(database.collection.professionals)
    }
    save = ()=>{
        
        this.props.addedOn = new Date().toLocaleString()
        return this.collection.insertOne(this.props)  
    }
         
}
    


module.exports = Professional
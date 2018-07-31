export default{
    data () {
        return {
            search:'',
            names:['Antony','Lorence','Ol']
        }
    },
    computed:{
        filteredNames(){
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.search) !== -1
            })
        }
    }
}
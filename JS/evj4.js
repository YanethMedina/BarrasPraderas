new Vue({
    el:'#seccion',
    data:{
        resul:0,
        nombre:'',
        validacion:'',
        tamanio:10,
        cantidadN:0,
        resultado:0,
        precio:0,
        valor:0,
        precant:0,
        names:[
            {cantidad:8, nombres:'Proteina Barbara de Regil', precios:459},
            {cantidad:5, nombres:'Proteina de Jhony Bravo', precios:578},
        ],
        total:0,
    },
    methods:{
        agregar:function(){
            this.names.push({cantidad:this.cantidadN, nombres:this.nombre, precios:this.precio});
            this.nombre='';
        },
    },
    computed:{
        cantProductos(){
            this.total=0;
            for(objeto of this.names){
                this.total+=objeto.cantidad;
            }
            return this.total;
        },
        sub(){
            this.subt=0;
            for(objeto of this.names){
                this.subt+=objeto.cantidad*objeto.precios;
            }
            return this.subt;
        },
        iva(){
            this.tiva=0;
            this.res=0;
            for(objeto of this.names){
                this.res+=objeto.cantidad*objeto.precios;
                this.tiva=this.res*0.16;
            }
            return this.tiva;
        },
        totalP(){
            this.tot=0;
            this.res=0;
            this.tiva=0;
            for(objeto of this.names){
                this.res+=objeto.cantidad*objeto.precios;
                this.tiva=this.res*0.16;
                this.tot=this.res+this.tiva;
            }
            return this.tot;
        }
    }
});
class Libraries {
   constructor(stringDate, type){
       this.stringDate =  new Date(stringDate);
       this.type = type;
   }
   getFormattedDate() {
        var month = this.stringDate.getMonth() + 1;
        var day = this.stringDate.getDate();
        var year = this.stringDate.getFullYear();
        return day + "-" + month + "-" + year;
    }
}
export default Libraries;
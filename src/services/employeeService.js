class employeeService {
    constructor() {
      this.items = [
        {id:1, name:"Ram", salary:15000, address:"2001",sameAdrs:true,permanentAddress:''},
        {id:2, name:"Ragu", salary:23000, address:"2002",sameAdrs:true,permanentAddress:''},
        {id:3, name:"Pravin", salary:32000, address:"2003",sameAdrs:true,permanentAddress:''},
      ];
    }
    async employeeList() {
        console.log(" inside service ")
        return Promise.resolve(this.items);
    }

    // async getItem(itemLink) {
    //   for(var i = 0; i < this.items.length; i++) {
    //     if ( this.items[i].link === itemLink) {
    //       return Promise.resolve(this.items[i]);
    //     }
    //   }
    //   return null;
    // }

    async addEmp(emp) {
      console.log("ItemService.createItem():");
      console.log(emp);
      this.items.push(emp)
      return "added successfully."
    }

    async deleteItem(itemId) {
      console.log("ItemService.deleteItem():");
      console.log("item ID:" + itemId);
    }

    async updateItem(item) {
      console.log("ItemService.updateItem():");
      console.log(item);
    }

  }
  export default employeeService;


 export function removeEmployee(index){
    return {
        type: 'REMOVE_EMP',
        index : index
    }
}

export function addEmployee(data){
    return{
        type:"ADD_EMP",
        data:data
    }
}
// export default removeEmployee;
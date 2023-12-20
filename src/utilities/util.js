import  mock_data from "../mock/data.json"


export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock_data)
        }, 1000)
    })
}
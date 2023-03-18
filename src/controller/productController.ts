import {Request, Response} from 'express'
import productService from "../service/productService"


class productsController{
    async create(req: Request, res: Response){
        await productService.createProductList(req.body)
        return res.status(201).send()
    }

    async list(req: Request, res: Response){
        const productList = await productService.listProducts()

        return res.status(200).send(productList)
    }

    async stock(req: Request, res: Response){
        const stock = await productService.getStock()

        return res.status(200).send(stock)
    }
}


export default new productsController()

//criar método novo e rota nova e utilizando reduce na service, pegar o método stock e somar os valores para retornar 
//o valor total do stock
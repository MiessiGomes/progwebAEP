import { Request, Response } from 'express'

class UserController{    
    public async list(req: Request, res: Response) {
        return res.json('José Ricardo')
    }
}

export default new UserController()
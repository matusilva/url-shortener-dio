import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        res.json({originURL, hash, shortURL})
    }

    public async redirect(req:Request, res: Response): Promise<void> {
        const { hash } = req.params

        const url = {
            originURL: 'https://cloud.mongodb.com/v2/61a564dcae72cd2673792918#clusters',
            hash: 'ybwp0qxhk',
            shortURL: 'http://localhost:3000/ybwp0qxhk'
        }

        res.redirect(url.originURL)
    }
}
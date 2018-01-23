import Superagent from 'superagent';
import config from '../config/config';

export const getItem = (id) => {

    return new Promise((resolve, reject) => {
        Superagent.get(config.apiServer + '/items/' + id)
            .end((err, res) => {
                if(err) reject(err)
                else resolve(res.body);
            })
    })
}
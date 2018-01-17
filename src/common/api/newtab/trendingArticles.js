import { request } from '../_request/request'
import { getCurrentLanguageCode } from '../../helpers'

/* API CALLS - Should return promises
–––––––––––––––––––––––––––––––––––––––––––––––––– */
export function getTrendingArticles( data, count ){
    var lang = getCurrentLanguageCode()
    // FIXME: this is where the request is made
    return request ({
        path: 'getGlobalRecs/',
        data: {
            guid            : data.guid,
            version         : 2,
            locale_lang     : lang,
            count           : count
        }
    })
        .then( response => [{status: 'ok', response}])
}

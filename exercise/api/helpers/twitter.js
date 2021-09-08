const axios=require('axios');
const URL='https://api.twitter.com/1.1/search/tweets.json';
class Twitter
{    
    get(query,count,maxId)
    {
        return axios.get(URL,{
            params:{
                q:q,
                count:count,
                max_id:maxId,
                tweet_mode:"extended"
            },
            headers:{
                "Authorization":`Bearer ${process.env.TWITTER_API_TOKEN}`
            }
        })
    }
}
module.exports=Twitter;
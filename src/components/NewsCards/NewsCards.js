import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Grid, Grow, Typography } from '@material-ui/core'
import undraw1 from '../../img/undraw1.svg'
import undraw2 from '../../img/undraw2.svg'
import undraw3 from '../../img/undraw3.svg'
import undraw4 from '../../img/undraw4.svg'

import useStyles from './styles.js'


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Try saying \'give me the latest news from CNN\' after clicking ob the button located at the right bottom', photo: undraw4 },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news', photo: undraw1 },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5', photo: undraw2 },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN', photo: undraw3 },
];

const NewsCards = ({ articles, activeArticle }) => {
    // const classes = useStyles();

    console.log(articles)
    if (!articles.length) {
        return (
            // <div className='container'>
            //     <div className="row">
            infoCards?.map(infoCard => (


                <div className="col-lg-6 col-md-6 px-3 pb-5 col-sm-12 text-justify">
                    <div className="text-center p-2" >
                        <div className="h3">{infoCard.title}</div>
                        <h6 className="text-secondary"><strong></strong> <br />{infoCard.info}</h6>
                        <div className="h6 text-secondary">{infoCard.text}</div>
                        <div className="">
                            <img src={infoCard.photo} alt="" style={{ backgroundSize: 'cover', width: '20rem' }} />
                        </div>
                    </div>
                </div >

            ))
            //     </div>
            // </div>
        )
    }

    return (
        <Grow in>
            <Grid className='' container alignItems='stretch' spacing={3}>
                {articles.map((article, i) => {
                    return (<Grid item xs={12} sm={6} md={4} lg={3}>
                        <NewsCard article={article} articlesArticle={activeArticle} i={i} key={i} />
                    </Grid>)
                })}
            </Grid>
        </Grow>
    )
}


export default NewsCards
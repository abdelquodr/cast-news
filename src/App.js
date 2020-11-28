import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards'
import Header from './components/Header'
import './index.css'
// batter
import useStyles from './styles.js'

const alankey = "535eb03057199a7c8aac8821891a29ec2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {

  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles()


  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newsHeadlines') {
          setNewsArticles(articles)
          console.log(newsArticles)
        }
        else if (command === 'newHeadlines') {
          setNewsArticles(articles)
          console.log(newsArticles)
        }

        else if (command === 'Headlines') {
          setNewsArticles(articles)
          console.log(newsArticles)
        }
        else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    })
  }, [])



  return (
    <div >
      <Header />

      <div className="h2 center my-5 pt-3 text-dark" >{newsArticles.length < 1 ? 'How To Use' : ''}</div>
      <div className="container">
        <div className="row">
          <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
      </div>


      <div className="pt-3 mt-5 pb-4 text-center bg-primary text-light">
        Copyright © 2020 All rights reserved | news cast | Qode_Moore
</div>
    </div>
  );
};

export default App;

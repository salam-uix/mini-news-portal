import logo from './logo.svg';
import { ButtonGroup, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './component/News/News';

function App() {
  const [news, setNews] = useState([]);

  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=ee4e88c8fdb24deba91cd3e183341840')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="w-75 mx-auto text-center">
      {
        news.length === 0 ?
        <Spinner variant="text-center" animation="border" />
        :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
      }
      
    </div>
  );
}

export default App;

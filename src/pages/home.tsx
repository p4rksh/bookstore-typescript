import React, { useState } from 'react';
import Book from '../components/book';
import Wallet from '../components/wallet'
import LearningReact from '../assets/images/learningReact.jpg';
import LearningReactNative from '../assets/images/learningReactNative.jpg';
import ReactUpAndLearning from '../assets/images/reactUpandLearning.jpg';

type TBook = {
  title: string,
  img: any,
  price: number,
}

const bookList: TBook[] = [
  {
    title: 'learning React',
    img: LearningReact,
    price: 10000,
  },
  {
    title: 'learning React Native',
    img: LearningReactNative,
    price: 20000,
  },
  {
    title: 'React up and learning',
    img: ReactUpAndLearning,
    price: 30000,
  }
];

const initAmount: number = 40000;

export default function Home() {
  const [money, setMoney] = useState(initAmount)

  return (
    <div className="App">
      <h1>Book Store</h1>
      <section style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <p>샘플 북스토어</p>
        <Wallet money={money} />
        <div className="booklist">
          {bookList.map(({ title, price, img }) => (
            <Book
              key={title}
              title={title}
              img={img}
              price={price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
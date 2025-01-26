// Board.js
import { useState, useEffect } from 'react';
import Card from './Card';
import { v4 } from 'uuid';

function Board() {
  const [items, setItems] = useState(
    [
      { value: 1, img: 'assets/fruits/apple.png', stat: '' },
      { value: 1, img: 'assets/fruits/apple.png', stat: '' },
      { value: 2, img: 'assets/fruits/banana.png', stat: '' },
      { value: 2, img: 'assets/fruits/banana.png', stat: '' },
      { value: 3, img: 'assets/fruits/blueberry.png', stat: '' },
      { value: 3, img: 'assets/fruits/blueberry.png', stat: '' },
      { value: 4, img: 'assets/fruits/cherry.png', stat: '' },
      { value: 4, img: 'assets/fruits/cherry.png', stat: '' },
      { value: 5, img: 'assets/fruits/orange.png', stat: '' },
      { value: 5, img: 'assets/fruits/orange.png', stat: '' },
      { value: 6, img: 'assets/fruits/orange2.png', stat: '' },
      { value: 6, img: 'assets/fruits/orange2.png', stat: '' },
      { value: 7, img: 'assets/fruits/pineapple.png', stat: '' },
      { value: 7, img: 'assets/fruits/pineapple.png', stat: '' },
      { value: 8, img: 'assets/fruits/pomegranate.png', stat: '' },
      { value: 8, img: 'assets/fruits/pomegranate.png', stat: '' },
    ].sort(() => Math.random() - 0.5)
  );

  const [openCards, setOpenCards] = useState([]); // Открытые карточки
  const [disabled, setDisabled] = useState(false); // Для предотвращения кликов во время проверки
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    if (disabled || items[index].stat || openCards.includes(index)) return;

    const newOpenCards = [...openCards, index];
    setOpenCards(newOpenCards);

    if (newOpenCards.length === 2) {
      setDisabled(true);

      const [firstIndex, secondIndex] = newOpenCards;
      if (items[firstIndex].value === items[secondIndex].value) {
        const updatedItems = items.map((item, i) =>
          i === firstIndex || i === secondIndex ? { ...item, stat: 'matched' } : item
        );
        setItems(updatedItems);
        setOpenCards([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setOpenCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (items.every((item) => item.stat === 'matched')) {
      setGameOver(true);
    }
  }, [items]);

  const restartGame = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, stat: '' })).sort(() => Math.random() - 0.5)
    );
    setOpenCards([]);
    setGameOver(false);
    setDisabled(false);
  };

  return gameOver ? (
    <div className="text-center text-green-500 text-2xl">
      <p>Game Over!</p>
      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
      >
        Play Again
      </button>
    </div>
  ) : (
    <div className="grid grid-cols-4 gap-4 w-full justify-center mt-6">
      {items.map((item, index) => (
        <Card
          key={v4()}
          item={item}
          isFlipped={openCards.includes(index) || item.stat === 'matched'}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;

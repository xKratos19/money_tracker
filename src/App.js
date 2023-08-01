import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={'+200 nwe samsung'}/>
          <input type="datetime-local"/>
          </div>
        <div className="description">
        <input type="text" placeholder={'description'}/> 
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction"></div>
        <div className="left">
          <div className="name">New samsung tv</div>
          <div className="description">It was time for new tv</div>
        </div>
        <div className="right">
          <div className="price red">$500</div>
          <div className="datetime">2023-01-08</div>
        </div>
      </div>
      <div className="transactions">
        <div className="transaction"></div>
        <div className="left">
          <div className="name">New samsung tv</div>
          <div className="description">It was time for new tv</div>
        </div>
        <div className="right">
          <div className="price red">$500</div>
          <div className="datetime">2023-01-08</div>
        </div>
      </div>
      <div className="transactions">
        <div className="transaction"></div>
        <div className="left">
          <div className="name">New samsung tv</div>
          <div className="description">It was time for new tv</div>
        </div>
        <div className="right">
          <div className="price green">$500</div>
          <div className="datetime">2023-01-08</div>
        </div>
      </div>
    </main>
  );
}

export default App;

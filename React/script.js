// const Titulo = () => {
//   const number = Math.random() * 1000;
//   return <h1>Meu Título {number}</h1>
// }

// const App = () => {
//   return <div>Meu App
//     <Titulo />
//     <Button />
//     <div>
//       Compre aqui também.
//       <Button />
//     </div>
//     <div>
//       <Compras/>
//       </div>
//   </div>
// }

// const Button = () => {
//   function handleCLick(event) {
//     console.log(event.target.innerText)
//   }
//   return <button onClick={handleCLick}>Comprar</button>;
// };

// const Compras = () => {
//   const [contador, setContador] = React.useState(0);
//   function comprar() {
//     setContador(contador + 1)
//   }
//   return (
//     <div>
//       <button onClick={comprar}>Comprar</button>
//       <p>Total: {contador}</p>
//       <p>Preço: R$ {contador * 250}</p>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('app'))
////////


// JavaScript Puro
// const total = document.getElementById('total')
// const preco = document.getElementById('preco')
// const btn = document.getElementById('button')

// let contador = 1

// function showDom(contador) {
//   preco.innerText = contador * 250;
//   total.innerText = contador;
// }
// showDom(contador)

// function handleClick() {
//   contador++
//   showDom(contador)
// }

// btn.addEventListener('click', handleClick);
////////


// React JS
// const Comprar = () => {
//   const [contador, setContador] = React.useState(1)
 
//   return (
//     <div>
//       <p>Total: {contador}</p>
//       <p>Preço: R$ {contador *250}</p>
//       <button onClick={() => setContador(contador + 1)}>Comprar</button>
//     </div>
//   );
// };

// ReactDOM.render(<Comprar />, document.getElementById('app-react'));


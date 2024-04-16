import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import './index.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [

      ],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'lorem ipsum dloto sit amet, consectetir adipising',
          category: 'chair',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Диван коричневый',
          img: 'sofa-brown.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin tristique nisl, et varius justo sollicitudin ac.',
          category: 'sofa',
          price: '299.99'
        },
        {
          id: 3,
          title: 'Стол обеденный',
          img: 'table-dining.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales justo a nisl fermentum, nec eleifend risus varius.',
          category: 'table',
          price: '129.99'
        },
        {
          id: 4,
          title: 'Лампа настольная',
          img: 'lamp-table.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis dui vel neque hendrerit, eget fermentum purus scelerisque.',
          category: 'lamp',
          price: '39.99'
        },
        {
          id: 5,
          title: 'Шкаф гардеробный',
          img: 'wardrobe.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien ac sapien molestie varius id non lacus.',
          category: 'wardrobe',
          price: '199.99'
        }
      ]
    };
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header order={this.state.order} />
        <Items items={this.state.items} onAdd = {this.addToOrder}/>
        <Footer />
      </div>
    );
  }
  addToOrder(item){
    let isInArray = false
    this.state.order.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({order:[...this.state.order, item] })}
}

export default App;

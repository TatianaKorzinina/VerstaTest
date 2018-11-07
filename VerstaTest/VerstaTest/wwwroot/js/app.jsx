
class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.order };
       
    }

    render() {
        return <tr>
                <td>{this.state.data.orderId}</td> 
                <td>{this.state.data.senderCity}</td>
                <td>{this.state.data.senderAddress}</td>
                <td>{this.state.data.recipientCity}</td>
                <td>{this.state.data.recipientAddress}</td>
                <td>{this.state.data.goodsWeight}</td>
                <td>{this.state.data.date}</td>
            
              </tr>

        
                   
                   
               ;
    }
}


class OrderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { orders: [] };

       
    }
    // загрузка данных
    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ orders: data });
        }.bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
   
    render() {

                return <div>
          
            <h2>Список заказов</h2>
            
            <div>
               
                <table >
                    <thead><tr>
                        <th>номер заказа</th>
                        <th>город отправителя</th>
                        <th>адрес отправителя</th>
                        <th>город доставки</th>
                        <th>адрес доставки</th>
                        <th>вес посылки</th>
                        <th>дата отправления</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.orders.map(function (order) {

                        return <Order key={order.id} order={order}  />
                    })
                }
                    </tbody>
                </table>
                
            </div>
        </div>;
    }
}

ReactDOM.render(
    <OrderList apiUrl="/api/delivery" />,
    document.getElementById("content")
);
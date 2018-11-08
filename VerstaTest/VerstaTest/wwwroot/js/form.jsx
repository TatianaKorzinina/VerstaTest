
class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.order };
    }

    render() {
        return <tbody>
            <tr><td>{this.state.data.senderCity}</td>
                <td>{this.state.data.senderAddress}</td>
                <td>{this.state.data.recipientCity}</td>
                <td>{this.state.data.recipientAddress}</td>
                <td>{this.state.data.goodsWeight}</td>
                <td>{this.state.data.date}</td>
            </tr>


        </tbody>
                   
                   
               ;
    }
}

class OrderForm extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {
            senderCity: "", senderAddress:"", recipientCity:"", recipientAddress:"",
            goodsWeight:0
        };
 
        this.onSubmit = this.onSubmit.bind(this);
        this.onSenderCityChange = this.onSenderCityChange.bind(this);
        this.onSenderAddressChange = this.onSenderAddressChange.bind(this);
        this.onRecipientCityChange = this.onRecipientCityChange.bind(this);
        this.onRecipientAddressChange = this.onRecipientAddressChange.bind(this);
        this.onGoodsWeightChange = this.onGoodsWeightChange.bind(this);
    }
    onSenderCityChange(e) {
        this.setState({senderCity: e.target.value});
    }
    onSenderAddressChange(e) {
        this.setState({senderAddress: e.target.value});
    }
    onRecipientCityChange(e) {
        this.setState({recipientCity: e.target.value});
    }
    onRecipientAddressChange(e) {
        this.setState({recipientAddress: e.target.value});
    }
    onGoodsWeightChange(e) {
        this.setState({goodsWeight: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        var orderSenderCity = this.state.senderCity.trim();
        var orderSenderAddress = this.state.senderAddress.trim();
        var orderRecipientCity = this.state.recipientCity.trim();
        var orderRecipientAddress = this.state.recipientAddress.trim();
        var orderGoodsWeight = this.state.goodsWeight;
        

        this.props.onOrderSubmit({ senderCity: orderSenderCity , senderAddress:orderSenderAddress, 
            recipientCity:orderRecipientCity, recipientAddress:orderRecipientAddress,
            goodsWeight:orderGoodsWeight});
        this.setState({senderCity: "", senderAddress:"", recipientCity:"", recipientAddress:"",
            goodsWeight:0});
    }
    render() {
        return (
            <div>
                
            <form onSubmit={this.onSubmit}>
               
                <p>
                    <input type="text"
                           placeholder="город отправителя"
                           value={this.state.senderCity}
                           onChange={this.onSenderCityChange} />
                </p>
                <p>
                    <input type="text"
                           placeholder="адрес отправителя"
                           value={this.state.senderAddress}
                           onChange={this.onSenderAddressChange} />
                </p>
                <p>
                    <input type="text"
                           placeholder="город получателя"
                           value={this.state.recipientCity}
                           onChange={this.onRecipientCityChange} />
                </p>
                <p>
                    <input type="text"
                           placeholder="адрес получателя"
                           value={this.state.recipientAddress}
                           onChange={this.onRecipientAddressChange} />
                </p>
                <p>
                    <input type="number"
                           placeholder="вес посылки"
                           value={this.state.goodsWeight}
                           onChange={this.onGoodsWeightChange} />
                </p>
                <input type="submit" value="Сохранить" />
            </form>
                  
            </div>    
        );
    }
}


class OrderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { orders: [] };
        this.onAddOrder = this.onAddOrder.bind(this);
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
    // добавление объекта
    onAddOrder(order) {
        if (order) {

            var data = JSON.stringify({
                "senderCity": order.senderCity, "SenderAddress": order.senderAddress,
                "recipientCity": order.recipientCity, "recipientAddress": order.recipientAddress,
                "goodsWeight":order.goodsWeight
        });
            var xhr = new XMLHttpRequest();

            xhr.open("post", this.props.apiUrl, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onload = function () {
                if (xhr.status == 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send(data);
        }
    }

    render() {

       
  return <div>
               <OrderForm onOrderSubmit={this.onAddOrder} />
               <a href="List.html">посмотреть список заказов</a>
            
        </div>;
    }
}

ReactDOM.render(
    <OrderList  apiUrl="/api/delivery" />,
    document.getElementById("content")
);
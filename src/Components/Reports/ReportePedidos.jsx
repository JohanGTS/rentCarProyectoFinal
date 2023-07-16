import React from "react";

const ReportePedido = ({ order }) => {
  const {
    orderNumber,
    date,
    shippingAddress,
    items,
    subtotal,
    taxes,
    shipping,
    total,
  } = order;
  const order2 = {
    orderNumber: "1234567890",
    date: "01 de julio de 2023",
    shippingAddress: "Calle Principal 123, Ciudad, Estado, Código Postal",
    items: [
      { product: "Producto 1", price: "$10.00" },
      { product: "Producto 2", price: "$20.00" },
      { product: "Producto 3", price: "$15.00" },
    ],
    subtotal: "$45.00",
    taxes: "$4.50",
    shipping: "$0.00",
    total: "$49.50",
  };
  
  return (
    <div className="receipt">
      <div className="header">
        <h1>AMAZON.COM</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2>Fecha: {date}</h2>
          <h2>Número de Pedido: {orderNumber}</h2>
        </div>

        <div className="section">
          <h3>Dirección de Envío:</h3>
          <p>{shippingAddress}</p>
        </div>

        <div className="section">
          <h2>DETALLES DE LA COMPRA</h2>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Fecha de inicio</th>
                <th>Fecha de fin</th>
                <th>Monto total pagado</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.fechaI}</td>
                  <td>{item.fechaF}</td>
                  <td>{item.monto}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Subtotal</td>
                <td>{subtotal}</td>
              </tr>
              <tr>
                <td>Impuestos</td>
                <td>{taxes}</td>
              </tr>
              <tr>
                <td>Envío</td>
                <td>{shipping}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="section">
          <h2>INFORMACIÓN DE PAGO</h2>
          <p>Tarjeta de Crédito: **** **** **** 1234</p>
          <p>Fecha de Vencimiento: 12/24</p>
        </div>

        <div className="section">
          <h2>INFORMACIÓN DE CONTACTO</h2>
          <p>Atención al Cliente de Amazon:</p>
          <p>Teléfono: 1-800-123-4567</p>
          <p>Email: customer.service@example.com</p>
        </div>
      </div>

      <div className="footer">
        <h2>GRACIAS POR TU COMPRA</h2>
      </div>
    </div>
  );
};

export default ReportePedido;

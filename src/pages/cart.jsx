import { useState } from 'react';
import PayPalButton from '../components/payPalButton';

const Cart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Pack Full Surftrip", price: 69990, quantity: 0 },
        { id: 2, name: "Pack Surfer Avanzado", price: 49990, quantity: 0 }
    ]);

    const updateQuantity = (id, quantity) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, quantity } : product
        ));
    };

    const totalPrice = products.reduce((total, product) => 
        total + product.price * product.quantity, 0
    );

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
            <ul className="divide-y divide-gray-200">
                {products.map((product) => (
                    <li key={product.id} className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <p className="text-xl font-medium">{product.name}</p>
                            <span className="ml-2 text-gray-600">${product.price}</span>
                        </div>
                        <input
                            type='number'
                            value={product.quantity}
                            onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                            className="w-24 h-10 px-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </li>
                ))}
            </ul>
            <p className="text-xl font-medium mt-4">Total: ${totalPrice}</p>
            <PayPalButton total={totalPrice} />
        </div>
    );
};

export default Cart;
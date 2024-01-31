import { ReactNode, useState, useEffect, createContext } from 'react'
import { coffees, AcceptedPayments } from '../data/data'
import { newOrderFormType } from '../pages/Checkout'

export interface CartItem {
  coffeeId: (typeof coffees)[number]['id']
  quantity: number
  price: number
  totalPerItem?: number
}

export interface OrderDataProps {
  address: {
    zipCode: string
    street: string
    number?: string
    complement?: string
    district?: string
    city: string
    country: string
  }
  paymentMode: (typeof AcceptedPayments)[number]['value']
  products: CartItem[]
  deliveryFee: number
  totalOrderValue: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export interface NewOrderData {
  number: string
  paymentMode: (typeof AcceptedPayments)[number]['value']
  zipCode: string
  street: string
  district: string
  city: string
  country: string
  complement?: string | undefined
}

interface CartContextType {
  userCart: CartItem[]
  orderData: OrderDataProps
  totalOrder: number
  totalQuantityItems: number
  totalItemsValue: number
  deliveryFee: number
  addCoffeeToCart: (newItem: CartItem) => void
  removeCoffeeFromCart: (removedItem: (typeof coffees)[number]['id']) => void
  updateCartItem: (updatedItem: CartItem) => void
  createOrder: (data: newOrderFormType) => void
}

const DELIVERY_FEE = 3.5

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [userCart, setUserCart] = useState<CartItem[]>(fetchCart)
  const [orderData, setOrderData] = useState<OrderDataProps>(
    {} as OrderDataProps,
  )

  const totalItemsValue = userCart.reduce((_sum, cartItem) => {
    if (cartItem.totalPerItem) {
      return _sum + cartItem.totalPerItem
    } else {
      return 0
    }
  }, 0)

  const totalQuantityItems = userCart.reduce(
    (_sum, { quantity }) => _sum + quantity,
    0,
  )
  const deliveryFee = DELIVERY_FEE
  const totalOrder = totalItemsValue + deliveryFee

  function addCoffeeToCart({ coffeeId, quantity, price }: CartItem) {
    const totalValuePerItem = quantity * price
    setUserCart((prevState) => [
      ...prevState,
      { coffeeId, quantity, price, totalPerItem: totalValuePerItem },
    ])
  }

  function removeCoffeeFromCart(coffeeId: (typeof coffees)[number]['id']) {
    setUserCart((prevState) =>
      prevState.filter((item) => item.coffeeId !== coffeeId),
    )
  }

  function updateCartItem({ coffeeId, quantity, price }: CartItem) {
    removeCoffeeFromCart(coffeeId)

    addCoffeeToCart({ coffeeId, quantity, price })

    sortItemCartById()
  }

  function resetCart() {
    const emptyCart = [] as CartItem[]

    setUserCart(emptyCart)
  }

  function createOrder(data: newOrderFormType) {
    const newOrder: OrderDataProps = {
      address: data.address,
      paymentMode: data.paymentMode,
      products: userCart,
      deliveryFee,
      totalOrderValue: totalOrder,
    }
    setOrderData(newOrder)
    resetCart()
  }

  function fetchCart(): CartItem[] {
    const storedStateAsJson = localStorage.getItem(
      '@ignite-coffeeShop:user-cart-state-1.0.0',
    )
    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    } else {
      return [] as CartItem[]
    }
  }

  function sortItemCartById() {
    setUserCart((prevState) =>
      prevState.sort((a: CartItem, b: CartItem) => a.coffeeId - b.coffeeId),
    )
  }

  useEffect(() => {
    const stateJson = JSON.stringify(userCart)

    localStorage.setItem('@ignite-coffeeShop:user-cart-state-1.0.0', stateJson)
  }, [userCart])

  useEffect(() => {
    const stateJson = JSON.stringify(orderData)

    localStorage.setItem('@ignite-coffeeShop:user-order-state-1.0.0', stateJson)
  }, [orderData])

  return (
    <CartContext.Provider
      value={{
        userCart,
        orderData,
        totalOrder,
        totalQuantityItems,
        totalItemsValue,
        deliveryFee,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCartItem,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

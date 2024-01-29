import { ReactNode, useState, useEffect, createContext } from 'react'

export interface CartItem {
  coffeeId: number
  quantity: number
  price: number
  totalPerItem: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  userCart: CartItem[]
  addCoffeeToCart: (newItem: CartItem) => void
  removeCoffeeOnCart: (removedItem: CartItem) => void
  totalPurchase: number
  totalQuantityItems: number
}

const DELIVERY_FEE = 3.5

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [userCart, setUserCart] = useState<CartItem[]>([])

  const totalValue = userCart.reduce(
    (_sum, { totalPerItem }) => _sum + totalPerItem,
    0,
  )

  const totalQuantityItems = userCart.reduce(
    (_sum, { quantity }) => _sum + quantity,
    0,
  )
  const deliveryFee = DELIVERY_FEE
  const totalPurchase = totalValue + deliveryFee

  function addCoffeeToCart({ coffeeId, quantity, price }: CartItem) {
    const totalCartItem = quantity * price
    setUserCart((prevState) => [
      ...prevState,
      { coffeeId, quantity, price, totalPerItem: totalCartItem },
    ])
  }

  function removeCoffeeOnCart(removedItem: CartItem) {
    setUserCart(
      userCart.filter((item) => item.coffeeId !== removedItem.coffeeId),
    )
  }

  async function fetchCart() {
    const storedStateAsJson = await localStorage.getItem(
      '@ignite-coffeeShop:user-cart-state-1.0.0',
    )
    if (storedStateAsJson) {
      setUserCart(JSON.parse(storedStateAsJson))
    }
  }

  useEffect(() => {
    if (userCart.length > 0) {
      const stateJson = JSON.stringify(userCart)

      localStorage.setItem(
        '@ignite-coffeeShop:user-cart-state-1.0.0',
        stateJson,
      )
    }
  }, [userCart])

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <CartContext.Provider
      value={{
        userCart,
        addCoffeeToCart,
        removeCoffeeOnCart,
        totalPurchase,
        totalQuantityItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
